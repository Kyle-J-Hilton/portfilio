let xpos = [];
let ypos = [];
let sway = [];
let off = [];
let xpos2 = [];
let ypos2 = [];

let w = 100;
let h = 20;
let r = 20;
let arclength = w / 2;
let theta = arclength / r;
let rangle = [];

let rcolor = [];
let gcolor = [];
let bcolor = [];

function setup() {
  createCanvas(1450, 900);

  for (let i = 0; i < 20; i++) {
    xpos[i] = random(0, 100);
    ypos[i] = random(0, 200);
    xpos2[i] = 50;
    ypos2[i] = 100;
    sway[i] = random(-10, 10);
    off[i] = (-10, 10);

    rangle[i] = random(-theta, theta);

    rcolor[i] = random(100, 200);
    gcolor[i] = random(190, 200);
    bcolor[i] = random(200, 210);
  }
}

function draw() {
  background("black");

  let xoffset = 50;
  let yoffset = 50;

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 10; j++) {
      translate(width / 2, height / 2);

      motif(xoffset * i, yoffset * j);
      //motif2(200+xoffset*i,200+yoffset*i)
    }
  }
}

function motif(xx, yy) {
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 2; j++) {
      sway[i] = -5 + 3 * noise(off[i]);
      off[i] = off[i] + 0.00000004;

      rotate(sway[i] + rangle[j]);
      strokeWeight(10);
      //stroke(rcolor[i],gcolor[i],bcolor[i],150)
      stroke("yellow");
      //translate(600,600)
      line(xx, yy, xx + 10, yy + 10);
    }
  }
}
