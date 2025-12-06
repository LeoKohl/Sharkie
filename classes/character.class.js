class Character extends MovableObject {
    x = 20;
    height = 280;
    width = 250;
    speed = 5;
    IMAGES_SWIM = [
        'resources/img/1.Sharkie/3.Swim/1.png',
        'resources/img/1.Sharkie/3.Swim/2.png',
        'resources/img/1.Sharkie/3.Swim/3.png',
        'resources/img/1.Sharkie/3.Swim/4.png',
        'resources/img/1.Sharkie/3.Swim/5.png',
        'resources/img/1.Sharkie/3.Swim/6.png',
    ];
    world;

    constructor() {
        super().loadImage('resources/img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.y = 240 - this.height / 2;
        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
        }, 1000 / 60);


        setInterval(() => {
            if (this.world.keyboard.UP) {
                this.y -= this.speed;
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.DOWN) {
                this.y += this.speed;
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.moveKeyPressed()) {
                this.currentImage = (this.currentImage + 1) % this.IMAGES_SWIM.length;
                let path = this.IMAGES_SWIM[this.currentImage];
                this.img = this.imageCache[path];
            }
        }, 125);
    }
}