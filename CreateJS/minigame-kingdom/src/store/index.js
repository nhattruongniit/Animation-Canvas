import gameplay from './gameplay';
import style from './style';
import soldier from './soldier';
import boss from './boss';
import map from './map';


const canvas = {
    width: window.innerWidth,
    height: window.innerHeight
}


const resources = {
    'bg-stage': 'sprites/bg-stage.jpg.json',
    header: 'sprites/header.png.json',
    number: 'sprites/number.png.json',
    footer: 'sprites/footer.png.json',
    house: 'sprites/house.png.json',
    hero: 'sprites/hero.png.json'
}

resources.enemy

export {
    canvas, gameplay, resources, style ,
    soldier, boss, map
};