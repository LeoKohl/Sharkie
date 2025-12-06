class PufferFish extends MovableObject {
    height = 90;
    width = 120;
    IMAGES_SWIM = [
        'resources/img/2.Enemy/1.Puffer fish/1.Swim/1.swim1.png',
        'resources/img/2.Enemy/1.Puffer fish/1.Swim/1.swim2.png',
        'resources/img/2.Enemy/1.Puffer fish/1.Swim/1.swim3.png',
        'resources/img/2.Enemy/1.Puffer fish/1.Swim/1.swim4.png',
        'resources/img/2.Enemy/1.Puffer fish/1.Swim/1.swim5.png',
    ];

    constructor(x) {
        super().loadImage('resources/img/2.Enemy/1.Puffer fish/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.x = 260 + Math.random() * 500;
        this.y = 330 - Math.random() * 300;
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.currentImage = (this.currentImage + 1) % this.IMAGES_SWIM.length;
            let path = this.IMAGES_SWIM[this.currentImage];
            this.img = this.imageCache[path];
        }, 125);
    }
}