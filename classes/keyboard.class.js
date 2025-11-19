class Keyboard {
    LEFT;
    RIGHT;
    UP;
    DOWN;
    SPACE;

    constructor() {
        this.LEFT = false;
        this.RIGHT = false;
        this.UP = false;
        this.DOWN = false;
        this.SPACE = false;
    }

    keyDown(key) {
        if (key == 'KeyA') this.LEFT = true;
        if (key == 'KeyD') this.RIGHT = true;
        if (key == 'KeyW') this.UP = true;
        if (key == 'KeyS') this.DOWN = true;
        if (key == 'Space') this.SPACE = true;
    }

    keyUp(key) {
        if (key == 'KeyA') this.LEFT = false;
        if (key == 'KeyD') this.RIGHT = false;
        if (key == 'KeyW') this.UP = false;
        if (key == 'KeyS') this.DOWN = false;
        if (key == 'Space') this.SPACE = false;
    }

    moveKeyPressed() {
        return this.LEFT || this.RIGHT || this.UP || this.DOWN
    }
}