function savePlayer(player){

localStorage.setItem(
"KOL_player",
JSON.stringify(player)
);

}


function getPlayer(){

return JSON.parse(
localStorage.getItem("KOL_player")
);

}
