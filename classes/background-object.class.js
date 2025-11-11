class BackgroundObject extends MovableObject {
    x = 0;
    constructor(imagePath, width, height) {
        super().loadImage(imagePath);
        this.width = width;
        this.height = height;
        this.y = 480 - this.height;
    }
}