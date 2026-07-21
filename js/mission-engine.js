// ===================================
// KOL Akademiet v2.0
// Mission Engine
// Stabilisering 4.1
// ===================================


let activeMission = null;

let currentQuestionIndex = 0;






// ===================================
// START MISSION
// ===================================


function startMission(mission){



    activeMission = mission;


    currentQuestionIndex = 0;



    showScreen(
        "mission-screen"
    );



    renderMission();


}







// ===================================
// VIS MISSION
// ===================================


function renderMission(){



    const title =

    document.getElementById(
        "mission-title"
    );



    const content =

    document.getElementById(
        "mission-content"
    );



    const question =

    activeMission.questions[
        currentQuestionIndex
    ];





    title.innerHTML =

    activeMission.title;





    content.innerHTML = `


    <div class="mission-story">

    <p>

    ${activeMission.story}

    </p>

    </div>




    <div class="question-box">


    <h3>

    ${question.text}

    </h3>



    <div class="answer-grid">


    ${
        question.answers.map(

        (answer,index)=>{


            return `


            <button

            class="answer-card"

            onclick="checkMissionAnswer(${index})">


            ${answer.text}


            </button>


            `;


        }

        ).join("")

    }


    </div>


    </div>



    <div id="mission-feedback"></div>


    `;


}








// ===================================
// SVAR
// ===================================


function checkMissionAnswer(index){



    const question =

    activeMission.questions[
        currentQuestionIndex
    ];



    const answer =

    question.answers[index];



    const feedback =

    document.getElementById(
        "mission-feedback"
    );





    if(answer.correct){



        feedback.innerHTML = `


        <div class="correct-feedback">


        <h3>
        Rigtigt svar
        </h3>


        <p>

        ${answer.feedback}

        </p>


        </div>



        <button onclick="continueMission()">

        Fortsæt

        </button>


        `;


    }

    else {



        feedback.innerHTML = `


        <div class="wrong-feedback">


        <h3>
        Ikke korrekt
        </h3>


        <p>

        ${answer.feedback}

        </p>


        </div>



        <button onclick="renderMission()">

        Prøv igen

        </button>


        `;


    }



}








// ===================================
// NÆSTE SPØRGSMÅL
// ===================================


function continueMission(){



    currentQuestionIndex++;





    if(

        currentQuestionIndex

        <

        activeMission.questions.length

    ){


        renderMission();


    }

    else {


        finishMission();


    }


}








// ===================================
// AFSLUT MISSION
// ===================================


function finishMission(){



    addPoints(100);



    completeModuleMission();



}








// ===================================
// VIS RESULTAT
// ===================================


function showMissionComplete(){



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

    Du har gennemført denne udfordring.

    </p>



    <p>

    +100 point

    </p>



    </div>


    `;



}
