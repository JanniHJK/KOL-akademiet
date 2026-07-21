// ===================================
// KOL Akademiet v2.0
// App motor
// ===================================



function showScreen(screenId){



    const screens =

    document.querySelectorAll(
        ".screen"
    );



    screens.forEach(screen=>{


        screen.classList.add(
            "hidden"
        );


    });





    const target =

    document.getElementById(
        screenId
    );



    if(target){


        target.classList.remove(
            "hidden"
        );


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
        area === "lungelaboratoriet"
    ){



        startModule(
            "lungelaboratoriet"
        );



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



    title.innerHTML =
    area;



    content.innerHTML = `


    <div class="dialogue-box">


    <h3>
    Området er låst
    </h3>


    <p>

    Dette område bliver åbnet,
    når du har gennemført tidligere
    missioner.

    </p>


    </div>


    `;



    showScreen(
        "area-screen"
    );



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


});
