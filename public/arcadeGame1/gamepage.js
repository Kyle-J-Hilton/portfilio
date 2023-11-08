import * as chooseHuntressModule from "./modules/choosePlayerFunctions/chooseHuntres.js";
import * as chooseGoblinModule from "./modules/choosePlayerFunctions/chooseGoblin.js";
import * as chooseLuffyModule from "./modules/choosePlayerFunctions/chooseLuffy.js";
import * as chooseNarutoModule from "./modules/choosePlayerFunctions/chooseNaruto.js";
import * as chooseCatModule from "./modules/choosePlayerFunctions/chooseCat.js";
import * as chooseStarFireModule from "./modules/choosePlayerFunctions/chooseStarFire.js";
import * as gameManagementModule from "./modules/gameManagementFunctions/gameManagement.js";

let lastGame = 0
 function chooseHuntress() {
  console.log('huntress')
  lastGame = 1;
  chooseHuntressModule.chooseHuntress();
  
};

 function chooseGoblin() {
  console.log('goblin');
  lastGame = 2;
  chooseGoblinModule.chooseGoblin();
  
};

 function chooseLuffy() {
  console.log('luffy')
  lastGame = 3;
  chooseLuffyModule.chooseLuffy();
};

 function chooseNaruto() {
  console.log('naruto')
  lastGame = 4;
  chooseNarutoModule.chooseNaruto();
};

 function chooseCat() {
  console.log('cat')
  lastGame = 5;
  chooseCatModule.chooseCat();
};

 function chooseStarFire() {
  console.log('star')
  lastGame = 6;
  chooseStarFireModule.chooseStarFire();
};

 function playagain() {
   gameManagementModule.playAgain();
 
};

 function playnext() {
  gameManagementModule.playNext(lastGame);
};
document.getElementById("huntress").onclick = chooseHuntress; 
document.getElementById("goblin").onclick = chooseGoblin; 
document.getElementById("luffy").onclick = chooseLuffy; 
document.getElementById("naruto").onclick = chooseNaruto; 
document.getElementById("cat").onclick = chooseCat; 
document.getElementById("star").onclick = chooseStarFire; 
document.getElementById("play").onclick = playagain; 
document.getElementById("playNext").onclick = playnext; 
