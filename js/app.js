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

if(!player){
return;
}


document.getElementById("player-card")
.innerHTML =

`
<h2>${player.name}</h2>

<p>
Rang:
<strong>${player.rank}</strong>
</p>

<p>
⭐ XP:
${player.xp}
</p>

<p>
Fremskridt:
${player.progress}%
</p>

<p>
Badges:
${player.badges.join(", ") || "Ingen endnu"}
</p>

`;

}




function openMission(name){

if(name==="lunger"){

showScreen("mission-screen");

}

}





function answerQuestion(choice){


const feedback =
document.getElementById("feedback");



if(choice === 2){


feedback.innerHTML =

`

<div class="correct">

<h3>⭐ Rigtigt!</h3>

<p>
Ved KOL bliver luftvejene ofte forsnævrede,
og lungevævet kan være beskadiget.
Det gør det sværere at få luften ud.
</p>


<button onclick="finishMission()">
Fortsæt
</button>


</div>

`;



}

else{


feedback.innerHTML =

`

<div class="wrong">

<h3>Prøv igen</h3>

<p>
Det er ikke helt rigtigt.
Ved KOL handler problemet især om
forsnævrede luftveje og ændringer i lungevævet.
</p>


<button onclick="retryQuestion()">
Prøv igen
</button>


</div>

`;

}


}




function retryQuestion(){

document.getElementById("feedback").innerHTML="";

}





function finishMission(){


let player=getPlayer();


player.xp +=100;

player.progress=10;

player.rank="KOL-assistent";



if(!player.badges.includes("Lungedetektiv")){

player.badges.push("Lungedetektiv");

}


savePlayer(player);


showScreen("academy-screen");

updateDashboard();


}

function openArea(area){

if(area==="lunger"){

startMission(lungMission);

showScreen("mission-screen");

}

}
