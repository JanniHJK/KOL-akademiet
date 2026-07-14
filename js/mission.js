let currentMission;

let currentStep=0;



function startMission(mission){


currentMission=mission;

currentStep=0;

showMissionStep();

}



function showMissionStep(){


const step=
currentMission.steps[currentStep];


document.getElementById("mission-content")
.innerHTML=

`

<h2>
${currentMission.title}
</h2>


<p>
Trin ${currentStep+1}
af ${currentMission.steps.length}
</p>


<div class="mission-question">

<h3>
${step.text}
</h3>


<div class="choice-container">

${step.answers.map((answer,index)=>


`

<button onclick="checkAnswer(${index})">

${answer}

</button>


`

).join("")}


</div>


</div>

`;

}




function checkAnswer(answer){


const step=
currentMission.steps[currentStep];


const box=
document.getElementById("feedback");



if(answer===step.correct){


box.innerHTML=

`

<div class="correct">

<h3>
⭐ Rigtigt
</h3>

<p>
${step.feedback}
</p>


<button onclick="nextStep()">
Fortsæt
</button>


</div>

`;


}


else{


box.innerHTML=

`

<div class="wrong">

<h3>
Prøv igen
</h3>

<p>
${step.feedback}
</p>


<button onclick="showMissionStep()">
Forsøg igen
</button>


</div>

`;

}



}




function nextStep(){


currentStep++;


if(currentStep >= currentMission.steps.length){


completeFullMission();


return;

}


showMissionStep();


}




function completeFullMission(){


let player=getPlayer();


player.xp +=500;

player.progress=20;

player.rank="KOL-assistent";


if(!player.badges.includes("Lungedetektiv")){

player.badges.push("Lungedetektiv");

}


savePlayer(player);



document.getElementById("mission-content")
.innerHTML=

`

<h2>
🎉 Mission gennemført!
</h2>

<p>
Du har bestået Lungernes hemmelighed.
</p>


<p>
Du har fået:
</p>

<p>
⭐ 500 XP
</p>

<p>
🏅 Lungedetektiv
</p>


<button onclick="showScreen('academy-screen');updateDashboard();">

Tilbage til akademiet

</button>


`;



}
