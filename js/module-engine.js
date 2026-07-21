// ===================================
// KOL Akademiet v2.0
// Modulstyring
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
    Dit læringsområde
    </h3>



    <p>

    Gennemfør missionerne og lær at
    observere borgere med KOL.

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
// NÆSTE MISSION
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
// AFSLUT MISSION
// ===================================


function completeModuleMission(){



    const currentMission =

    activeModule.missions[
        activeModuleMissionIndex
    ];



    completeMissionProgress(
        currentMission.id
    );





    activeModuleMissionIndex++;





    const completed =

    activeModuleMissionIndex;



    const total =

    activeModule.missions.length;





    const progress =


    Math.round(

        completed /

        total *

        100

    );





    updateAreaProgress(

        activeModule.id,

        progress

    );







    if(
        activeModuleMissionIndex
        <
        activeModule.missions.length
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
// MODUL FÆRDIG
// ===================================


function finishModule(){



    const content =

    document.getElementById(
        "mission-content"
    );



    content.innerHTML = `


    <div class="correct-feedback">


    <h2>
    Lungelaboratoriet gennemført!
    </h2>


    <p>

    Du har afsluttet modulet.

    </p>


    </div>



    <button onclick="showScreen('academy-screen')">

    Tilbage til kortet

    </button>


    `;



    unlockNextArea(
        activeModule.id
    );


}
