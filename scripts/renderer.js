//const storage = require('electron-json-storage');
//const dataPath = storage.getDefaultDataPath();
//let data = {};
//let defaultSave = {
//    highscore: 0,
//    currentGame: {
//        columns: 0,
//        row: [{ blockid: 0 }, { blockid: 0 }, { blockid: 0 }, { blockid: 0 }, { blockid: 0 }, { blockid: 0 }, { blockid: 0 }, { blockid: 0 }, { blockid: 0 }]
//    }
//};
function makeCells() {

}
function choseBlock(){
    
}
//function dataReturner(mode) {
//    storage.setDataPath(dataPath);
//    
//    switch (mode) {
//        case 'video':
//            
//            storage.get('videosettings', (error, dat) => {
//                if (error) throw error;
//                data = dat;
//                console.log(dat); //returns desired output but still contains __proto__ object.
//                
//                console.log(data); //returns desired output but still contains __proto__ object.
//                
//            });
//            return data;
            
//}
//}
//function dataSaver(data, mode) {
//    storage.setDataPath(dataPath);
//    switch (mode) {
//        case 'video':
//
//    }
//}
//let settings = dataReturner('video');
//console.log(settings);
let config = { //phaser configuration
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload() {

}

function create() {

}

function update() {

}





