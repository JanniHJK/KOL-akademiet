// ===================================
// KOL Akademiet v2.0
// Profilstyring
// ===================================



let currentPlayer = null;





// ===================================
// Opret eller hent profil
// ===================================


function initializeProfile(name){



    const existingPlayer =
    loadPlayerData();




    if(existingPlayer){


        currentPlayer = existingPlayer;


        return currentPlayer;


    }





    currentPlayer =
    createDefaultPlayer(name);




    savePlayerData(
        currentPlayer
    );



    return currentPlayer;



}







// ===================================
// Opdater profil
// ===================================


function updateProfile(){


    if(currentPlayer){


        savePlayerData(
            currentPlayer
        );


    }


}







// ===================================
// Tilføj point
// ===================================


function addPoints(points){



    if(!currentPlayer){

        return;

    }



    currentPlayer.points += points;



    updateRank();



    updateProfile();


}








// ===================================
// Opdater rang
// ===================================


function updateRank(){



    if(
        currentPlayer.points >= 1000
    ){


        currentPlayer.rank =
        "KOL-mester";


    }

    else if(
        currentPlayer.points >= 700
    ){


        currentPlayer.rank =
        "KOL-ekspert";


    }

    else if(
        currentPlayer.points >= 400
    ){


        currentPlayer.rank =
        "KOL-specialist";


    }

    else if(
        currentPlayer.points >= 100
    ){


        currentPlayer.rank =
        "KOL-assistent";


    }

    else {


        currentPlayer.rank =
        "Ny medarbejder";


    }



}








// ===================================
// Vis profil på kort
// ===================================


function renderPlayerCard(){



    const card =
    document.getElementById(
        "player-card"
    );



    if(!card || !currentPlayer){

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
    Fremskridt:
    ${currentPlayer.progress}%
    </p>



    </div>


    `;



}





// ===================================
// Hent nuværende spiller
// ===================================


function getCurrentPlayer(){


    return currentPlayer;


}
