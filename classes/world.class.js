class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    cameraX = 0;

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

        this.ctx.translate(this.cameraX, 0);

        this.addObjArrToWorld(this.level.backgroundObjects);
        this.addObjArrToWorld(this.level.enemies);
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
}