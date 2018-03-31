var canvas, app;
var loader = PIXI.loader;
var resources = PIXI.loader.resources;
var Sprite = PIXI.Sprite;
var TextureCache = PIXI.utils.TextureCache;
var Rectangle = PIXI.Rectangle;

app = new PIXI.Application({
    width: 512,
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 1
});

canvas = document.getElementById("myCanvas").appendChild(app.view);

loader
    .add("./images/treasureHunter.json")
    .on("progress", loadProgressHandler)
    .load(setup);

function loadProgressHandler(loader, resources) {
    console.log('loading: ' + resources.url + "|" + "progress: " + loader.progress + "%");
}


var dungeon, explorer, treasure, id, blob;
var gameScene = new PIXI.Container();
var gameOverScene = new PIXI.Container();

function setup() {

    gameOverScene.visible = false;

    app.stage.addChild(gameScene, gameOverScene);

    //Loading the texture atlas
    id = resources["./images/treasureHunter.json"].textures;

    dungeon = new Sprite(id["dungeon.png"]);

    explorer = new Sprite(id["explorer.png"])
    explorer.position.set(68, app.view.height / 2 - explorer.height / 2);

    treasure = new Sprite(id["treasure.png"]);
    treasure.position.set(app.view.width - treasure.width - 48, app.view.height / 2 - treasure.height / 2);

    door = new Sprite(id["door.png"]);
    door.position.set(32, 0);

    gameScene.addChild(dungeon, door, explorer, treasure);

    var numberOfBlobs = 6,
        spacing = 48,
        xOffset = 150,
        speed = 2,
        direction = 1;

    //An array to store all the blob monsters
    blobs = [];

    for (var i = 0; i < 6; i++) {
        blob = new Sprite(id["blob.png"]);
        var x = 45 * i + 150;
        var y = randomInt(0, app.view.height - blob.height);
        blob.position.set(x, y);
        blob.vy = speed * direction;
        direction *= -1;
        blobs.push(blob);
        gameScene.addChild(blob);
    }

    //Set the game state
    state = play;

    //Start the game loop 
    gameLoop();
}

function gameLoop(delta) {
    requestAnimationFrame(gameLoop);
    state();
}

function play(delta) {
    blobs.forEach(function(blob) {
        blob.y += blob.vy;
        let blobHitsWall = collision(blob, { x: 28, y: 10, width: 488, height: 480 });

        //If the blob hits the top or bottom of the stage, reverse
        //its direction
        if (blobHitsWall === "top" || blobHitsWall === "bottom") {
            blob.vy *= -1;
        }
    })
}

function end() {
    gameScene.visible = false;
    gameOverScene.visible = true;
}

//The `randomInt` helper function
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function collision(sprite, container) {

    let collision = undefined;

    //Left
    if (sprite.x < container.x) {
        sprite.x = container.x;
        collision = "left";
    }

    //Top
    if (sprite.y < container.y) {
        sprite.y = container.y;
        collision = "top";
    }

    //Right
    if (sprite.x + sprite.width > container.width) {
        sprite.x = container.width - sprite.width;
        collision = "right";
    }

    //Bottom
    if (sprite.y + sprite.height > container.height) {
        sprite.y = container.height - sprite.height;
        collision = "bottom";
    }

    //Return the `collision` value
    return collision;
}