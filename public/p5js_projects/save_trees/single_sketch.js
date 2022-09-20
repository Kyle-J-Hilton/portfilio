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
    text("SAVE", xpos[i], ypos[i] + 1);
    text("THE", xpos[i], ypos[i] + t);
    text("TREES", xpos[i], ypos[i] + 2 * t);
    // text('d',xpos[i],ypos[i]+3*t)
    // text('d',xpos[i],ypos[i]+4*t)
    // text('d',xpos[i],ypos[i]+5*t)
    // text('d',xpos[i],ypos[i]+6*t)
    // text('d',xpos[i],ypos[i]+7*t)
    // text('d',xpos[i],ypos[i]+8*t)
    // text('d',xpos[i],ypos[i]+9*t)
    // text('d',xpos[i],ypos[i]+10*t)
    // text('d',xpos[i],ypos[i]+11*t)
    // text('d',xpos[i],ypos[i]+13*t)
    // text('d',xpos[i],ypos[i]+14*t)
    // text('d',xpos[i],ypos[i]+15*t)
    // text('d',xpos[i],ypos[i]+16*t)
    // text('d',xpos[i],ypos[i]+17*t)
    // text('d',xpos[i],ypos[i]+18*t)
    // text('d',xpos[i],ypos[i]+19*t)
    // text('d',xpos[i],ypos[i]+20*t)
    // text('d',xpos[i],ypos[i]+21*t)
    // text('d',xpos[i],ypos[i]+22*t)
    // text('d',xpos[i],ypos[i]+23*t)

    if (ypos[i] > height) {
      ypos[i] = -200;
    }

    if (mouseIsPressed) {
      //raindrops cease then fall again

      ypos[i] = -600;
    }
  }

  for (let i = 0; i < yspeed.length; i++) {
    n[i] = 1 + 3 * noise(off[i]);
    off[i] = off[i] + 0.001;

    ypos[i] = ypos[i] + yspeed[i];
  }

  //}

  //function mouseClicked(){ raindrops cease to fall then begin again

  //for (let i = 0; i < xpos.length; i++)

  //ypos[i]=-500
}
