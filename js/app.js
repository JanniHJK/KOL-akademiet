let currentStep = 0;


function showScreen(id){

document.querySelectorAll(".screen")
.forEach(screen=>{
screen.classList.add("hidden");
});


document.getElementById(id)
.classList.remove("hidden");

}



function startGame(){

showScreen("profile-screen");

}



function updateDashboard(){

const player=getPlayer();

if(!player)return;


document.getElementById("player-card").innerHTML=

`
<h2>${player.name}</h2>

<p>
Rang: ${player.rank}
</p>

<p>
⭐ XP: ${player.xp}
</p>

<p>
Fremskridt:
${player.progress}%
</p>

`;

}




function openMission(){

currentStep=0;

showScreen("mission-screen");

showMissionStep();

}



function showMissionStep(){


let step=
lungLabMission.steps[currentStep];


document.getElementById("mission-title")
.innerHTML=
`${lungLabMission.title}
(${currentStep+1}/${lungLabMission.steps.length})`;



document.getElementById("mission-story")
.innerHTML=

`
<div class="story-box">
<h3>${step.title}</h3>
<p>${step.story}</p>
</div>
`;



document.getElementById("mission-question")
.innerHTML=
step.question;



document.getElementById("mission-answers")
.innerHTML=

step.answers.map((a,index)=>


`

<button onclick="chooseAnswer(${index})">

${a.text}

</button>

`

).join("");



document.getElementById("mission-feedback")
.innerHTML="";


}




function chooseAnswer(index){


let step=
lungLabMission.steps[currentStep];


let answer=
step.answers[index];



document.getElementById("mission-feedback")
.innerHTML=

`

<div class="${answer.correct ? "correct":"wrong"}">

<h3>
${answer.correct ? "God beslutning":"Overvej dette"}
</h3>

<p>
${answer.feedback}
</p>


<button onclick="nextStep()">
Fortsæt
</button>

</div>

`;

}



function nextStep(){

currentStep++;


if(currentStep >= lungLabMission.steps.length){


completeMission();

return;

}


showMissionStep();

}




function completeMission(){


let player=getPlayer();


player.xp +=250;

player.progress=10;


player.rank="KOL-assistent";


player.badges.push("Lungedetektiv");


savePlayer(player);


document.getElementById("mission-story").innerHTML=

`
<h2>
Mission gennemført!
</h2>

<p>
Du har opnået badge:
<br>
🏅 Lungedetektiv
</p>

<button onclick="showScreen('academy-screen');updateDashboard();">
Tilbage
</button>
`;

}
