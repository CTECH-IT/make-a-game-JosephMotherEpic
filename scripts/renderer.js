const dataHandler = require(__dirname + '/JSONhandler');
let settings = dataHandler.videoSettings(false,{});
dataHandler.createSaveFile();
console.log(settings.height);
console.log(dataHandler.SaveGame({},true));
let gameProgress = dataHandler.SaveGame({},true);

let config = {//phaser configuration
    type: Phaser.AUTO,
    width: settings.width,
    height: settings.height,
    scene: {
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
    




