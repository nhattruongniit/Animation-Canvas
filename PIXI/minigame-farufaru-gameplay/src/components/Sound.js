import {gameplay, resources} from '../store';
import { Howl } from 'howler';
export default class Sound extends Howl{
    constructor(json){
        super(json);
        this.load();
        this.setupActions();
    }

    setupActions(){
        let countAttack = 0;
        const actions = this.actions = {
            play(state){
                if(state && gameplay.distance === 0){
                    this.play('start');
                    this.play('bgm');
                }else if(state){
                    this.play('bgm');
                }else{
                    this.pause();
                }
            },
            attack(){
                countAttack++;
                this.play('attack-'+countAttack);
                countAttack = countAttack%2;
            },
            end(state){
                if(state){
                    gameplay.once('changed:play', state => state || this.play('end') || true);
                }
            },
            bossdead(state){
                if(state){
                    this.play('boss');
                }
            },
            sound(state){
                if(state){
                    gameplay
                        .on('changed:play', actions.play)
                        .on('changed:attack', actions.attack)
                        .on('changed:end', actions.end)
                        .on('changed:bossdead', actions.bossdead);
                    actions.play(gameplay.play);
                }else{
                    gameplay
                        .off('changed:play', actions.play)
                        .off('changed:attack', actions.attack)
                        .off('changed:end', actions.end)
                        .off('changed:bossdead', actions.bossdead)
                    ;
                    actions.play(gameplay.play);
                }
                
            }
        };
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));

        gameplay
            .on('changed:sound', actions.sound);
            actions.sound(gameplay.sound);
        
    }


    destroy(){
        this.actions.sound(false);
        gameplay.off('changed:sound', actions.sound);
    }
}

Sound.load = function(){
    const json = resources.sound.data;
    var uri = resources.sound.url;
    uri = uri.split('/').slice(0,-1).join('/');
    json.src = json.urls.map(src => uri + '/' + src);
    const sound = new Sound(json);
    return new Promise(next => sound.once('load',() => next(sound)));
};