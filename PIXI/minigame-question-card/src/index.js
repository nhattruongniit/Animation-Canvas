import { Application } from 'pixi.js';

import Wellcome from './Wellcome';

window.addEventListener('load', function() {
    let apps = window.game = new Application({
        width: 513,
        height: 936,
        transparent: true,
        antialias: true
    });

    let wellcome = new Wellcome({
        width: 513,
        height: 936,
        cards: './assets/images/cards.json'
    });

    apps.stage.addChild(wellcome);
    document.body.appendChild(apps.view);

    Object.assign(apps.view.style, {
        backgroundImage: 'url(./assets/images/bg-main.jpg)',
        backgroundSize: 'cover'
    });
})