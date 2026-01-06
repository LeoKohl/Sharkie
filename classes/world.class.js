class World {
    character = new Character();
    enemies = [
        new PufferFish(),
        new PufferFish(),
        new PufferFish()
    ];
    backgroundObjectsData = [
        {
            'src': 'resources/img/3.Background/Layers/5.Water/D1.png',
            'initPos': -720
        },
        {
            'src': 'resources/img/3.Background/Layers/3.Fondo1/D1.png',
            'initPos': -720
        },
        {
            'src': 'resources/img/3.Background/Layers/4.Fondo2/D1.png',
            'initPos': -720
        },
        {
            'src': 'resources/img/3.Background/Layers/2.Floor/D1.png',
            'initPos': -720
        },
        {
            'src': 'resources/img/3.Background/Layers/1.Light/1.png',
            'initPos': -720
        },
        {
            'src': 'resources/img/3.Background/Layers/5.Water/D2.png',
            'initPos': 0
        },
        {
            'src': 'resources/img/3.Background/Layers/3.Fondo1/D2.png',
            'initPos': 0
        },
        {
            'src': 'resources/img/3.Background/Layers/4.Fondo2/D2.png',
            'initPos': 0
        },
        {
            'src': 'resources/img/3.Background/Layers/2.Floor/D2.png',
            'initPos': 0
        },
        {
            'src': 'resources/img/3.Background/Layers/1.Light/2.png',
            'initPos': 0
        }
    ];

    backgroundObjects = [
    ];
    canvas;
    ctx;
    keyboard;
    cameraX = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.addBackgroundsToArray();
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraX, 0);

        this.addObjArrToWorld(this.backgroundObjects);
        this.addObjArrToWorld(this.enemies);
        this.addToWorld(this.character);

        this.ctx.translate(-this.cameraX, 0);

        let self = this;
        requestAnimationFrame(() => self.draw());
    }

    addObjArrToWorld(objArr) {
        objArr.forEach(obj => {
            this.addToWorld(obj);
        });
    }

    addToWorld(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    addBackgroundsToArray() {
        for (let i = 0; i < 10; i++) {
            this.backgroundObjectsData.forEach(obj => {
                this.backgroundObjects.push(
                    new BackgroundObject(
                        obj.src,
                        obj.initPos + (1440 * i)
                    )
                );
            });
        }
    }
}


/*
new BackgroundObject('resources/img/3.Background/Layers/5.Water/D1.png', -720),
        new BackgroundObject('resources/img/3.Background/Layers/3.Fondo1/D1.png', -720),
        new BackgroundObject('resources/img/3.Background/Layers/4.Fondo2/D1.png', -720),
        new BackgroundObject('resources/img/3.Background/Layers/2.Floor/D1.png', -720),
        new BackgroundObject('resources/img/3.Background/Layers/1.Light/1.png', -720),
        new BackgroundObject('resources/img/3.Background/Layers/5.Water/D2.png', 0),
        new BackgroundObject('resources/img/3.Background/Layers/3.Fondo1/D2.png', 0),
        new BackgroundObject('resources/img/3.Background/Layers/4.Fondo2/D2.png', 0),
        new BackgroundObject('resources/img/3.Background/Layers/2.Floor/D2.png', 0),
        new BackgroundObject('resources/img/3.Background/Layers/1.Light/2.png', 0),
        */