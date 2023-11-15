let xpos = [];
let ypos = [];
let yspeed = [];
let n = [];
let off = [];

let rcolor = [];
let gcolor = [];
let bcolor = [];

let t = 40; //text size

let numCircle = [];

function setup() {
  createCanvas(1450, 900);
  textAlign(CENTER);

  for (let i = 0; i < 50; i++) {
    xpos[i] = random(0, 1800);
    ypos[i] = -100;
    n[i] = [-20, 20];
    off[i] = [-20, 20];
    yspeed[i] = random(0.1, 4);
    rcolor[i] = random(0, 20);
    gcolor[i] = random(0, 255);
    bcolor[i] = random(0, 205);
  }
}
function draw() {
  background("black");
  strokeWeight(0);

  for (let i = 0; i < xpos.length; i++) {
    //circle(xpos[i],ypos[i],10)
    fill(rcolor[i], gcolor[i], bcolor[i]);

    textSize(t);
    text("KJ HILTON", xpos[i], ypos[i] + 1);
    text("Software Development", xpos[i], ypos[i] + t);
    text("$$$$$$$$$$$$", xpos[i], ypos[i] + 2 * t);
 

    if (ypos[i] > height) {
      ypos[i] = -200;
    }

    if (mouseIsPressed) {
      rotate(cos(180));
      if(rcolor[i] <= 20){
        rcolor[i] += 150;
      } else if(rcolor[i] <= 150){
        rcolor[i] += 150;
      } else{
        rcolor[i] -= 150;
      }
    }
  }

  for (let i = 0; i < yspeed.length; i++) {
    n[i] = 1 + 3 * noise(off[i]);
    off[i] = off[i] + 0.001;

    ypos[i] = ypos[i] + yspeed[i];
  }

}
