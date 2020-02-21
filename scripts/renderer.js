const dataManager = require('./JSONhandler');
const dataHandler = new dataManager();
let x = dataHandler.videoSettings(false,{});
dataHandler.createSaveFile();
let gameProgress = dataHandler.SaveGame({},true);
let config = {//phaser configuration
    type: Phaser.AUTO,
    width: x.width,
    height: x.height,
    scene: {
        physics:{
            default: 'arcade',
            arcade: {
                gravity: {y: 300},
                debug: false
            }
        },
        preload: preload,
        create: create,
        update: update        
    }
};
    
let game = new Phaser.Game(config);
function preload(){
    
}
function create(){
    
}
function update(){
        
}
    




