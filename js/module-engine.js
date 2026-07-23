// ===================================
// KOL Akademiet 3.0
// Module Engine
// Adventure Edition
// ===================================

let activeModule = null;
let activeModuleMissionIndex = 0;

// ===================================
// START MODUL
// ===================================

function startModule(moduleId) {

    switch (moduleId) {

        case "lungelaboratoriet":

            activeModule = {

                id: "lungelaboratoriet",

                title: "🫁 Lungelaboratoriet",

                description:
                    "Lær at observere symptomer, opdage ændringer og hjælpe borgere med KOL.",

                missions:
                    getLungelaboratoriumMissions()

            };

            break;

        default:

            alert(
                "Dette område er endnu ikke åbent."
            );

            return;
    }

    activeModuleMissionIndex = 0;

    renderModuleOverview();
}

// ===================================
// MODUL FORSIDE
// ===================================

function renderModuleOverview() {

    showScreen(
        "area-screen"
    );

    const title =
        document.getElementById(
            "area-title"
        );

    const content =
        document.getElementById(
            "area-content"
        );

    title.innerHTML =
        activeModule.title;

    content.innerHTML = `

        <div class="dialogue-box">

            <h2>
                ${activeModule.title}
            </h2>

            <p>
                ${activeModule.description}
            </p>

            <br>

            <p>
                Missioner:
                <strong>
                    ${activeModule.missions.length}
                </strong>
            </p>

            <br>

            <p>
                Anna har brug for din hjælp.
                Undersøg borgernes situationer
                og find de rigtige spor.
            </p>

            <br>

            <button onclick="startNextMission()">
                Start mission
            </button>

        </div>

    `;
}

// ===================================
// START NÆSTE MISSION
// ===================================

function startNextMission() {

    const mission =
        activeModule.missions[
            activeModuleMissionIndex
        ];

    if (!mission) {

        finishModule();

        return;
    }

    startMission(
        mission
    );
}

// ===================================
// MISSION AFSLUTTET
// ===================================

function completeModuleMission() {

    activeModuleMissionIndex++;

    updateModuleProgress();

    if (
        activeModuleMissionIndex <
        activeModule.missions.length
    ) {

        showMissionReward();

        return;
    }

    finishModule();
}

// ===================================
// FREMDRIFT
// ===================================

function updateModuleProgress() {

    const progress =
        Math.round(
            (
                activeModuleMissionIndex /
                activeModule.missions.length
            ) * 100
        );

    updatePlayerModuleProgress(
        activeModule.id,
        progress
    );

    updateAreaProgress(
        activeModule.id,
        progress
    );
}

// ===================================
// BELØNNING MELLEM MISSIONER
// ===================================

function showMissionReward() {

    const content =
        document.getElementById(
            "mission-content"
        );

    const nextMission =
        activeModule.missions[
            activeModuleMissionIndex
        ];

    content.innerHTML = `

        <div class="dialogue-box">

            <h2>
                ⭐ Flot arbejde
            </h2>

            <p>
                Anna er imponeret over
                dine observationer.
            </p>

            <br>

            <p>
                Du har gennemført endnu en mission.
            </p>

            <br>

            <p>
                Næste opgave:
            </p>

            <h3>
                ${nextMission.title}
            </h3>

            <br>

            <button onclick="startNextMission()">
                Fortsæt
            </button>

        </div>

    `;
}

// ===================================
// MODUL AFSLUTTET
// ===================================

function finishModule() {

    updatePlayerModuleProgress(
        activeModule.id,
        100
    );

    completeArea(
        activeModule.id
    );

    unlockNextArea(
        activeModule.id
    );

    addPoints(
        250
    );

    const content =
        document.getElementById(
            "mission-content"
        );

    content.innerHTML = `

        <div class="dialogue-box">

            <h1>
                🎉 Lungelaboratoriet gennemført
            </h1>

            <p>
                Du har afsluttet alle missioner
                i dette område.
            </p>

            <br>

            <p>
                Belønning:
            </p>

            <p>
                ⭐ 250 bonuspoint
            </p>

            <br>

            <p>
                Anna kalder dig nu:
            </p>

            <h2>
                Lungedetektiv
            </h2>

            <br>

            <button onclick="returnToAcademy()">
                Tilbage til KOL-riget
            </button>

        </div>

    `;
}

// ===================================
// HENT AKTIVT MODUL
// ===================================

function getCurrentModule() {

    return activeModule;
}

// ===================================
// HENT MISSION NUMMER
// ===================================

function getCurrentMissionIndex() {

    return activeModuleMissionIndex;
}
