import config from 'farufaru-config';
const resources = {
    ground: 'sprites/ground.jpg.json',
    header: 'sprites/header.png.json',
    number: 'sprites/number.png.json',
    footer: 'sprites/footer.png.json',
    house: 'sprites/house.png.json',
    hero: 'sprites/hero.png.json',
    status: 'sprites/status.png.json',
    sound: 'sounds/sprite.json'
};

Object.keys(resources).forEach(key => {
    resources[key] = config.uri + resources[key];
});
export default resources;