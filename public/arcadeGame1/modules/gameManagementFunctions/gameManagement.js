 //makes the keys natural state unpressed
 export const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
  Shift: {
    pressed: false,
  },
  Control: {
    pressed: false,
  },
  Meta: {
    pressed: false,
  },
  Alt: {
    pressed: false,
  },
  m: {
    pressed: false,
  },
  z: {
    pressed: false,
  },
};

// determines if attack hit substitution bubble
export function circularCollision({ rectangle, circle }) {
  return (
    rectangle.attackBox.position.x + rectangle.attackBox.width >=
      circle.substitutionZone.position.x - circle.substitutionZone.radius &&
    rectangle.attackBox.position.x <=
      circle.substitutionZone.position.x + circle.substitutionZone.radius &&
    rectangle.attackBox.position.y + rectangle.attackBox.height >=
      circle.position.y &&
    rectangle.attackBox.position.y <= circle.position.y + circle.height
  );
}

// determines if attack hit other player
export function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  );
}

// determines who won
export function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  document.querySelector("#displayText").style.display = "flex";
  if (player.health === enemy.health) {
    document.querySelector("#displayText").innerHTML = "Tie";
    setTimeout(() => {
      document.getElementById("playAgain").style.display = "block";
    }, 2000);
  } else if (player.health > enemy.health) {
    document.querySelector("#displayText").innerHTML = "Player 1 Wins";
    setTimeout(() => {
      document.getElementById("playAgain").style.display = "block";
    }, 2000);
  } else if (player.health < enemy.health) {
    document.querySelector("#displayText").innerHTML = "Player 2 Wins";
    setTimeout(() => {
      document.getElementById("playAgain").style.display = "block";
    }, 2000);
  }
}

export function playAgain() {
  setTimeout(() => {
    location.reload();
  }, 500);
}

export function playNext(lastGame) {
  if (lastGame == 1) {
    console.log("Next Opponent Is... luffy");
    setTimeout(() => {
      location.reload();
    }, 1000);
  } else if (lastGame == 2) {
    console.log("Next Opponent Is... naruto");
    setTimeout(() => {
      location.reload();
    }, 1000);
  } else if (lastGame == 3) {
    console.log("Next Opponent Is... cat");
    setTimeout(() => {
      location.reload();
    }, 1000);
  } else if (lastGame == 4) {
    console.log("Next Opponent Is... huntress");
    setTimeout(() => {
      location.reload();
    }, 1000);
  } else if (lastGame == 5) {
    console.log("Next Opponent Is... goblin");
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
}