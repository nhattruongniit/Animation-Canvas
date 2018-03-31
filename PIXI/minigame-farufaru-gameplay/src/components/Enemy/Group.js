import Soldier from "./Soldier";
import { gameplay } from "../../store";

class Group extends Array{
    constructor(config){
        super();
        this.config = config;
        Object.entries(config.enemy).forEach(([id,num]) => {
            for(let i = 0; i < num; i++)
                this.push(this.createSoldier(id));
        });
    }

    createSoldier(id){
        const
            {range,lance} = this.config,
            soldier = new Soldier(id)
        ;
        Object.assign(soldier,{
            x: Math.range(range.from, range.to),
            y: gameplay.lanceHeight * lance + Math.range(10,gameplay.lanceHeight - 20)
        });
        return soldier;
    }
}
export default Group;