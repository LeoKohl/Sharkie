let canvas;
let ctx;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

document.addEventListener('keydown', (event) => {
    keyboard.keyDown(event.code);
});

document.addEventListener('keyup', (event) => {
    keyboard.keyUp(event.code);
});