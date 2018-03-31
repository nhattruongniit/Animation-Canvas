import {Container, Graphics, Sprite} from 'pixi.js';
import {TimelineMax, TweenLite, Power2, Bounce, TweenMax} from 'gsap';
import {SpriteSheet} from '../../objects';
import {ticker,gameplay,enemy,resources} from '../../store';

function deadFrames(){
    return Object.values(resources.enemy.dead);
}
class DeadEffect extends SpriteSheet{
    constructor(){
        super(deadFrames());
        this.anchor.set(0.5,1);
        this.animationSpeed = this._textures.length/60 * 3;
        this.loop = false;
    }
}


class Soldier extends Container{
    constructor(id){
        super();

        if(!enemy[id]){
            const all = Object.keys(enemy);
            id = all[~~Math.range(0,all.length)];
        }

        this.enemyID = id;
        this.config = enemy[id] || Object.values(enemy).shift();
        this.resources = {};
        this.resources = resources.enemy[id];
        
        this.setupActions();
        this.addUI();
    }

    setupActions(){
        const id = this.enemyID;
        const actions = this.actions = {
            die(){
                const dead = Object.assign({},gameplay.dead);
                dead[id] = (dead[id]||0) + gameplay.factor * gameplay.boost;
                gameplay.dead = dead;
                
                const inventorys = Object.keys(this.resources)
                    .filter(key => key.split('-')[0] === 'inventory')
                    .map(key => {
                        const sprite = new Sprite(this.resources[key]);
                        sprite.anchor.set(0.5);
                        sprite.y = -50;
                        this.addChild(sprite);
                        
                        const 
                            x = Math.range(gameplay.speed ,gameplay.speed + 200),
                            y = -Math.range(200,300),
                            time = Math.range(0.4,0.6),
                            rotation = Math.range(5,15)
                        ;


                        const timeLine = new TimelineMax();
                        timeLine
                            .add([
                                TweenMax.to(sprite,time,{x, rotation}),
                                TweenMax.to(sprite,time*0.4,{y, ease: Power2.easeOut}),
                                TweenMax.to(sprite,time*0.6,{y: Math.range(-50,50), ease: Bounce.easeOut, delay:0.2})
                            ]);
                        timeLine.timeScale(0.5).play();
                        sprite.on('removed',() => timeLine.kill());
                    });

                this.actions.dead();
            },
            dead(){
                this.removeChild(this.background);
                const eff = new DeadEffect();
                this.addChild(eff);
                eff.on('complete', () => eff.destroy());
                eff.play();
                let camera = (function(state) {
                    const bounds = this.getBounds();
                    if(bounds.x + bounds.width < 0){
                        gameplay.off('changed:camera',camera);
                        this.destroy({children:true});
                    }
                }).bind(this);
                gameplay.on('changed:camera',camera);
            }
        };
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        
    }

    addUI(){
        const background = this.background = new Sprite(this.resources.sprite);
        background.anchor.set(0.5,0.9);
        this.addChild(background);
        this.scale.set(0.9);
    }

    destroy(child){
        super.destroy(child);
    }
}

export default Soldier;