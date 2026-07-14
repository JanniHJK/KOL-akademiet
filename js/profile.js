function createProfile(){

const name =
document.getElementById("player-name").value;


if(!name){
alert("Skriv dit navn først");
return;
}


const player = {

name:name,

rank:"Ny medarbejder",

xp:0,

progress:0,

badges:[]

};


savePlayer(player);


showScreen("academy-screen");

updateDashboard();

}
