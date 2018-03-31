//import React from 'react';
//import './index.css';
//import registerServiceWorker from './registerServiceWorker';
import Game from './src';
var latbai = new Game();
document.body.appendChild(latbai.view);
Object.assign(latbai.view.style, {
    backgroundImage: 'url(assets/images/background.png)',
    backgroundSize: 'cover'
});
//registerServiceWorker();