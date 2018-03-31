
/*======================= Import Config ===========================*/
import {canvas as canvasSize, resources} from './store';
import './mixin';

import {Stage, Ticker, LoadQueue, ImageSheetLoader, JSONLoader}  from 'createjs-module';

/*======================= Import Components ===========================*/
import Battle from './components/Battle';


class KingdomGame extends Stage{
    constructor(canvas){

        /*======================= Fix canvas size ===========================*/
        canvas = document.getElementById(canvas);
        canvas.width = canvasSize.width;
        canvas.height = canvasSize.height;

        super(canvas);
        Ticker.framerate = 60;
        Ticker.addEventListener('tick', this);

        this.loadLibs();
    }

    loadLibs(){
        const queue = new LoadQueue(true);

        Object.entries(resources).forEach(([id,src]) => {
            queue.loadFile({id, src, type: 'image-sheet'});
        });
        queue.on('complete', e => {
            Object.keys(resources).forEach(id => resources[id] = queue.getResult(id));
            setTimeout(this.setup.bind(this));
        });
        queue.load();
        

        // queue.loadFile({id: 'bg-stage', src: store.bgStage.sheet, type: 'image-sheet'});
        // queue.on('complete', this.setup.bind(this));
    }

    setup(){
        //Create gameplay
        this.addChild(this.battle = new Battle({}));
    }
}
export default KingdomGame;