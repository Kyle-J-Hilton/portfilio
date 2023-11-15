//wings
let xpos = [];
let ypos = [];
let swayx = [];
let swayy = [];
let offy = [];
let off = [];
let ypos2 = [];
let ypos3 = [];
let xpos2 = [];

let rangle = [];
let w = 60;
let h = 10;
let r = 160;
let show = 0;
let arclength = w / 2;
let theta = arclength / r;

let rcolor = [];
let gcolor = [];
let bcolor = [];

let Poffsetx = 200;
let Poffsety = 300;

//interactive
let video;
let poseNet;
let pose;

let handx = 0;
let handy = 0;

//stars

let xposS = [];
let yposS = [];

function setup() {
  createCanvas(1536, 864);
 

  for (let j = 0; j < 50; j++) {
    xpos[j] = random(-100, 1450);
    ypos[j] = 600;
    swayx[j] = random(-50, 50);
    swayy[j] = random(0, 50);
    off[j] = random(0, 20);
    offy[j] = random(0, 20);
    ypos2[j] = random(0, 600);
    xpos2[j] = random(-100, 1800);
    ypos3[j] = random(-20, 1000);
    xposS[j] = random(0, 2000);
    yposS[j] = random(0, 1000);

    //petals

    //rangle[j] = random(-theta*20,theta*20)
    rcolor[j] = random(0, 255);
    gcolor[j] = random(0, 25);
    bcolor[j] = random(100, 255);
  }
}

function draw() {
  background("black");

  // Update the positions of the shapes to follow the mouse
  for (let j = 0; j < xpos.length; j++) {
    xpos[j] = mouseX + random(-10, 10);
    ypos[j] = mouseY + random(-10, 10);
    swayx[j] = -300 + 1000 * noise(off[j]);
    swayy[j] = -300 + 1000 * noise(offy[j]);

    offy[j] = offy[j] + 0.05;
    off[j] = off[j] + 0.05;

    petals1(Poffsetx * xpos[j], Poffsety * ypos2[j]);
    petals2(Poffsetx * xpos2[j], Poffsety * ypos3[j]);
  }
}

//pink

function petals1() {
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 2; j++) {
      push();
      rangle[i] = random(-theta * 5, theta);
      strokeWeight(0.5);
      stroke(random(100, 240), random(0, 40), random(200, 240));
      //fill(100,120,200,50)
      fill(0, 0, 0, 40);
      translate(i * cos(theta), j * sin(theta));
      translate(swayx[i] + xpos[i], swayy[i] + ypos2[i]);
      rotate(rangle[i]);
      ellipse(0, 0, w, h);
      pop();

      push();
      strokeWeight(4);
      //stroke(223,254,77)
      stroke(rcolor[i], gcolor[i], bcolor[i]);
      //stroke(random(100,250), random(100,200),random(0,200))
      translate(i * cos(theta), j * sin(theta));
      //rotate(-theta*4)
      line(
        swayx[i] + xpos[i] - 2,
        swayy[i] + ypos2[i] - 10,
        swayx[i] + xpos[i] + 4,
        swayy[i] + ypos2[i] + 6
      );
      translate(xpos[i], ypos2[i]);

      pop();
    }
  }
}
//blue
function petals2() {
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 2; j++) {
      push();
      rangle[i] = random(-theta, theta * 6);
      strokeWeight(1);
      //stroke(223,254,77)
      stroke(random(0, 100), random(100, 200), random(160, 250));
      //fill(100,120,200,50)
      fill(0, 0, 0, 20);
      translate(i * cos(theta), j * sin(theta));
      translate(swayx[i] + xpos2[i], swayy[i] + ypos3[i]);
      rotate(rangle[i]);
      ellipse(0, 0, w, h);
      pop();

      push();

      strokeWeight(4);

      stroke(random(0, 20), random(0, 255), 255, 100);
      translate(i * cos(theta), j * sin(theta));
      line(
        swayx[i] + xpos2[i] + 5,
        swayy[i] + ypos3[i] - 11,
        swayx[i] + xpos2[i] - 3,
        swayy[i] + ypos3[i] + 8
      );
      translate(xpos2[i], ypos3[i]);

      pop();
    }
  }

  for (let i = 0; i < 250; i++) {
    strokeWeight(1.5);

    stroke(random(0, 1), random(0, 255), random(0, 1));
    point(xposS[i], yposS[i]);
  }
}
