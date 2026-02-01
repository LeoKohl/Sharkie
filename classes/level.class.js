class Level {
  levelLength;
  enemies;
  backgroundObjectsData = [
    {
      src: "resources/img/3.Background/Layers/5.Water/D1.png",
      initPos: 0,
    },
    {
      src: "resources/img/3.Background/Layers/3.Fondo1/D1.png",
      initPos: 0,
    },
    {
      src: "resources/img/3.Background/Layers/4.Fondo2/D1.png",
      initPos: 0,
    },
    {
      src: "resources/img/3.Background/Layers/2.Floor/D1.png",
      initPos: 0,
    },
    {
      src: "resources/img/3.Background/Layers/1.Light/1.png",
      initPos: 0,
    },
    {
      src: "resources/img/3.Background/Layers/5.Water/D2.png",
      initPos: 720,
    },
    {
      src: "resources/img/3.Background/Layers/3.Fondo1/D2.png",
      initPos: 720,
    },
    {
      src: "resources/img/3.Background/Layers/4.Fondo2/D2.png",
      initPos: 720,
    },
    {
      src: "resources/img/3.Background/Layers/2.Floor/D2.png",
      initPos: 720,
    },
    {
      src: "resources/img/3.Background/Layers/1.Light/2.png",
      initPos: 720,
    },
  ];
  backgroundObjects = [];
  coins = [];
  levelEndX = 2500;

  constructor(levelLength, enemies) {
    this.levelLength = levelLength;
    this.addBackgroundsToArray();
    this.enemies = enemies;
    this.generateCoins();
  }

  addBackgroundsToArray() {
    for (let i = 0; i < this.levelLength; i++) {
      this.backgroundObjectsData.forEach((obj) => {
        this.backgroundObjects.push(
          new BackgroundObject(obj.src, obj.initPos + 1440 * i),
        );
      });
    }
  }

  generateCoins() {
    let coinRows = Math.floor(this.levelEndX / 400);
    for (let i = 0; i < coinRows; i++) {
      this.createCoinRow(i);
    }
  }

  createCoinRow(rowIndex) {
    let coinsInRow = Math.floor(Math.random() * 3) + 1;
    let baseX = 500 + rowIndex * 400;
    let baseY = 100 + Math.random() * 250;
    for (let j = 0; j < coinsInRow; j++) {
      this.coins.push(new Coin(baseX + j * 60, baseY));
    }
  }
}
