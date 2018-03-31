import {Container, extras, Sprite} from 'pixi.js';

import {resources, gameplay, canvas, style, map} from '../../store';

class TimeLine extends Container{
    constructor(){
        super();

        this.setupActions();
        this.addUI();
    }

    setupActions(){
        const actions = this.actions = {
            distance(to){
                const per = to<map.length?to / map.length:1;
                this.iconCurrent.x = this.baseLine.width * per;
                this.colorLine.scale.x = per;
            }
        };
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));

        gameplay
            .on('changed:distance', this.actions.distance);
    }

    addUI(){
        Object.assign(this,{
            x: canvas.width * 0.12,
            y: canvas.height * 0.1
        });

        const
            imgs = resources.header,
            width = canvas.width * 0.76,
            scale = 0.8,
            natureWidth = this.natureWidth = width/scale,
            baseLineImg = imgs['bar-base'],
            baseLine    = this.baseLine     = new extras.TilingSprite(baseLineImg, natureWidth, baseLineImg.height),
            colorLine   = this.colorLine    = new extras.TilingSprite(imgs['bar-color'], natureWidth, baseLineImg.height),
            iconStart   = this.iconStart    = new Sprite(imgs['icon-start']),
            iconGoal    = this.iconGoal     = new Sprite(imgs['icon-goal']),
            iconCurrentFrame                = new Sprite(imgs['icon-current']),
            iconCurrent = this.iconCurrent  = new Container()
        ;
        this.setIconSize(iconStart);
        this.setIconSize(iconGoal);
        this.setIconSize(iconCurrentFrame);
        iconCurrent.addChild(iconCurrentFrame);
        iconGoal.x = natureWidth;
        this.addChild(baseLine,colorLine,iconStart,iconGoal,iconCurrent);
        this.scale.set(scale);
        this.actions.distance(gameplay.distance);
    }

    setIconSize(icon){
        let {width,height} = icon;
        icon.anchor.x = icon.anchor.y = 0.5;
        icon.y = this.baseLine.height / 2;
    }

    destroy(child){
        super.destroy(child);
        gameplay.off('changed:distance', this.actions.distance);
    }
}
export default TimeLine;