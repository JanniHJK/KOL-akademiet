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

function startModule(moduleId){

    console.log(
        "Starter modul:",
        moduleId
    );

    switch(moduleId){

        case "lungelaboratoriet":

            activeModule = {

                id:
                "lungelaboratoriet",

                title:
                "🫁 Lungelaboratoriet",

                description:
                "Her lærer du at observere symptomer, identificere ændringer og hjælpe borgere med KOL.",

                missions:
                getLungelaboratoriumMissions()

            };

            break;

        default:

            alert(
                "Dette modul er endnu ikke åbent."
            );

            return;

    }

    activeModuleMissionIndex = 0;

    renderModuleOverview();
}

// ===================================
// MODUL FORSIDE
// ===================================

function renderModuleOverview(){

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
                Antal missioner:
                <strong>
                    ${activeModule.missions.length}
                </strong>
            </p>

            <br>

            <p>
                Anna venter på dine observationer.
                Hver mission bringer dig tættere på
                titlen som KOL-mester.
            </p>

            <br>

            <button
                onclick="
                startNextMission()
                ">
                Start første mission
            </button>

        </div>

    `;
}

// ===================================
// START MISSION
// ===================================

function startNextMission(){

    const mission =
    activeModule.missions[
        activeModuleMissionIndex
    ];

    if(!mission){

        finishModule();

        return;
    }

    startMission(
        mission
    );
}

// ===================================
// MISSION FÆRDIG
// ===================================

function completeModuleMission(){

    addPoints(
        100
    );

    activeModuleMissionIndex++;

    updateModuleProgress();

    if(
        activeModuleMissionIndex <
        activeModule.missions.length
    ){

        renderNextMissionScreen();

        return;
    }

    finishModule();
}

// ===================================
// MODULPROGRESSION
// ===================================

function updateModuleProgress(){

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
}

// ===================================
// NÆSTE MISSION
// ===================================

function renderNextMissionScreen(){

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
                ⭐ Mission gennemført
            </h2>

            <p>
                Du har gennemført den foregående mission.
            </p>

            <br>

            <p>
                +100 point
            </p>

            <br>

            <p>
                Næste mission:
                <strong>
                    ${nextMission.title}
                </strong>
            </p>

            <br>

            <button
    
