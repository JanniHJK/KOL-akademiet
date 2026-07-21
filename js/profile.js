// ===================================
// KOL Akademiet v2.0
// Profil og progression
// Stabilisering 4.1
// ===================================


let currentPlayer = null;





// ===================================
// OPRET / HENT PROFIL
// ===================================


function initializeProfile(name){



    const saved = loadPlayerData();



    if(saved){


        currentPlayer = saved;


    }

    else {



        currentPlayer = {


            name:name,


            points:0,


            completedMissions:[],


            moduleProgress:{


                lungelaboratoriet:0,


                ernæring:0,


                telemedicin:0,


                medicin:0


            }


        };


        saveCurrentProfile();


    }



    return currentPlayer;


}








// ===================================
// GEM PROFIL
// ===================================


function saveCurrentProfile(){



    if(!currentPlayer){

        return;

    }



    localStorage.setItem(

        "kol_player",

        JSON.stringify(
            currentPlayer
        )

    );


}








// ===================================
// HENT PROFIL
// ===================================


function loadPlayerData(){



    const saved =

    localStorage.getItem(
        "kol_player"
    );



    if(saved){


        return JSON.parse(saved);


    }



    return null;


}








// ===================================
// POINT
// ===================================


function addPoints(value){



    if(!currentPlayer){

        return;

    }



    currentPlayer.points += value;



    saveCurrentProfile();



    renderPlayerCard();



}








// ===================================
// MISSION GENNEMFØRT
// ===================================


function completeMissionProgress(
    missionId
){



    if(
        !currentPlayer.completedMissions.includes(
            missionId
        )
    ){


        currentPlayer.completedMissions.push(
            missionId
        );


    }



    saveCurrentProfile();


}








// ===================================
// MODUL PROCENT
// ===================================


function updatePlayerModuleProgress(

    moduleId,

    progress

){



    if(
        !currentPlayer
    ){

        return;

    }




    currentPlayer.moduleProgress[moduleId]
    =
    progress;



    saveCurrentProfile();



    renderPlayerCard();



}








// ===================================
// SAMLET PROCENT
// ===================================


function getTotalProgress(){



    if(
        !currentPlayer
    ){

        return 0;

    }



    const values =

    Object.values(

        currentPlayer.moduleProgress

    );



    const sum =

    values.reduce(

        (a,b)=>a+b,

        0

    );



    return Math.round(

        sum /
        values.length

    );

}








// ===================================
// VIS PROFILKORT
// ===================================


function renderPlayerCard(){



    const card =

    document.getElementById(
        "player-card"
    );



    if(
        !card ||
        !currentPlayer
    ){

        return;

    }





    card.innerHTML = `


    <div class="dialogue-box">


    <h3>

    ${currentPlayer.name}

    </h3>



    <p>

    Point:
    <strong>
    ${currentPlayer.points}
    </strong>

    </p>



    <p>

    Gennemført:

    <strong>
    ${getTotalProgress()}%
    </strong>


    </p>



    </div>


    `;



}








// ===================================
// HENT AKTIV SPILLER
// ===================================


function getCurrentPlayer(){


    return currentPlayer;


}
