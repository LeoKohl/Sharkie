class World {
    character = new Character();
    enemies = [
        new PufferFish(),
        new PufferFish(),
        new PufferFish()
    ];
    backgroundObjects = [
        new BackgroundObject('resources/img/3.Background/Layers/5.Water/D1.png'),
        new BackgroundObject('resources/img/3.Background/Layers/3.Fondo1/D1.png'),
        new BackgroundObject('resources/img/3.Background/Layers/4.Fondo2/D1.png'),
        new BackgroundObject('resources/img/3.Background/Layers/2.Floor/D1.png')
    ];
    canvas;
    ctx;
    keyboard;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjArrToWorld(this.backgroundObjects);
        this.addObjArrToWorld(this.enemies);
        this.addToWorld(this.character);

        let self = this;
        requestAnimationFrame(() => self.draw());
    }

    addObjArrToWorld(objArr) {
        objArr.forEach(obj => {
            this.addToWorld(obj);
        });
    }

    addToWorld(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}