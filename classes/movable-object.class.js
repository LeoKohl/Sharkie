class MovableObject {
    x = 60;
    y = 330;
    height = 100;
    width = 150;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving Right');
    }

    moveLeft() {

    }
}