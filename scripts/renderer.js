const storage = require('electron-json-storage');
const dataPath = storage.getDefaultDataPath();
let defaultSave = {
    highscore: 0,
    currentGame: {
        columns: 0, 
        row:[{blockid:0},{blockid:0},{blockid:0},{blockid:0},{blockid:0},{blockid:0},{blockid:0},{blockid:0},{blockid:0}]
    }
};
function makeCells(){
    
}

function dataReturner(mode){
    storage.setDataPath(dataPath);
    let data = {};
    switch(mode){
        case 'video':
            storage.get('videosettings', (error, dat)=>{
                if(error) throw error;
                data = dat;
            });
            console.log(data);
            return data;
    }
}
function dataSaver(data, mode){
    storage.setDataPath(dataPath);
    switch(mode){
        case 'video': 
        
    }
}
let gameRows = {
    width: 10,
    height: 20
};
let settings = dataReturner('video');
let config = { //phaser configuration
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
    




