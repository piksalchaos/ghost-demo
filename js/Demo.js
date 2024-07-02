class Demo extends Phaser.Scene {
    constructor() {
        super('Demo')
    }

    preload() {
        this.load.image('ghost', 'sprites/demoGhost.png');
        this.load.image('background', 'sprites/demoBG.png');
        this.load.spritesheet('boi', 
            'sprites/demoBoi-Sheet.png',
            { frameWidth: 32, frameHeight: 32 }
        )
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys();

        this.background = this.add.image(0, 0, 'background');
        this.background.setOrigin(0, 0);

        this.boi = this.add.sprite(100, 100, 'boi');
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('boi', { start: 0, end: 3 }),
            frameRate: 2,
            repeat: -1
        });
        this.boi.anims.play('walk');

        this.player = this.physics.add.image(320, 180, 'ghost');
        this.player.setMaxVelocity(120);
        this.playerAcceleration = 400;
        this.player.setDamping(true);
        this.player.setDrag(0.01, 0.01);
    }

    update(_, dt) {
        if (this.cursors.left.isDown && !this.cursors.right.isDown) {
            // this.player.setVelocityX(-this.playerSpeed);
            this.player.setAccelerationX(-this.playerAcceleration)
            this.player.flipX = true;
        } else if (this.cursors.right.isDown && !this.cursors.left.isDown) {
            this.player.setAccelerationX(this.playerAcceleration);
            this.player.flipX = false;
        } else {
            this.player.setAccelerationX(0);
        }

        if (this.cursors.up.isDown && !this.cursors.down.isDown) {
            this.player.setAccelerationY(-this.playerAcceleration);
        } else if (this.cursors.down.isDown && !this.cursors.up.isDown) {
            this.player.setAccelerationY(this.playerAcceleration);
        } else {
            this.player.setAccelerationY(0);
        }
    }
}