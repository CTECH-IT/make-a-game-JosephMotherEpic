class TitleScene extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }
    init(){

    }

    create(){
        this.add.text(400,200,"Electris",{font: "25px Arial",fill:"white"});
        this.add.rectangle(400,300,170,85,0xffff00,1);

    }
}