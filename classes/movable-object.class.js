class MovableObject {
  x = 120;
  y = 250;
  height = 150;
  width = 100;
  speed = 0.15;
  img;
  imageCache = {};
  currentImage = 0;
  otherDirection = false;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  playAnimation(images) {
    this.currentImage = (this.currentImage + 1) % images.length;
    let path = images[this.currentImage];
    this.img = this.imageCache[path];
  }

  moveRight() {
    console.log("Moving Right");
  }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
