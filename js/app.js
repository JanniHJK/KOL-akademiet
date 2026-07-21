
// ===================================
// KOL Akademiet v2.0
// Grundmotor
// ===================================



let player = {

    name: "",

    progress: 0

};





// ===================================
// SKIFT SKÆRM
// ===================================


function showScreen(screenId) {


    const screens = document.querySelectorAll(".screen");


    screens.forEach(screen => {

        screen.classList.add("hidden");

    });



    const target = document.getElementById(screenId);


    if(target){

        target.classList.remove("hidden");

    }


}





// ===================================
// START SPIL
// ===================================


function startGame(){


    showScreen("profile-screen");


}





// ===================================
// OPRET PROFIL
// ===================================


function createProfile(){


    const input = document.getElementById(
        "player-name"
    );


    if(!input.value.trim()){


        alert(
            "Skriv dit navn for at starte eventyret"
        );


        return;


    }



    player.name = input.value;


    updatePlayerCard();


    showScreen(
        "academy-screen"
    );


}





// ===================================
// VIS SPILLERKORT
// ===================================


function updatePlayerCard(){


    const card =
    document.getElementById(
        "player-card"
    );



    if(card){


        card.innerHTML = `

        <div class="dialogue-box">

        <h3>
        ${player.name}
        </h3>

        <p>
        Ny medarbejder på KOL Akademiet
        </p>

        </div>

        `;


    }


}





// ===================================
// ÅBN OMRÅDE
// ===================================


function openArea(area){


    const title =
    document.getElementById(
        "area-title"
    );


    const content =
    document.getElementById(
        "area-content"
    );



    if(area === "lungelaboratoriet"){



        title.innerHTML =
        "🫁 Lungelaboratoriet";



        content.innerHTML = `


        <div class="dialogue-box">


        <h3>
        Anna – KOL-vejleder
        </h3>


        <p>

        Velkommen til Lungelaboratoriet.
        Her begynder din rejse med at forstå,
        hvad der sker i kroppen ved KOL.

        </p>


        </div>



        <button onclick="openMission()">

        Gå til første mission

        </button>


        `;



    }


    showScreen(
        "area-screen"
    );


}





// ===================================
// ÅBN FØRSTE MISSION
// Midlertidig grundstruktur
// ===================================


function openMission(){


    const title =
    document.getElementById(
        "mission-title"
    );


    const content =
    document.getElementById(
        "mission-content"
    );



    title.innerHTML =
    "Mission 1: Lungernes hemmelighed";



    content.innerHTML = `


    <div class="dialogue-box">


    <h3>
    Første udfordring
    </h3>


    <p>

    Du skal snart hjælpe din første borger
    med KOL.

    </p>


    <p>

    Denne mission bygges ud i næste version.

    </p>


    </div>


    <button onclick="showScreen('academy-screen')">

    Tilbage til kortet

    </button>


    `;



    showScreen(
        "mission-screen"
    );


}






// ===================================
// START
// ===================================


document.addEventListener(
    "DOMContentLoaded",
    () => {


        showScreen(
            "welcome-screen"
        );


    }
);
