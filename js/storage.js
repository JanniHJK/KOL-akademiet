// ===================================
// KOL Akademiet 3.0
// Storage System
// Adventure Edition
// ===================================

const STORAGE_KEY = "kol_player";

// ===================================
// GEM DATA
// ===================================

function savePlayerData(playerData) {

    if (!playerData) {
        return;
    }

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(playerData)
    );
}

// ===================================
// HENT DATA
// ===================================

function loadPlayerData() {

    const savedData =
        localStorage.getItem(
            STORAGE_KEY
        );

    if (!savedData) {
        return null;
    }

    try {

        return JSON.parse(
            savedData
        );

    } catch (error) {

        console.error(
            "Kunne ikke læse gemt profil",
            error
        );

        return null;
    }
}

// ===================================
// SLET DATA
// ===================================

function resetPlayerData() {

    localStorage.removeItem(
        STORAGE_KEY
    );
}

// ===================================
// TJEK PROFIL
// ===================================

function playerDataExists() {

    return (
        localStorage.getItem(
            STORAGE_KEY
        ) !== null
    );
}

// ===================================
// STANDARD PROFIL
// ===================================

function createDefaultPlayer(name) {

    return {

        name: name,

        level: 1,

        xp: 0,

        points: 0,

        rank: "Ny medarbejder",

        badges: [],

        completedMissions: [],

        moduleProgress: {

            lungelaboratoriet: 0,
            telemedicin: 0,
            ernæring: 0,
            medicin: 0,
            akut: 0

        }

    };
}

// ===================================
// EKSPORT
// ===================================

function exportPlayerData() {

    const player =
        loadPlayerData();

    if (!player) {
        return null;
    }

    return JSON.stringify(
        player,
        null,
        2
    );
}

// ===================================
// IMPORT
// ===================================

function importPlayerData(jsonData) {

    try {

        const player =
            JSON.parse(
                jsonData
            );

        savePlayerData(
            player
        );

        return true;

    } catch (error) {

        console.error(
            "Import fejl",
            error
        );

        return false;
    }
}
