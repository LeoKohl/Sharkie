class Character extends MovableObject {
  x = 20;
  height = 280;
  width = 250;
  speed = 5;
  IMAGES_SWIM = [
    "resources/img/1.Sharkie/3.Swim/1.png",
    "resources/img/1.Sharkie/3.Swim/2.png",
    "resources/img/1.Sharkie/3.Swim/3.png",
    "resources/img/1.Sharkie/3.Swim/4.png",
    "resources/img/1.Sharkie/3.Swim/5.png",
    "resources/img/1.Sharkie/3.Swim/6.png",
  ];
  world;

  constructor() {
    super().loadImage("resources/img/1.Sharkie/3.Swim/1.png");
    this.loadImages(this.IMAGES_SWIM);
    this.y = 240 - this.height / 2;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
        this.x += this.speed;
        this.otherDirection = false;
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
      }

      if (this.world.keyboard.UP && this.y > -95) {
        this.y -= this.speed;
      }

      if (this.world.keyboard.DOWN && this.y + this.height < 500) {
        this.y += this.speed;
      }

      this.world.cameraX = -this.x;
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.moveKeyPressed()) {
        this.playAnimation(this.IMAGES_SWIM);
      }
    }, 125);
  }
}
