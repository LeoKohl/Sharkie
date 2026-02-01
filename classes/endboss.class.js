class Endboss extends MovableObject {
  height = 500;
  width = 300;
  x = 1500;
  y = -40;

  IMAGES_MOVING = [
    "resources/img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "resources/img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "resources/img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "resources/img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "resources/img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "resources/img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "resources/img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "resources/img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "resources/img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "resources/img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "resources/img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "resources/img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "resources/img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "resources/img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_MOVING[0]);
    this.loadImages(this.IMAGES_MOVING);
    this.animate();
  }
  animate() {
    this.moveLeft();
    setInterval(() => {
      this.playAnimation(this.IMAGES_MOVING);
    }, 125);
  }
}
