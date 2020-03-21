const storage = require('electron-json-storage');
const dataPath = '/Users/jbartucz/Downloads/make-a-game-JosephMotherEpic'; // storage.getDefaultDataPath();

let defaultSave = {
    highscore: 0,
    currentGame: {
        columns: 0,
        row: [{ blockid: 0 }, { blockid: 0 }, { blockid: 0 }, { blockid: 0 }, { blockid: 0 }, { blockid: 0 }, { blockid: 0 }, { blockid: 0 }, { blockid: 0 }]
    }
};
function makeCells() {

}

function dataReturner(mode) {
    storage.setDataPath(dataPath);
    let data = {};
    switch (mode) {
        case 'video':
            storage.get('videosettings', (error, dat) => {
                if (error) throw error;
                data = dat;
                console.log("dat: ")
                console.log(dat); //returns desired output but still contains __proto__ object.
                console.log("data: ");
                console.log(data); //returns desired output but still contains __proto__ object.
            });
            console.log(data); //returns __proto__ object... Why tho?
            return data;
    }
}
function dataSaver(data, mode) {
    storage.setDataPath(dataPath);
    switch (mode) {
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

function preload() {

    console.log("JB1");
    storage.set('foobar', { foo: 'bar' }, function (error) {
        if (error) throw error;
    });

    console.log("JB2");
    storage.has('foobar', function (error, hasKey) {
        if (error) throw error;

        if (hasKey) {
            console.log('There is data stored as `foobar`');
        } else {
            console.log('There is NO data stored as `foobar`');
        }
    });

    console.log("JB3");
    storage.get('foobar', function (error, data) {
        if (error) throw error;

        console.log(data);
    });
    console.log("JB4");
}
function create() {

}
function update() {

}





