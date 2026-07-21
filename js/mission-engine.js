// ===================================
// KOL Akademiet v2.0
// Missionsmotor
// ===================================


let activeMission = null;

let currentQuestion = 0;





function startMission(mission){


    activeMission = mission;

    currentQuestion = 0;


    showScreen(
        "mission-screen"
    );


    renderMissionQuestion();


}







function renderMissionQuestion(){


    const title =
    document.getElementById(
        "mission-title"
    );


    const content =
    document.getElementById(
        "mission-content"
    );



    const question =
    activeMission.questions[currentQuestion];



    title.innerHTML =
    activeMission.title;



    content.innerHTML = `


    <div class="mission-story">


    <p>

    ${activeMission.story}

    </p>


    </div>



    <h3>

    ${question.text}

    </h3>



    <div class="answer-grid">


    ${

    question.answers.map(
        (answer,index)=>`

        <button 
        class="answer-card"
        onclick="checkAnswer(${index})">

        ${answer.text}

        </button>

        `
    ).join("")

    }


    </div>



    <div id="feedback">

    </div>


    `;



}







function checkAnswer(answerIndex){



    const question =
    activeMission.questions[currentQuestion];



    const answer =
    question.answers[answerIndex];



    const feedback =
    document.getElementById(
        "feedback"
    );





    if(answer.correct){


        addPoints(25);



        feedback.innerHTML = `


        <div class="correct-feedback">


        <h3>
        Rigtigt
        </h3>


        <p>
        ${answer.feedback}
        </p>


        </div>



        <button onclick="nextQuestion()">

        Fortsæt

        </button>


        `;



    }

    else {



        feedback.innerHTML = `


        <div class="wrong-feedback">


        <h3>
        Ikke helt
        </h3>


        <p>
        ${answer.feedback}
        </p>


        </div>



        <button onclick="renderMissionQuestion()">

        Prøv igen

        </button>


        `;



    }



}








function nextQuestion(){



    currentQuestion++;




    if(
        currentQuestion <
        activeMission.questions.length
    ){


        renderMissionQuestion();


    }

    else {



        completeMission();


    }



}








function completeMission(){



    feedback =
    document.getElementById(
        "mission-content"
    );



    addPoints(50);



    feedback.innerHTML = `


    <div class="correct-feedback">


    <h2>
    Mission gennemført!
    </h2>


    <p>

    Du har afsluttet din første
    KOL-udfordring.

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
