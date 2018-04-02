import {Container, Sprite, loaders} from 'pixi.js';
import {TweenMax} from 'gsap';

import Character from './Character';
import Title from './Title';
import {Catch} from './Catch';
import {Star} from './Star';
import {Crown} from './Anniversary';
import {TwoYears} from './Anniversary';

export class MainCanvas extends Container {
    constructor(props) {
        super(props);
        this.props = props;
        this.loader = new loaders.Loader()
            .add('mc', props.mc)
            .add('character', props.character)
            .load(this.setup.bind(this))
    }

    Range(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }

    setup() {
        this.textures = this.loader.resources.mc.textures;
        this.texturesCharacter = this.loader.resources.character.textures;
        this._setCharacter();
        this._setAnniversary();
        this._setIcon();
        this._setTitle();
        this._setMedal();
        this._setLogo();
        this._setCatch();
        for (let i = 0; i < 20; i++) {
            let x = this.Range(0, 750)
            let y = this.Range(200, 800);
            var star = new Star(this.textures['star'], {scale: 1.5, duration: 0.5, x, y});
            setTimeout(star.runDouble.bind(star), 2000 + i * 50);
            this.addChild(star);
        }
        for (let i = 0; i < 6; i++) {
            let x = this.Range(280, 480)
            let y = this.Range(15, 215);
            var star = new Star(this.textures['star'], {scale: 1.5, duration: 0.5, x, y});
            setTimeout(star.repeat.bind(star), 2000 + i * 150);
            this.addChild(star);
        }
    }

    _setCharacter() {
        let characterSan = new Character(this.texturesCharacter['character-san'], {x: 375, y: 490, duration: 1.6}),
            characterZor = new Character(this.texturesCharacter['character-zor'], {x: 375, y: 480, duration: 1.6});
        characterSan.run(570);
        characterZor.run(180);
        this.addChild(characterSan);
        this.addChild(characterZor);
    }

    _setAnniversary() {
        let crown = new Crown(this.textures['crown'], {x: 375, y: 140, duration: 0.6});
        setTimeout(() => {
            crown.run(110);
        }, 400);
        let twoYears = new TwoYears(this.textures['two-years'], {x: 375, y: 120, duration: 1.2});
        setTimeout(() => {
            twoYears.run(200, 160);
        }, 600)
        this.addChild(crown);
        this.addChild(twoYears);
    }

    _setLogo() {
        this.logo = new Sprite(this.textures['canvas-logo']);
        this.logo.anchor.set(0.5);
        this.logo.position.set(375, 505);
        TweenMax.set(this.logo, {
            alpha: 0,
        });
        TweenMax.to(this.logo, 0.5, {
            alpha: 100,
        }).delay(1.4);
        this.addChild(this.logo);
    }

    _setMedal() {
        this.medalYellow = new Sprite(this.textures['medal-yellow']);
        this.medalRed = new Sprite(this.textures['medal-red']);
        this.medalBlue = new Sprite(this.textures['medal-blue']);
        this.medalGreen = new Sprite(this.textures['medal-green']);
        this.medalYellow.anchor.set(0.5);
        this.medalRed.anchor.set(0.5);
        this.medalBlue.anchor.set(0.5);
        this.medalGreen.anchor.set(0.5);
        this.medalRed.position.set(505, 510);
        this.medalGreen.position.set(565, 480);
        this.medalYellow.position.set(605, 525);
        this.medalBlue.position.set(650, 500);
        let medalYellow = new
        TweenMax.set([this.medalYellow, this.medalRed, this.medalBlue, this.medalGreen], {
            width: 0,
            height: 0
        });
        TweenMax.to([this.medalYellow], 0.7, {
            width: 92,
            height: 92
        }).delay(1.7);
        TweenMax.to([this.medalRed], 0.5, {
            width: 92,
            height: 92
        }).delay(1.7);
        TweenMax.to([this.medalBlue], 0.8, {
            width: 92,
            height: 92
        }).delay(1.7);
        TweenMax.to([this.medalGreen], 0.6, {
            width: 92,
            height: 92
        }).delay(1.7);
        this.addChild(this.medalBlue);
        this.addChild(this.medalGreen);
        this.addChild(this.medalYellow);
        this.addChild(this.medalRed);
    }

    _setIcon() {
        this.iconOne = new Sprite(this.textures['icon-1']);
        this.iconTwo = new Sprite(this.textures['icon-2']);
        this.iconThree = new Sprite(this.textures['icon-3']);
        this.iconFour = new Sprite(this.textures['icon-4']);
        this.iconOne.anchor.set(0.5);
        this.iconTwo.anchor.set(0.5);
        this.iconThree.anchor.set(0.5);
        this.iconFour.anchor.set(0.5);
        TweenMax.set([this.iconOne, this.iconTwo, this.iconThree, this.iconFour], {
            x: 375,
            y: 660,
            alpha: 0
        });
        TweenMax.to(this.iconFour, 0.5, {
            alpha: 100,
            x: 440,
            y: 405,
            ease: Power3.easeOut
        }).delay(1.5);
        TweenMax.to(this.iconThree, 0.8, {
            alpha: 100,
            x: 290,
            y: 400,
            ease: Power3.easeOut
        }).delay(1.5);
        TweenMax.to(this.iconTwo, 1.1, {
            alpha: 100,
            x: 225,
            y: 510,
            ease: Power3.easeOut
        }).delay(1.5);
        TweenMax.to(this.iconOne, 1.4, {
            alpha: 100,
            x: 115,
            y: 515,
            ease: Power3.easeOut
        }).delay(1.5);
        this.addChild(this.iconTwo);
        this.addChild(this.iconOne);
        this.addChild(this.iconFour);
        this.addChild(this.iconThree);
    }

    _setTitle() {
        let title = new Title(this.textures['canvas-title'], {x: 375, y: 560});
        setTimeout(() => {
            title.run(660);
            this.addChild(title);
        }, 2000);
    }

    _setCatch() {
        let catchBg = new Catch(this.textures['catch-bg'], {x: -375, y: 915, duration: 0.15});
        let catchText1 = new Catch(this.textures['catch-text1'], {x: -100, y: 980, duration: 0.15});
        let catchText2 = new Catch(this.textures['catch-text2'], {x: -245, y: 955, duration: 0.15});
        let catchText3 = new Catch(this.textures['catch-text3'], {x: 250, y: 900, duration: 0.3});
        setTimeout(() => {
            catchBg.run(375, 885);
            catchText1.run(100, 915);
            catchText2.run(245, 900);
        }, 2500);
        setTimeout(() => {
            catchText3.runShow(520, 870);
            for (let i = 0; i < 6; i++) {
                let x = this.Range(300, 750)
                let y = this.Range(820, 920);
                var star = new Star(this.textures['star'], {scale: 1.5, duration: 0.5, x, y, delay: 3.5});
                setTimeout(star.repeat.bind(star), 2200 + i * 50);
                this.addChild(star);
            }
        }, 2700);
        this.addChild(catchBg);
        this.addChild(catchText3);
        this.addChild(catchText2);
        this.addChild(catchText1);
    }
}
