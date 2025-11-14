class Character extends MovableObject {
    x = 20;
    height = 280;
    width = 250;
    IMAGES_SWIM = [
        'resources/img/1.Sharkie/3.Swim/1.png',
        'resources/img/1.Sharkie/3.Swim/2.png',
        'resources/img/1.Sharkie/3.Swim/3.png',
        'resources/img/1.Sharkie/3.Swim/4.png',
        'resources/img/1.Sharkie/3.Swim/5.png',
        'resources/img/1.Sharkie/3.Swim/6.png',
    ];

    constructor() {
        super().loadImage('resources/img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.y = 240 - this.height / 2;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.currentImage = (this.currentImage + 1) % this.IMAGES_SWIM.length;
            let path = this.IMAGES_SWIM[this.currentImage];
            this.img = this.imageCache[path];
        }, 125);
    }
}