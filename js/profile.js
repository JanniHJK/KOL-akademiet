// ===================================
// KOL Akademiet v2.0
// Profil og progression
// ===================================



let currentPlayer = null;





// ===================================
// OPRET PROFIL
// ===================================


function initializeProfile(name){



    const savedPlayer =

    loadPlayerData();




    if(savedPlayer){


        currentPlayer =
        savedPlayer;


    }

    else {



        currentPlayer = {


            name:name,


            rank:
            "Ny medarbejder",


            points:0,


            progress:0,


            completedMissions:[],


            completedAreas:[]


        };



        savePlayerData(
            currentPlayer
        );


    }



    return currentPlayer;



}







// ===================================
// GEM PROFIL
// ===================================


function saveCurrentProfile(){



    if(currentPlayer){


        savePlayerData(
            currentPlayer
        );


    }


}







// ===================================
// POINT
// ===================================


function addPoints(points){



    if(!currentPlayer){

        return;

    }



    currentPlayer.points += points;



    updateRank();


    saveCurrentProfile();


    renderPlayerCard();


}








// ===================================
// RANG
// ===================================


function updateRank(){



    if(
        currentPlayer.points >= 1000
    ){


        currentPlayer.rank =
        "KOL-mester";


    }


    else if(
        currentPlayer.points >= 500
    ){


        currentPlayer.rank =
        "KOL-ekspert";


    }


    else if(
        currentPlayer.points >= 200
    ){


        currentPlayer.rank =
        "KOL-specialist";


    }


    else {


        currentPlayer.rank =
        "Ny medarbejder";


    }



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



    calculateProgress();



    saveCurrentProfile();



}








// ===================================
// BEREGN PROCENT
// ===================================


function calculateProgress(){



    const totalMissions = 100;



    currentPlayer.progress =


    Math.min(

        Math.round(

            (
            currentPlayer.completedMissions.length
            /
            totalMissions
            )
            *
            100

        ),

        100

    );


}








// ===================================
// VIS PROFIL
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

    Rang:

    <strong>

    ${currentPlayer.rank}

    </strong>

    </p>




    <p>

    Point:
    ${currentPlayer.points}

    </p>



    <p>

    Gennemført:
    ${currentPlayer.progress}%

    </p>



    </div>


    `;


}








// ===================================
// HENT SPILLER
// ===================================


function getCurrentPlayer(){


    return currentPlayer;


}
