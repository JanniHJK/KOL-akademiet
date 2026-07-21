// ===================================
// KOL Akademiet v2.0
// Lokal lagring
// ===================================


const STORAGE_KEY = "kol_akademiet_player";




// Gem spillerdata
function savePlayerData(data){


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );


}




// Hent spillerdata
function loadPlayerData(){


    const saved =
    localStorage.getItem(
        STORAGE_KEY
    );



    if(saved){


        return JSON.parse(saved);


    }



    return null;


}




// Slet gemt spil
function resetPlayerData(){


    localStorage.removeItem(
        STORAGE_KEY
    );


}






// Standardprofil
function createDefaultPlayer(name){


    return {


        name:name,


        rank:
        "Ny medarbejder",


        points:0,


        completedAreas:[],


        completedMissions:[],


        progress:0


    };


}
