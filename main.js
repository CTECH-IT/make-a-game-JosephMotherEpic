const {app, BrowserWindow} = require('electron');
const storage = require('electron-json-storage');
const defaultDataPath = storage.getDefaultDataPath();
const defaultvideosettings = {
    width: 800,
    height: 600,
    windowborder: true
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
function resolutionSettings(){
    console.log(defaultDataPath);
    storage.setDataPath(defaultDataPath);
    storage.has('videosettings', (error, hasKey) =>{
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
    storage.set('videosettings', defaultvideosettings, (error)=>{
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