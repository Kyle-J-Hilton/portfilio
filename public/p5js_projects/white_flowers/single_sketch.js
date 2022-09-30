function setup() {
  createCanvas(1200, 1700);
  ellipseMode(CENTER);
  rectMode(CENTER);
  noLoop();
  pixelDensity(3);
}

function draw() {
  //background(40,40,50);
  background(50, 40, 30);

  let xoffset = 300;
  let yoffset = 800;

  let x2offset = 285;
  let y2offset = 262;

  let x3offset = 300;
  let y3offset = 550;

  let x4offset = 280;
  let y4offset = 180;

  let x5offset = 40;
  let y5offset = 40;

  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      for (let k = 0; k < 15; k++) {
        motif1(i * xoffset, j * yoffset);

        motif2(i * x2offset, j * y2offset);

        motif3(i * x3offset, j * y3offset);

        motif4(i * x4offset, j * y4offset);

        motif5(i * x2offset, j * y2offset);
      }
    }
  }
}
function motif1(xpos, ypos) {
  let w = 40;
  let h = 75;
  let r = 60;

  push();
  //fill(215,230,111,40)
  fill(250, 250, 250, 20);
  //fill(255,255,255,30)
  stroke(215, 255, 111, 100);
  let boxes = 10;
  let arclength = w / 2;
  let theta = arclength / r;
  strokeWeight(0);
  let rangle = random(-theta * 24, theta * 24);
  translate(xpos * cos(theta), ypos * sin(theta));
  rotate(rangle);
  ellipse(20, 20, w, h);
  pop();
}

function motif2(xpos2, ypos2) {
  // stroke('pink')
  // strokeWeight(0.5)
  let rcolor = random(100, 200);
  let gcolor = random(20, 100);
  let bcolor = random(80, 130);

  let sw = random(15, 25);
  let sh = random(15, 25);
  //strokeWeight(0)
  fill(rcolor, gcolor, bcolor);
  rect(xpos2, ypos2, sw, sh);
}

function motif3(x3pos, y3pos) {
  let w = 40;
  let h = 75;
  let r = 60;

  push();
  //fill(215,230,111,25)
  //fill(255,255,255,40)

  fill(250, 250, 250, 20);
  stroke(250, 250, 250, 100);
  let boxes = 10;
  let arclength = w / 2;
  let theta = arclength / r;
  strokeWeight(0);
  let rangle = random(-theta * 24, theta * 34);
  translate((x3pos + 150) * cos(theta), y3pos * sin(theta));
  rotate(rangle);
  ellipse(20, 20, w, h);
  pop();
}

function motif4(xpos4, ypos4) {
  let r4color = random(10, 250);
  let g4color = random(20, 100);
  let b4color = random(80, 130);

  let sw = random(15, 30);
  let sh = random(15, 30);
  strokeWeight(0);
  fill(r4color, g4color, b4color);
  rect(xpos4 + 150, ypos4, sw, sh);
}

function motif5(xpos5, ypos5) {
  r5color = random(0, 30);
  g5color = random(11, 140);
  b5color = random(143, 219);
  fill(r5color, g5color, b5color, 20);
  rect(xpos5, ypos5, 40);
}
function keyPressed() {
  save("flowers.png");
}
