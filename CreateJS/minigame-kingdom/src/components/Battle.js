import {Container} from 'createjs-module';


/*============ Import components ===============*/
import Header from './Header';
import Camera from './Camera';
import Footer from './Footer';




class Battle extends Container{
    constructor(props){
        super();
        this.setup();
    }
    setup(){
        /*============ Create Camera ===============*/
        this.addChild(new Camera());
        /*============ Create Header ===============*/
        this.addChild(new Header());
        /*============ Create footer ===============*/
        this.addChild(new Footer());
    }
}
export default Battle;