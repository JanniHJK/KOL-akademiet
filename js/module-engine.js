// ===================================
// KOL Akademiet v2.0
// Modul Engine
// Stabil version
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



    if(
        moduleId === "lungelaboratoriet"
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


    else {


        console.error(
            "Ukendt modul:",
            moduleId
        );


        return;


    }





    activeModuleMissionIndex = 0;



    showModuleOverview();


}








// ===================================
// VIS MODUL
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





    if(!activeModule){

        return;

    }





    title.innerHTML =

    activeModule.title;





    content.innerHTML = `


    <div class="mission-card unlocked">


        <h2>
        ${activeModule.title}
        </h2>


        <p>

        Du skal gennemføre
        ${activeModule.missions.length}
        missioner.

        </p>


        <p>

        Lær gennem realistiske
        borgersituationer.

        </p>


    </div>



    <button onclick="startNextModuleMission()">

    Start første mission

    </button>


    `;



}








// ===================================
// NÆSTE MISSION
// ===================================


function startNextModuleMission(){



    if(!activeModule){

        console.error(
            "Intet aktivt modul"
        );

        return;

    }



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
// AFSLUT MISSION
// ===================================


function completeModuleMission(){



    activeModuleMissionIndex++;





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
// NÆSTE
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

    Klar til næste udfordring.

    </p>


    </div>



    <button onclick="startNextModuleMission()">

    Næste mission

    </button>


    `;


}








// ===================================
// FÆRDIG
// ===================================


function finishModule(){



    const content =

    document.getElementById(
        "mission-content"
    );



    content.innerHTML = `


    <div class="correct-feedback">


    <h2>

    Lungelaboratoriet gennemført

    </h2>


    <p>

    Du har afsluttet modulet.

    </p>


    </div>



    <button onclick="showScreen('academy-screen')">

    Tilbage til kortet

    </button>


    `;



}
