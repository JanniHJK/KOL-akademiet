// ===================================
// KOL Akademiet 3.0
// Profilsystem
// Adventure Edition
// ===================================

let currentPlayer = null;

// ===================================
// OPRET / HENT PROFIL
// ===================================

function initializeProfile(name) {

    const savedPlayer =
        loadPlayerData();

    if (savedPlayer) {

        currentPlayer =
            savedPlayer;

        ensurePlayerStructure();

        saveCurrentProfile();

        return currentPlayer;
    }

    currentPlayer = {

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

    saveCurrentProfile();

    return currentPlayer;
}

// ===================================
// SIKR STRUKTUR
// ===================================

function ensurePlayerStructure() {

    if (!currentPlayer.level) {
        currentPlayer.level = 1;
    }

    if (!currentPlayer.xp) {
        currentPlayer.xp = 0;
    }

    if (!currentPlayer.points) {
        currentPlayer.points = 0;
    }

    if (!currentPlayer.rank) {
        currentPlayer.rank =
            "Ny medarbejder";
    }

    if (!currentPlayer.badges) {
        currentPlayer.badges = [];
    }

    if (!currentPlayer.completedMissions) {
        currentPlayer.completedMissions = [];
    }

    if (!currentPlayer.moduleProgress) {

        currentPlayer.moduleProgress = {

            lungelaboratoriet: 0,
            telemedicin: 0,
            ernæring: 0,
            medicin: 0,
            akut: 0

        };
    }
}

// ===================================
// GEM
// ===================================

function saveCurrentProfile() {

    if (!currentPlayer) {
        return;
    }

    localStorage.setItem(
        "kol_player",
        JSON.stringify(currentPlayer)
    );
}

// ===================================
// HENT GEMT DATA
// ===================================

function loadPlayerData() {

    const saved =
        localStorage.getItem(
            "kol_player"
        );

    if (!saved) {
        return null;
    }

    return JSON.parse(saved);
}

// ===================================
// POINT
// ===================================

function addPoints(value) {

    if (!currentPlayer) {
        return;
    }

    currentPlayer.points += value;

    addXP(value);

    saveCurrentProfile();

    renderPlayerCard();
}

// ===================================
// XP
// ===================================

function addXP(value) {

    if (!currentPlayer) {
        return;
    }

    currentPlayer.xp += value;

    updateLevel();
}

// ===================================
// LEVEL
// ===================================

function updateLevel() {

    const newLevel =
        Math.floor(
            currentPlayer.xp / 250
        ) + 1;

    if (
        newLevel >
        currentPlayer.level
    ) {

        currentPlayer.level =
            newLevel;

        updateRank();
    }
}

// ===================================
// TITLER
// ===================================

function updateRank() {

    const level =
        currentPlayer.level;

    if (level >= 12) {

        currentPlayer.rank =
            "KOL-mester";

    } else if (level >= 10) {

        currentPlayer.rank =
            "Akutekspert";

    } else if (level >= 8) {

        currentPlayer.rank =
            "Telemedicinmester";

    } else if (level >= 6) {

        currentPlayer.rank =
            "KOL-specialist";

    } else if (level >= 4) {

        currentPlayer.rank =
            "KOL-assistent";

    } else if (level >= 2) {

        currentPlayer.rank =
            "Lungedetektiv";

    } else {

        currentPlayer.rank =
            "Ny medarbejder";
    }

    saveCurrentProfile();
}

// ===================================
// XP BAR
// ===================================

function getXPPercent() {

    const currentXP =
        currentPlayer.xp % 250;

    return Math.round(
        (currentXP / 250) * 100
    );
}

// ===================================
// MISSION
// ===================================

function completeMissionProgress(
    missionId
) {

    if (
        !currentPlayer.completedMissions.includes(
            missionId
        )
    ) {

        currentPlayer.completedMissions.push(
            missionId
        );

        saveCurrentProfile();
    }
}

// ===================================
// MODUL FREMDRIFT
// ===================================

function updatePlayerModuleProgress(
    moduleId,
    progress
) {

    if (!currentPlayer) {
        return;
    }

    currentPlayer.moduleProgress[
        moduleId
    ] = progress;

    saveCurrentProfile();

    renderPlayerCard();
}

// ===================================
// SAMLET FREMDRIFT
// ===================================

function getTotalProgress() {

    if (!currentPlayer) {
        return 0;
    }

    const values =
        Object.values(
            currentPlayer.moduleProgress
        );

    const sum =
        values.reduce(
            (a, b) => a + b,
            0
        );

    return Math.round(
        sum / values.length
    );
}

// ===================================
// BADGES
// ===================================

function addBadge(badgeName) {

    if (
        currentPlayer.badges.includes(
            badgeName
        )
    ) {
        return;
    }

    currentPlayer.badges.push(
        badgeName
    );

    saveCurrentProfile();
}

// ===================================
// VIS SPILLERKORT
// ===================================

function renderPlayerCard() {

    const card =
        document.getElementById(
            "player-card"
        );

    if (
        !card ||
        !currentPlayer
    ) {
        return;
    }

    card.innerHTML = `

        <div class="dialogue-box">

            <h2>
                🫁 ${currentPlayer.name}
            </h2>

            <p>
                ⭐ Niveau:
                <strong>
                    ${currentPlayer.level}
                </strong>
            </p>

            <p>
                🏅 Titel:
                <strong>
                    ${currentPlayer.rank}
                </strong>
            </p>

            <p>
                🎯 Point:
                <strong>
                    ${currentPlayer.points}
                </strong>
            </p>

            <p>
                📈 Fremdrift:
                <strong>
                    ${getTotalProgress()}%
                </strong>
            </p>

            <div class="xp-wrapper">

                <p>
                    XP: ${currentPlayer.xp}
                </p>

                <div class="xp-bar">

                    <div
                        class="xp-fill"
                        style="
                        width:${getXPPercent()}%;
                        ">
                    </div>

                </div>

            </div>

        </div>

    `;
}

// ===================================
// HENT AKTIV SPILLER
// ===================================

function getCurrentPlayer() {
    return currentPlayer;
}
