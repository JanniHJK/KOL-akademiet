// ===================================
// KOL Akademiet v2.0
// App motor - integration
// ===================================



// ===================================
// SKIFT SKÆRM
// ===================================


function showScreen(screenId){


    const screens =
    document.querySelectorAll(".screen");



    screens.forEach(screen => {

        screen.classList.add("hidden");

    });



    const target =
    document.getElementById(screenId);



    if(target){

        target.classList.remove("hidden");

    }


}







// ===================================
// START SPIL
// ===================================


function startGame(){


    showScreen(
        "profile-screen"
    );


}







// ===================================
// OPRET PROFIL
// ===================================


function createProfile(){



    const input =
    document.getElementById(
        "player-name"
    );



    if(
        !input.value.trim()
    ){


        alert(
            "Skriv dit navn først"
        );


        return;


    }





    initializeProfile(
        input.value
    );



    renderPlayerCard();



    showScreen(
        "academy-screen"
    );


}








// ===================================
// ÅBN OMRÅDE
// ===================================


function openArea(area){



    if(
        !isAreaUnlocked(area)
    ){


        return;


    }






    const title =
    document.getElementById(
        "area-title"
    );



    const content =
    document.getElementById(
        "area-content"
    );






    if(
        area === "lungelaboratoriet"
    ){



        title.innerHTML =

        "🫁 Lungelaboratoriet";





        content.innerHTML = `


        <div class="dialogue-box">


        <h3>
        Anna – KOL-vejleder
        </h3>



        <p>

        Du står ved indgangen til
        Lungelaboratoriet.

        Her skal du lære, hvordan
        KOL påvirker borgerens lunger.

        </p>



        </div>



        <button onclick="openMission()">

        Start mission

        </button>


        `;


    }



    showScreen(
        "area-screen"
    );



}









// ===================================
// FØRSTE MISSION
// ===================================


function openMission(){



    document.getElementById(
        "mission-title"
    ).innerHTML =

    "Mission 1: Lungernes hemmelighed";




    document.getElementById(
        "mission-content"
    ).innerHTML = `



    <div class="dialogue-box">


    <h3>
    Din første opgave
    </h3>


    <p>

    En borger med KOL fortæller,
    at det er blevet sværere at gå
    fra stuen til køkkenet.

    Hvad vil du først være mest
    opmærksom på?

    </p>



    <button onclick="missionAnswer(false)">

    Fortælle borgeren at træne mere

    </button>



    <button onclick="missionAnswer(true)">

    Observere ændringer i åndenød
    og aktivitetsniveau

    </button>



    <button onclick="missionAnswer(false)">

    Ignorere det, hvis borgeren
    stadig kan klare sig selv

    </button>



    </div>


    `;



    showScreen(
        "mission-screen"
    );



}








// ===================================
// SVAR PÅ MISSION
// ===================================


function missionAnswer(correct){



    const box =
    document.getElementById(
        "mission-content"
    );



    if(correct){



        addPoints(50);



        completeArea(
            "lungelaboratoriet"
        );



        box.innerHTML = `


        <div class="dialogue-box">


        <h3>
        Godt observeret!
        </h3>


        <p>

        Ændret åndenød og lavere
        aktivitetsniveau kan være tegn
        på ændringer hos borgeren.

        </p>


        <p>
        +50 point
        </p>


        </div>


        <button onclick="showScreen('academy-screen')">

        Tilbage til kortet

        </button>


        `;



    }

    else {



        box.innerHTML = `


        <div class="dialogue-box">


        <h3>
        Ikke helt
        </h3>


        <p>

        Ved KOL er observation af
        ændringer vigtig for at opdage
        problemer tidligt.

        </p>


        </div>



        <button onclick="openMission()">

        Prøv igen

        </button>


        `;


    }



}







// ===================================
// START
// ===================================


document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        showScreen(
            "welcome-screen"
        );


    }
);
