const storage = require('electron-json-storage');
const defaultsavepath = __dirname + '/assets/saves';
const defaultsettingspath = __dirname;
const savegames = [{//stores all of the player's variables that define progress in the game. (ie. XP, stage or level, items in inventory, EXP Level, external inventory)
    gameVersion:1,//if an old save exists, the newest version of the game will add any new changes to the savegames object.
    gameMinorVersion:0,
    chapter: 0,
    level: 0,
    checkpoint: 0,
    difficulty: 'normal',
    player:{
        inventory:[
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},//player's inventory
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0}],
        armor:{
            helmet:{
                name:'none',
                stats:{
                    physicalDamageResistance:0, 
                    magicDamageResistance:0,
                    fireDamageResist: 0,
                    lifeSteal: false,
                    level:0,
                    xp:0,
                    toNextLevel:150,
                    id:0
                },
                description:'no helmet equipped'
            },
            chestplate:{
                name:'none',
                stats:{
                    physicalDamageResistance:0,
                    magicDamageResistance:0,
                    fireDamageResist:0,
                    lifeSteal: false,
                    level:0,
                    xp:0,
                    toNextLevel:150,
                    id:0
                },
                description:'no chestplate equipped'
            },
            boots:{
                name:'none',
                stats:{
                    physicalDamageResistance:0,
                    magicDamageResistance:0,
                    fireDamageResist:0,
                    lifeSteal: false,
                    level:0,
                    xp:0,
                    toNextLevel:150,
                    id:0
                    
                },
                description:'no boots equipped'
            },
            shield:{
                name:'Basic Shield',
                stats:{
                    baseDamageBlock:1,
                    shieldLives:3,
                    level:0,
                    xp:0,
                    toNextLevel:150,
                    id:1,
                    equipped:true,
                    additiveShield:0
                }
            }
        },
        level:0,
        exp:0,
        toNextLevel:100,
        stats:{
            basePhysicalDamage:1,
            baseMagicDamage:1,
            baseFireDamage:1,
            baseHP:100,
            healthUpgradeLevel:0, //upgrade multipliers
            physicalDamageLevel:0,
            magicDamageLevel:0,
            fireDamageLevel:0
        }
    } 
},
{
    gameVersion:1,//if an old save exists, the newest version of the game will add any new changes to the savegames object.
    gameMinorVersion:0,
    chapter: 0,
    level: 0,
    checkpoint: 0,
    difficulty: 'normal',
    player:{
        inventory:[
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},//player's inventory
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},//contains items
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0}],
        armor:{
            helmet:{
                name:'none',
                stats:{
                    physicalDamageResistance:0, 
                    magicDamageResistance:0,
                    fireDamageResist: 0,
                    lifeSteal: false,
                    level:0,
                    xp:0,
                    toNextLevel:150,
                    id:0
                },
                description:'no helmet equipped'
            },
            chestplate:{
                name:'none',
                stats:{
                    physicalDamageResistance:0,
                    magicDamageResistance:0,
                    fireDamageResist:0,
                    lifeSteal: false,
                    level:0,
                    xp:0,
                    toNextLevel:150,
                    id:0
                },
                description:'no chestplate equipped'
            },
            boots:{
                name:'none',
                stats:{
                    physicalDamageResistance:0,
                    magicDamageResistance:0,
                    fireDamageResist:0,
                    lifeSteal: false,
                    level:0,
                    xp:0,
                    toNextLevel:150,
                    id:0
                    
                },
                description:'no boots equipped'
            },
            shield:{
                name:'Basic Shield',
                stats:{
                    baseDamageBlock:1,
                    shieldLives:3,
                    level:0,
                    xp:0,
                    toNextLevel:150,
                    id:1,
                    equipped:true,
                    additiveShield:0
                }
            }
        },
        level:0,
        exp:0,
        toNextLevel:100,
        stats:{
            basePhysicalDamage:1,
            baseMagicDamage:1,
            baseFireDamage:1,
            baseHP:100,
            healthUpgradeLevel:0, //upgrade multipliers
            physicalDamageLevel:0,
            magicDamageLevel:0,
            fireDamageLevel:0
        }
    }
},{
    gameVersion:1,//if an old save exists, the newest version of the game will add any new changes to the savegames object.
    gameMinorVersion:0,
    chapter: 0,
    level: 0,
    checkpoint: 0,
    difficulty: 'normal',
    player:{
        inventory:[
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},//player's inventory
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0},
        {itemClass:'none', description:'no item',equippable:false,consumable:false,id:0}],
        armor:{
            helmet:{
                name:'none',
                stats:{
                    physicalDamageResistance:0, 
                    magicDamageResistance:0,
                    fireDamageResist: 0,
                    lifeSteal: false,
                    level:0,
                    xp:0,
                    toNextLevel:150,
                    id:0
                },
                description:'no helmet equipped'
            },
            chestplate:{
                name:'none',
                stats:{
                    physicalDamageResistance:0,
                    magicDamageResistance:0,
                    fireDamageResist:0,
                    lifeSteal: false,
                    level:0,
                    xp:0,
                    toNextLevel:150,
                    id:0
                },
                description:'no chestplate equipped'
            },
            boots:{
                name:'none',
                stats:{
                    physicalDamageResistance:0,
                    magicDamageResistance:0,
                    fireDamageResist:0,
                    lifeSteal: false,
                    level:0,
                    xp:0,
                    toNextLevel:150,
                    id:0
                    
                },
                description:'no boots equipped'
            },
            shield:{
                name:'Basic Shield',
                stats:{
                    baseDamageBlock:1,
                    shieldLives:3,
                    level:0,
                    xp:0,
                    toNextLevel:150,
                    id:1,
                    equipped:true,
                    additiveShield:0
                }
            }
        },
        level:0,
        exp:0,
        toNextLevel:100,
        stats:{
            basePhysicalDamage:1,
            baseMagicDamage:1,
            baseFireDamage:1,
            baseHP:100,
            healthUpgradeLevel:0, //upgrade multipliers
            physicalDamageLevel:0,
            magicDamageLevel:0,
            fireDamageLevel:0
        }
    }
}];
class jsonH {
    videoSettings(set, data){// function sets or reads videosettings.json depending on if set is true or false.
        
    }
}
module.exports = {
    createSaveFile: () =>{
        storage.setDataPath(defaultsavepath);
        storage.has('savefile', (error,exists)=>{
            if(error) throw error;
            if(exists){
                console.log(exists);
            }else if(!exists){
                storage.setDataPath(defaultsavepath);
                storage.set('savefile', savegames, (err) =>{
                    if(err) throw err;
                });
            }
        });
    },
    SaveGame: (data, recieve) =>{
        let output = {};
        storage.setDataPath(defaultsavepath);
        switch(recieve){
            case false:
                storage.set('savefile', data, (err)=>{
                    if(err) throw err;
                    console.log(data);
                });
                break;
            case true:
                storage.get('savefile', (error, data) => {
                    if(error) throw error;
                    output = data;
                    console.log(output);
                });
        }
        return output;
    },
    videoSettings: (set, data) => {
        let v = {};
        storage.setDataPath(defaultsettingspath);
        switch(set){
            case false:
                storage.get('videosettings',(error, dat)=>{
                    if(error) throw error;
                    v = dat;
                    console.log(v);
                });
                break;
            case true:
                storage.set('videosettings',data,(error)=>{
                    if(error) throw error;
                });

        }
        return v;
    }
};