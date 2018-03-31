import {Ticker, Container, Bitmap} from 'createjs-module';

import ImageRepeat from '../../objects/ImageRepeat';

import {resources, gameplay, canvas, style, map} from '../../store';

class TimeLine extends Container{
    constructor(){
        super();

        this.setupActions();
        this.addUI();
        this.applyActions();
    }

    setupActions(){
        const actions = this.actions = {
            distance(to){
                this.iconCurrent.x = this.width * (to<map.length?to / map.length:1);
            },
            removed(){
                gameplay.off('change:distance', actions.distance);
            }
        }
        Object.entries(actions).forEach(([key,func]) => actions[key] = func.bind(this));
        
    }

    applyActions(){
        gameplay
            .on('change:distance', this.actions.distance);
            //.on('change:'));

        this.on('removed', this.actions.removed);
    }

    addUI(){
        style.header.timeline.call(this);
        const
            imgs = resources.header,
            baseLine    = this.baseLine     = new ImageRepeat(imgs['bar-base'], this.width),
            colorLine   = this.colorLine    = new ImageRepeat(imgs['bar-color'], this.width),
            iconStart   = this.iconStart    = new Bitmap(imgs['icon-start']),
            iconGoal    = this.iconGoal     = new Bitmap(imgs['icon-goal']),
            iconCurrentFrame                   = new Bitmap(imgs['icon-current']),
            iconCurrent = this.iconCurrent  = new Container()
        ;
        this.setIconSize(iconStart);
        this.setIconSize(iconGoal);
        this.setIconSize(iconCurrentFrame);
        iconCurrent.addChild(iconCurrentFrame);

        iconGoal.x = this.width;
        this.addChild(baseLine,colorLine,iconStart,iconGoal,iconCurrent);
        this.actions.distance(gameplay.distance);
    }

    setIconSize(icon){
        var {width,height} = icon.getBounds();
        icon.regX = width/2;
        icon.regY = height/2;
        icon.y = this.baseLine.height / 2;
        icon.scaleX = icon.scaleY = this.iconScale;
    }
}
export default TimeLine;