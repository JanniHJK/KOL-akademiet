// ===================================
// KOL Akademiet 3.0
// App Controller
// ===================================

// ===================================
// SKÆRME
// ===================================

function showScreen(screenId) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {
            screen.classList.add("hidden");
        });

    const target =
        document.getElementById(screenId);

    if (target) {
        target.classList.remove("hidden");
    }
}

// ===================================
// START SPIL
// ===================================

function startGame() {

    showScreen(
        "profile-screen"
    );

}

// ===================================
// OPRET PROFIL
// ===================================

function createProfile() {

    const input =
        document.getElementById(
            "player-name"
        );

    if (!input) {
        return;
    }

    const playerName =
        input.value.trim();

    if (!playerName) {

        alert(
            "Skriv dit navn først."
        );

        return;
    }

    initializeProfile(
        playerName
    );

    renderPlayerCard();

    showScreen(
        "academy-screen"
    );
}

// ===================================
// ÅBN OMRÅDE
// ===================================

function openArea(areaId) {

    switch (areaId) {

        case "lungelaboratoriet":

            startModule(
                "lungelaboratoriet"
            );

            break;

        default:

            alert(
                "Dette område er endnu ikke åbent."
            );

    }
}

// ===================================
// TILBAGE TIL KORT
// ===================================

function returnToAcademy() {

    renderPlayerCard();

    showScreen(
        "academy-screen"
    );
}

// ===================================
// GENINDLÆS SPILLER
// ===================================

function tryAutoLogin() {

    const savedPlayer =
        loadPlayerData();

    if (!savedPlayer) {
        return;
    }

    initializeProfile(
        savedPlayer.name
    );

    renderPlayerCard();

    showScreen(
        "academy-screen"
    );
}

// ===================================
// RESET PROFIL
// ===================================

function resetGame() {

    const result =
        confirm(
            "Vil du nulstille din profil?"
        );

    if (!result) {
        return;
    }

    localStorage.removeItem(
        "kol_player"
    );

    location.reload();
}

// ===================================
// STARTSIDE
// ===================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        showScreen(
            "welcome-screen"
        );

        setTimeout(() => {
            tryAutoLogin();
        }, 300);

    }
);
