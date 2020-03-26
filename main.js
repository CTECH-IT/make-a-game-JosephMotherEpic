const {app, BrowserWindow} = require('electron');
const storage = require('electron-json-storage');
const defaultDataPath = storage.getDefaultDataPath();
const defaultvideosettings = {
    width: 800,
    height: 600,
    windowborder: false
};

function createWindow(settings){
    console.log(settings);
    let win = new BrowserWindow({
        width: settings.width,
        height: settings.height,
        frame: settings.windowborder,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('index.html');
}
function resolutionSettings(){ //starts the windowInit function which opens the window with height and width of what ever was set previously, if nothing was set use 800 x 600 as default resolution
    console.log(defaultDataPath);
    storage.setDataPath(defaultDataPath);
    storage.has('videosettings', (error, hasKey) => {
        if(error) throw error;
        switch(hasKey){
            case false: 
                makeSettingsFile();
                windowInit();
            case true:
                windowInit();
        }
    });
    
}
function makeSettingsFile(){
    storage.setDataPath(defaultDataPath);
    storage.set('videosettings', defaultvideosettings, (error) => {
        if(error) throw error;
    });
}
function windowInit(){
    storage.setDataPath(defaultDataPath);
    let vsettings = getData();
    createWindow(vsettings);
}
function getData(){
    storage.setDataPath(defaultDataPath);
    let x = {};
    storage.get('videosettings',(error, data) => {
        if(error) throw error;
        x = data;
    });
    return x;
}
app.whenReady().then(resolutionSettings);