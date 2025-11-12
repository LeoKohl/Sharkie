class PufferFish extends MovableObject {
    height = 90;
    width = 120;

    constructor(x) {
        super().loadImage('resources/img/2.Enemy/1.Puffer fish/1.Swim/1.swim1.png');
        this.x = 260 + Math.random() * 500;
        this.y = 330 - (Math.random() * 300);
    }
}