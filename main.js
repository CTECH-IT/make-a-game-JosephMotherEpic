const {app, BrowserWindow, remote} = require('electron');
const storedjson = require('electron-json-storage')
const defaultvideosettings = {
    width:800,
    height:600
};

const videoSettingsPath = {
    dataPath: __dirname
};
usersettings = {};
storedjson.setDataPath(videoSettingsPath.dataPath);
function OpenWindow(width,height) { //Opens a New Window
    let win = new BrowserWindow({
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: true
        },
        frame:true
    });
    //win.setMenu(null);
    win.loadFile('index.html');
}
app.whenReady().then(function(){//makes sure videosettings.json exists. If it doesnt
    try {
        storedjson.has('videosettings', function(error, hasKey) {
            if (error) throw error;
            switch (hasKey){
                case false:
                    storedjson.set('videosettings',defaultvideosettings, (error) =>{
                        if(error) throw error;
                    });//if file doesn't exist, make a json file with defaultvideosettings object data
                    break;
                case true: //if file exists, parse json data as object usersettings.
                    storedjson.get('videosettings', (error, data) =>{
                        if(error) throw error;
                        
                        let usersettings = data;
                        console.log(usersettings);
                        OpenWindow(usersettings.width,usersettings.height);
                    });
            }
            console.log(hasKey);
            });
            
    } catch(err) {
        console.log(err);
    }
    
});
