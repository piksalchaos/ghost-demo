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
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload()
{
    this.load.image('ghost', 'sprites/ghost.png');
    
}

function create()
{
    player = this.physics.add.sprite(320, 180, 'ghost');
    cursors = this.input.keyboard.createCursorKeys();
}

function update(time, delta)
{
    if (cursors.left.isDown && !cursors.right.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown && !cursors.left.isDown) {
        player.setVelocityX(160);
    } else {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown && !cursors.down.isDown) {
        player.setVelocityY(-160);
    } else if (cursors.down.isDown && !cursors.up.isDown) {
        player.setVelocityY(160);
    } else {
        player.setVelocityY(0);
    }
}