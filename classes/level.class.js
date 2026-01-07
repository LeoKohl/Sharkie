class Level {
    levelLength;
    enemies;
    backgroundObjectsData = [
        {
            'src': 'resources/img/3.Background/Layers/5.Water/D1.png',
            'initPos': 0
        },
        {
            'src': 'resources/img/3.Background/Layers/3.Fondo1/D1.png',
            'initPos': 0
        },
        {
            'src': 'resources/img/3.Background/Layers/4.Fondo2/D1.png',
            'initPos': 0
        },
        {
            'src': 'resources/img/3.Background/Layers/2.Floor/D1.png',
            'initPos': 0
        },
        {
            'src': 'resources/img/3.Background/Layers/1.Light/1.png',
            'initPos': 0
        },
        {
            'src': 'resources/img/3.Background/Layers/5.Water/D2.png',
            'initPos': 720
        },
        {
            'src': 'resources/img/3.Background/Layers/3.Fondo1/D2.png',
            'initPos': 720
        },
        {
            'src': 'resources/img/3.Background/Layers/4.Fondo2/D2.png',
            'initPos': 720
        },
        {
            'src': 'resources/img/3.Background/Layers/2.Floor/D2.png',
            'initPos': 720
        },
        {
            'src': 'resources/img/3.Background/Layers/1.Light/2.png',
            'initPos': 720
        }
    ];
    backgroundObjects = [];
    levelEndX = 2500;

    constructor(levelLength, enemies) {
        this.levelLength = levelLength;
        this.addBackgroundsToArray();
        this.enemies = enemies;
    }

    addBackgroundsToArray() {
        for (let i = 0; i < this.levelLength; i++) {
            this.backgroundObjectsData.forEach(obj => {
                this.backgroundObjects.push(
                    new BackgroundObject(
                        obj.src,
                        obj.initPos + (1440 * i)
                    )
                );
            });
        }
    }
}