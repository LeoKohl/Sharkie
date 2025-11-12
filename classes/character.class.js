class Character extends MovableObject {
    x = 20;
    height = 280;
    width = 250;

    constructor() {
        super().loadImage('resources/img/1.Sharkie/3.Swim/1.png')
        this.y = 240 - (this.height/2)
    }

    jump() {

    }
}