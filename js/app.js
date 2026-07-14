let currentStep = 0;


function showScreen(id){

document.querySelectorAll(".screen").forEach(screen=>{

screen.classList.add("hidden");

});


document.getElementById(id)
.classList.remove("hidden");

}



function startGame(){

showScreen("profile-screen");

}



function openMission(){

currentStep = 0;

showScreen("mission-screen");

showMissionStep();

}




function showMissionStep(){

const step = lungLabMission.steps[currentStep];


document.getElementById("mission-title").innerHTML =

`
${lungLabMission.title}
<br>
<span>Mission ${currentStep + 1} af ${lungLabMission.steps.length}</span>
`;



document.getElementById("mission-story").innerHTML =

`
<div class="story-box">

<h3>${step.title}</h3>

<p>
${step.story}
</p>

</div>
`;



document.getElementById("mission-question").innerHTML =
step.question;



document.getElementById("mission-answers").innerHTML =

step.answers.map((answer,index)=>{


return `

<button onclick="chooseAnswer(${index})">

${answer.text}

</button>

`;

}).join("");



document.getElementById("mission-feedback").innerHTML="";


}



function chooseAnswer(index){


const step = lungLabMission.steps[currentStep];

const answer = step.answers[index];


document.getElementById("mission-feedback").innerHTML =

`

<div class="${answer.correct ? "correct":"wrong"}">


<h3>

${answer.correct ? "God beslutning":"Overvej dit valg"}

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


let player = getPlayer();


if(player){

player.xp +=250;

player.progress = 10;

player.rank="KOL-assistent";


if(!player.badges.includes("Lungedetektiv")){

player.badges.push("Lungedetektiv");

}


savePlayer(player);

}



document.getElementById("mission-title").innerHTML =
"Mission gennemført";


document.getElementById("mission-story").innerHTML =

`

<div class="story-box">

<h2>🎉 Godt arbejde!</h2>

<p>
Du har hjulpet Erik gennem den første situation.
</p>

<p>
Du har opnået:
<br>
🏅 Lungedetektiv
</p>


</div>

`;


document.getElementById("mission-question").innerHTML="";

document.getElementById("mission-answers").innerHTML="";

}
