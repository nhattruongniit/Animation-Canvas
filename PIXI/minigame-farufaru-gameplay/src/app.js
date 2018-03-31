
import {Application,loaders, Texture}  from 'pixi.js';


/*======================= Import Config ===========================*/
import Store,{ ticker, canvas, resources, gameplay, map } from './store';

/*======================= Import Components ===========================*/

import Sound from './components/Sound';
import Battle from './components/Battle';
import config from 'farufaru-config';


class KingdomGame extends Application{
    constructor(props){
        props = Object.assign(canvas,props);
        super(props);
        canvas.renderer = this.renderer;
        //this.ticker = ticker;
        this.loadLibs();
    }

    loadLibs(){
        const loading = gameplay.loading;
        loading.resource = true;
        KingdomGame.loadResources(resources).then(e => {
            loading.resource = false;
            loading.sound = true;
            loading.enemy = true;
            Sound.load().then(e => loading.sound = false);
            KingdomGame.loadResources(resources.enemy).then(e => {
                setTimeout(this.setup.bind(this));
                loading.enemy = false;
            });
        });
    }

    setup(){
        //Create gameplay
        this.stage.addChild(this.battle = new Battle({}));
        this.render();
        gameplay.play = config.autoPlay || false;

        //gameplay.on('changed:end', () => setTimeout(()=>this.battle.destroy({children:true}),1000));
    }

    destroy(ops){
        this.ticker = null;
        super.destroy(ops);
    }
}
Object.assign(KingdomGame,{
    loadResources(resources){
        const loads = Object.entries(resources)
                        .filter(e => typeof e[1] === 'string');
        return new Promise(next => {
            if(loads.length === 0) return next({resources:resources});
            const loader = new loaders.Loader();
            
            loads.forEach(e => {
                loader.add.apply(loader,e);
            });
            loader.once('complete',result => {
                loads.forEach(e => {
                    const rs = result.resources[e[0]];
                    resources[e[0]] = rs.textures || rs;
                });
                next(result);
            });
            loader.load();
        });
    }
});

export default KingdomGame;