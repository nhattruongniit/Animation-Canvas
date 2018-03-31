import KingdomGame from './app';
import {gameplay} from './store';

document.addEventListener('DOMContentLoaded', function(){
    let game;
    const button = document.createElement('button');
    button.innerHTML = 'click';
    button.onclick = function(){
        if(!game){
            game = new KingdomGame();
            document.body.appendChild(game.view);
        }else{
            gameplay.end = false;
            gameplay.play = true;
        }
        document.body.webkitRequestFullscreen();
    }
    button.style = 'position:absolute; z-index:1000'
    document.body.appendChild(button)
})