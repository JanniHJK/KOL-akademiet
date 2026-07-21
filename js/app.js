// ===================================
// KOL Akademiet v2.0
// App styring
// Stabil version
// ===================================



function showScreen(screenId){


    document
    .querySelectorAll(".screen")
    .forEach(screen=>{

        screen.classList.add("hidden");

    });



    const screen = document.getElementById(screenId);


    if(screen){

        screen.classList.remove("hidden");

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



    if(!input.value.trim()){

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
// ÅBN OMRÅDE FRA KORT
// ===================================


function openArea(area){



    console.log(
        "Åbner område:",
        area
    );



    if(
        area === "lungelaboratoriet"
    ){


        startModule(
            "lungelaboratoriet"
        );


        return;


    }



    showScreen(
        "area-screen"
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


}

);
