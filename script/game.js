var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('A1', 'assets/A1.png');
    this.load.image('B1', 'assets/B1.png');
    this.load.image('B2', 'assets/B2.png');
    this.load.image('B3', 'assets/B3.png');
    this.load.image('O1', 'assets/O1.png');
    this.load.image('O2', 'assets/O2.png');
    this.load.image('O3', 'assets/O3.png');
}

function create ()
{
    this.add.image(200, 400, 'B1');
    var gamepad = this.input.gamepad;
}

function update(){

}