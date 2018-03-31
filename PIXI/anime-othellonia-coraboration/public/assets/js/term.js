(function() {

    const loader = PIXI.loaders.shared;

    class Flash extends PIXI.Sprite {
        constructor(props) {
            super(props);
        }
        light(duration) {
            const light = new PIXI.filters.ColorMatrixFilter();

            light.matrix = [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                0, 0, 0, 1, 0
            ];
            this.filters = [light];


            return new Promise(next => {
                light.alpha = 0;
                TweenLite.to(light, duration * 0.4, {
                    alpha: 0.45,
                    onComplete: () => {
                        TweenLite.to(light, duration * 0.6, {
                            alpha: 0,
                            onComplete: () => {
                                this.filters = [];
                                next();
                            }
                        })
                    }
                })
            });
        }

        moveFrom(duration, props, delay) {
            return new Promise(next => {
                if (props.scale !== undefined) {
                    const scale = props.scale;
                    delete props.scale;
                    TweenLite.from(this.scale, duration, { x: scale, y: scale, delay: delay });
                }
                TweenLite.from(this, duration, Object.assign(props, { delay: delay, onComplete: () => next() }));
            });
        }
        setX(value) {
            this.x = value + this.anchor.x * this.width
        }
        setY(value) {
            this.y = value + this.anchor.y * this.height
        }
        setPos(x, y) {
            this.setX(x);
            this.setY(y);
        }
    }

    class Line extends PIXI.Application {

    }

    class Background extends PIXI.Container {
        constructor() {
            super();


        }
    }



    class App extends PIXI.Application {
        constructor(props) {
            super(props);

            setTimeout(() => this.initialize(), 500)

        }

        initialize() {
            /* CHARA 7 ===============================================================*/
            (function() {
                var sprite = new Flash(loader.resources.main_chara7.texture);
                sprite.anchor.set(0.5, 1);
                sprite.setPos(226.5, -15);
                this.stage.addChild(sprite);

                sprite.moveFrom(0.5, {
                    scale: 0
                }, 0.3).then(() => sprite.light(1.5))
            }).call(this);

            /* CHARA 6 ===============================================================*/
            (function() {
                var sprite = new Flash(loader.resources.main_chara6.texture);
                sprite.anchor.set(0.5, 1);
                sprite.setPos(34.5, 204);
                this.stage.addChild(sprite);

                sprite.moveFrom(0.5, {
                    scale: 0
                }, 0.25).then(() => sprite.light(1.5))
            }).call(this);


            /* CHARA 5 ===============================================================*/
            (function() {
                var sprite = new Flash(loader.resources.main_chara5.texture);
                sprite.anchor.set(0.5, 1);
                sprite.setPos(587.5, 184);
                this.stage.addChild(sprite);
                sprite.moveFrom(0.5, {
                    scale: 0
                }, 0.2).then(() => sprite.light(1.5))
            }).call(this);


            /* CHARA 4 ===============================================================*/
            (function() {
                var sprite = new Flash(loader.resources.main_chara4.texture);
                sprite.anchor.set(0.5, 1);
                this.stage.addChild(sprite);
                sprite.setPos(247, 235);

                sprite.moveFrom(0.5, {
                    scale: 0
                }, 0.15).then(() => sprite.light(1.5))
            }).call(this);


            /* CHARA 3 ===============================================================*/
            (function() {
                var sprite = new Flash(loader.resources.main_chara3.texture);

                sprite.anchor.set(0.5, 1);
                this.stage.addChild(sprite);
                sprite.setPos(604, 240);
                sprite.moveFrom(0.5, {
                    scale: 0
                }, 0.1).then(() => sprite.light(1.5))
            }).call(this);
            /* CHARA 2 ===============================================================*/
            (function() {
                var sprite = new Flash(loader.resources.main_chara2.texture);
                sprite.anchor.set(0.5, 1);
                this.stage.addChild(sprite);
                sprite.setPos(477, 342);
                sprite.moveFrom(0.5, {
                    scale: 0
                }, 0.05).then(() => sprite.light(1.5))
            }).call(this);


            /* CHARA 1 ===============================================================*/
            (function() {
                var sprite = new Flash(loader.resources.main_chara1.texture);
                sprite.anchor.set(0.5, 1);
                this.stage.addChild(sprite);
                sprite.setPos(128, 372);

                sprite.moveFrom(0.5, {
                    scale: 0
                }, 0).then(() => sprite.light(1.5))
            }).call(this);

            /* LIGHT  ===============================================================*/
            (function() {
                var sprite = new Flash(loader.resources.light1.texture);
                sprite.anchor.set(0.5, 1);
                this.stage.addChild(sprite);
                sprite.setPos(250, 321);

                sprite.moveFrom(2, {
                    alpha: 0
                }, 0.8)
            }).call(this);
        }
    }

    loader
        .add('main_chara1', 'assets/images/top/main_chara1.png')
        .add('main_chara2', 'assets/images/top/main_chara2.png')
        .add('main_chara3', 'assets/images/top/main_chara3.png')
        .add('main_chara4', 'assets/images/top/main_chara4.png')
        .add('main_chara5', 'assets/images/top/main_chara5.png')
        .add('main_chara6', 'assets/images/top/main_chara6.png')
        .add('main_chara7', 'assets/images/top/main_chara7.png')
        .add('light1', 'assets/images/top/light1.png');

    loader.onComplete.add(() => {
        var app = new App({
            width: 1280,
            height: 960,
            transparent: true,
            resolution: 1
        });

        $('#wrapper').prepend(app.view);
        $(app.view).attr('id', 'slideshow')
    });
    loader.load();

})();