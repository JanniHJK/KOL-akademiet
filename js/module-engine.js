// ===================================
// KOL Akademiet v2.0
// Modul Engine
// Stabilisering 4.1
// ===================================


let activeModule = null;

let activeModuleMissionIndex = 0;







// ===================================
// START MODUL
// ===================================


function startModule(moduleId){



    if(moduleId === "lungelaboratoriet"){



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
// MODULOVERSIGT
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

    Klar til missioner?

    </h3>



    <p>

    Gennemfør missionerne og optjen
    erfaring gennem realistiske
    borgersituationer.

    </p>



    <p>

    Missioner:

    ${activeModule.missions.length}

    </p>



    </div>




    <button onclick="startNextModuleMission()">

    Start mission

    </button>


    `;



}








// ===================================
// START MISSION
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
// GENNEMFØR MISSION
// ===================================


function completeModuleMission(){



    const mission =

    activeModule.missions[
        activeModuleMissionIndex
    ];



    completeMissionProgress(
        mission.id
    );



    activeModuleMissionIndex++;




    const total =

    activeModule.missions.length;



    const completed =

    activeModuleMissionIndex;





    const progress =


    Math.round(

        completed /

        total *

        100

    );





    updatePlayerModuleProgress(

        activeModule.id,

        progress

    );






    if(

        activeModuleMissionIndex

        <

        total

    ){



        showNextMission();


    }

    else {



        finishModule();


    }



}








// ===================================
// NÆSTE MISSION
// ===================================


function showNextMission(){



    const content =

    document.getElementById(
        "mission-content"
    );



    content.innerHTML = `


    <div class="correct-feedback">


    <h2>

    Mission gennemført

    </h2>



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



    updatePlayerModuleProgress(

        activeModule.id,

        100

    );



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

    Du har gennemført
    ${activeModule.title}.

    </p>



    <p>

    Fremgang:
    100%

    </p>



    </div>




    <button onclick="showScreen('academy-screen');renderPlayerCard();">

    Tilbage til kortet

    </button>


    `;



    unlockNextArea(
        activeModule.id
    );


}
