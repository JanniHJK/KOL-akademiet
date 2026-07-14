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


document.getElementById("player-card")
.innerHTML=

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

`;

}



function openMission(name){

if(name==="lunger"){

showScreen("mission-screen");

}

}



function completeMission(){

let player=getPlayer();


player.xp +=100;

player.progress=10;

player.rank="KOL-assistent";


player.badges.push(
"Lungedetektiv"
);


savePlayer(player);


alert(
"Mission gennemført! Du har fået dit første badge 🫁"
);


showScreen("academy-screen");

updateDashboard();

}
