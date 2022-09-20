let xpos = 0;
let ypos = 0;
let xoffset = 50;
let yoffset = 40;

function setup() {
  createCanvas(1000, 1150);
  noLoop();
}

function draw() {
  background("white");

  for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 21; j++) {
      strokeWeight(1);
      textSize(40);
      fill("white");
      text("THE WORDS YOU SPEAK", width / 2 - 50, height / 2);
      text("BECOME THE HOUSE", width / 2 - 50, height / 2 + 40);
      text("YOU LIVE IN", width / 2 - 50, height / 2 + 80);

      motif1(i * xoffset, j * yoffset);
    }
  }
}

function motif1(xpos, ypos) {
  strokeWeight(14);
  stroke(random(0, 20), random(0, 10), random(0, 10), 100);
  line(xpos, ypos, xpos + 140, ypos + 350);
}
