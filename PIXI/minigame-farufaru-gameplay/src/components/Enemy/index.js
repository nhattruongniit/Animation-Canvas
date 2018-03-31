import {Container,Graphics} from 'pixi.js';

import Boss from './Boss';
import Group from './Group';

import {map, gameplay, canvas, skills, enemy} from '../../store';

class Enemy extends Container{
    constructor(){
        super();

        this.setupActions();
        this.initializeMap();
        this.y = canvas.battle.y;
    }

    setupActions(){
        const heroRange = {
            range: gameplay.heroRange
        };

        const actions = this.actions = {
            attack(enemy){
                gameplay.attack = enemy;
                enemy.actions.die();
            },
            distance(state){
                while(this.enemy.length && (this.enemy[0].x < state + canvas.width)){
                    this.addChild(this.enemy.shift());
                    this.children.sort((a,b) => a.y - b.y);
                }

                heroRange.x = state;
                heroRange.y = gameplay.lance * gameplay.lanceHeight + gameplay.lanceHeight / 2;

                const inRange = this.inRange(heroRange);
                inRange.forEach(enemy => this.actions.attack(enemy));
            },
            fireSkill(id){
                if(id === null) return;
                const 
                    skill = skills[id],
                    paths = skill.paths()
                ;
                let inPath;
                if(!paths || !paths.length) return;
                if(paths[0] instanceof Array){                    
                    inPath = paths.map(area => this.inPath(area)).reduce((a,b) => a.concat(b),[]);
                }else{     
                    inPath = this.inPath(paths)
                }
                inPath.forEach(child => this.actions.attack(child));

            },
            end(state){
                if(!state){
                    while(this.children.length) this.removeChildAt(0);
                    this.initializeMap();
                }
            }
        }
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        
        gameplay
            .on('changed:distance', this.actions.distance)
            .on('changed:fireSkill', this.actions.fireSkill)
            .on('changed:end', this.actions.end);
    }

    initializeMap(){
        const childs = [];
        map.arrange.forEach(group => {
            group = new Group(group);
            childs.push.apply(childs,group);
        });
        childs.sort((a,b) => a.x - b.x);
        this.enemy = childs;
        this.enemy.push(this.boss = new Boss());
    }

    inRange(state){
        const inRange = [];
        let child,distance;
        for(let i = 0; i < this.children.length; i++){
            child = this.children[i];
            if(child.inRange) continue;
            if(child.outRange){
                const bounds = child.getBounds();
                if(bounds.x + bounds.width < 0){
                    child.destroy({children: true});
                }
                continue;
            }
            distance = Math.sqrt(Math.pow(child.x - state.x,2) + Math.pow(child.y - state.y,2));
            if(distance <= state.range){
                child.inRange = true;
                inRange.push(child);
            }else if(child.x + state.range < state.x){
                child.outRange = true;
                continue;
            }
        }
        return inRange;
    }

    inPath(paths){
        paths = paths.map(path => {
            return {
                x: path.x * canvas.battle.width + gameplay.camera.x,
                y: path.y * canvas.battle.height
            };
        });

        const area = Math.polygonArea(paths);
        const inPath = [];
        for(let i = 0; i < this.children.length; i++){
            const child = this.children[i];

            if(child.inRange) continue;
            if(child.outRange) {
                child.outRange = false;
            }
            let triangles = paths.slice(0).map((point, i) => {
                const pointB = paths[(i+1)%paths.length];
                return Math.polygonArea([
                    { x: child.x, y: child.y },
                    { x: point.x, y: point.y },
                    { x: pointB.x, y: pointB.y }
                ]);
            }).reduce((a,b) => a + b,0);
            if(triangles - 20 <  area){
                child.inRange = true;
                inPath.push(child);
            }
        }
        return inPath;
    }

    destroy(child){
        gameplay
            .off('changed:distance', this.actions.distance)
            .off('changed:fireSkill', this.actions.fireSkill)
            .off('changed:end', this.actions.end);
        super.destroy(child);
    }
}

export default Enemy;