// ===================================
// KOL Akademiet v2.0
// App motor
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
// START
// ===================================


function startGame(){


    showScreen(
        "profile-screen"
    );


}







// ===================================
// PROFIL
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
// OMRÅDER
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

        Du træder ind i
        Lungelaboratoriet.

        Her skal du undersøge,
        hvordan KOL påvirker borgerens
        vejrtrækning.

        </p>


        </div>



        <button onclick="launchFirstLungMission()">

        Start mission

        </button>



        `;



    }



    showScreen(
        "area-screen"
    );


}







// ===================================
// START LUNGEMISSION
// ===================================


function launchFirstLungMission(){


    const mission =
    getLungMission();



    startMission(
        mission
    );


}








// ===================================
// STARTSIDE
// ===================================


document.addEventListener(
"DOMContentLoaded",
()=>{


    showScreen(
        "welcome-screen"
    );


});
