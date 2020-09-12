import 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload ()
{
    console.log('#### preload()');

    this.load.on('loaderror', (file) => {
        console.log(`loaderror: ${file} - ${file.state}`);
    });

    console.log('Loading boom sound');
    this.load.audio('boom', ['boom.mp3', 'boom.ogg', './boom-44100.ogg', './boom-44100.mp3']);
    console.log('Loading wizball image');
    this.load.image('wizball', './wizball.png');
}

function create ()
{
    console.log('#### create()');
    const image = this.add.image(400, 300, 'wizball').setInteractive();;
    this.add.text(20, 20, 'click wizball for boom');

    this.boom = this.sound.add('boom');
    image.on('pointerup', () => {
        console.log('BOOM');
        this.boom.play();
    });
}