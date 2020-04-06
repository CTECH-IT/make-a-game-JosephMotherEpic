class TitleScene extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }
    init(){
        
    }
    preload(){
        this.load.spritesheet('button','sprites/playButton.png',{frameWidth:200,frameHeight:75});
    }
    create(){
        this.add.sprite(400,300,'button')
    }
    update(){

    }
}