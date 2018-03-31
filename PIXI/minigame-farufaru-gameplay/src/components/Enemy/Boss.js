import Soldier from './Soldier';
import { gameplay, map} from '../../store';


class Boss extends Soldier{
    constructor(){
        super(map.boss);

        this.x = map.length;
        this.y = (~~Math.range(0,map.lances) + 0.5) * gameplay.lanceHeight;

        const dead = this.actions.dead;
        this.actions.dead = (function(){
            dead();
            gameplay.bossdead = true;
        }).bind(this);
        const obj = {};
        obj[this.enemyID] = 0;
        gameplay.dead = obj;
    }
}

export default Boss;