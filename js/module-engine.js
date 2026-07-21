// ===================================
// KOL Akademiet v2.0
// Modul-motor
// ===================================



let activeModule = null;

let activeModuleMissionIndex = 0;







// ===================================
// START MODUL
// ===================================


function startModule(moduleName){



    if(
        moduleName === "lungelaboratoriet"
    ){


        activeModule = {


            id:
            "lungelaboratoriet",


            title:
            "Lungelaboratoriet",


            missions:
            getLungelaboratoriumMissions()


        };


    }





    activeModuleMissionIndex = 0;



    showModuleOverview();



}








// ===================================
// VIS MODULOVERSIGT
// ===================================


function showModuleOverview(){



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


    <h3>

    Dit næste område

    </h3>


    <p>

    Gennemfør missionerne for at
    opbygge din viden.

    </p>



    <p>

    Missioner:

    ${activeModule.missions.length}

    </p>


    </div>




    <button onclick="startNextModuleMission()">

    Start første mission

    </button>


    `;



}







// ===================================
// START NÆSTE MISSION
// ===================================


function startNextModuleMission(){



    const mission =

    activeModule.missions[
        activeModuleMissionIndex
    ];



    startMission(
        mission
    );



}








// ===================================
// FÆRDIG MISSION
// ===================================


function completeModuleMission(){



    const completed =

    activeModuleMissionIndex + 1;



    const total =

    activeModule.missions.length;




    const progress =


    Math.round(

        (
        completed /
        total
        )
        *
        100

    );





    updateAreaProgress(

        activeModule.id,

        progress

    );





    completeMissionProgress(

        activeModule.missions[
            activeModuleMissionIndex
        ].id

    );







    activeModuleMissionIndex++;





    if(
        activeModuleMissionIndex < total
    ){


        showNextMissionButton();


    }

    else {


        finishModule();


    }



}








// ===================================
// NÆSTE MISSION
// ===================================


function showNextMissionButton(){



    const content =
    document.getElementById(
        "mission-content"
    );



    content.innerHTML = `


    <div class="correct-feedback">


    <h3>
    Mission gennemført
    </h3>


    <p>

    Du er klar til næste udfordring.

    </p>


    </div>




    <button onclick="startNextModuleMission()">

    Næste mission

    </button>


    `;


}








// ===================================
// MODUL FÆRDIGT
// ===================================


function finishModule(){



    const content =
    document.getElementById(
        "mission-content"
    );



    content.innerHTML = `


    <div class="correct-feedback">


    <h2>
    Modul gennemført!
    </h2>


    <p>

    Lungelaboratoriet er afsluttet.

    </p>


    </div>




    <button onclick="showScreen('academy-screen')">

    Tilbage til kortet

    </button>


    `;



}
