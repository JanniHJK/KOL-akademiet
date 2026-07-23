// ===================================
// KOL Akademiet v3.0
// Profilsystem
// Adventure Edition
// ===================================

let currentPlayer = null;

// ===================================
// TITLER
// ===================================

const playerRanks = [
    "Ny medarbejder",
    "Lungedetektiv",
    "KOL-assistent",
    "KOL-specialist",
    "Telemedicinmester",
    "Akutekspert",
    "KOL-mester"
];

// ===================================
// OPRET PROFIL
// ===================================

function initializeProfile(name){

    const saved = loadPlayerData();

    if(saved){

        currentPlayer = saved;

        if(!currentPlayer.level){
            currentPlayer.level = 1;
        }

        if(!currentPlayer.xp){
            currentPlayer.xp = 0;
        }

        if(!currentPlayer.rank){
            currentPlayer.rank =
            "Ny medarbejder";
        }

        return currentPlayer;
    }

    currentPlayer = {

        name:name,

        level:1,

        xp:0,

        points:0,

        rank:"Ny medarbejder",

        badges:[],

        completedMissions:[],

        moduleProgress:{
            lungelaboratoriet:0,
            telemedicin:0,
            ernæring:0,
            medicin:0,
            akut:0
        }

    };

    saveCurrentProfile();

    return currentPlayer;
}

// ===================================
// GEM
// ===================================

function saveCurrentProfile(){

    if(!currentPlayer){
        return;
    }

    localStorage.setItem(
        "kol_player",
        JSON.stringify(currentPlayer)
    );
}

// ===================================
// HENT
// ===================================

function loadPlayerData(){

    const saved =
    localStorage.getItem(
        "kol_player"
    );

    if(saved){
        return JSON.parse(saved);
   
