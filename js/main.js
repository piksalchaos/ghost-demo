var config = {
    type: Phaser.AUTO,
    width: 480,
    height: 270,
    pixelArt: true,
    antialias: false,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        }
    },
    scale: {
        mode: Phaser.Scale.FIT
    },
    scene: [Demo]
};

const game = new Phaser.Game(config);