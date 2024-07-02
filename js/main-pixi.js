(async () => {
    const app = new PIXI.Application();
    await app.init({
        width: 640,
        height: 360,
        antialias: false
    })
    document.body.appendChild(app.canvas);

    const textures = {
        ghost: await PIXI.Assets.load('sprites/ghost.png')
    }
    const sprite = new PIXI.Sprite(textures.ghost);

    app.stage.addChild(sprite);
})();