var angle0 = 0;
var angle1 = 0;
var radius0 = 12;
var radius1 = 8;

var radius2 = 50;
var radius3 = 15;
var angle2 = 0;
var angle3 = 0;

var radius4 = 10;
var radius5 = 1;
var angle4 = 0;
var angle5 = 0;

var xx = 0;
var yy = 0;

function setup() {
  createCanvas(590, 500);

  pixelDensity(3);
  background(10, 10, 10);

  // setInterval(chacha,100)
}

function draw() {
  //setInterval(chacha,10)

  push();
  //fill(190,140,0,50)
  noFill();
  strokeWeight(0.1);
  stroke(200, 140, 0, 10);
  textFont("monospace", 24);
  text("CHA", 247, 185);
  pop();

  push();
  //fill(190,140,0,50)
  noFill();
  strokeWeight(0.1);
  stroke(200, 140, 0, 10);
  textFont("monospace", 24);
  text("CHA", 290, 185);
  pop();

  chacha(xx, yy);
}

function chacha(xx, yy) {
  noFill();
  strokeWeight(0.5);
  stroke(255, 180, 150, 1.8);

  rect(70, 4, 430, 320, 30);

  noFill();
  stroke(random(240, 250), random(100, 180), random(100, 150), 4);
  strokeWeight(0.5);
  rect(116, 50, 354, 95, 10);

  //heads
  fill(10, 10, 10, 1);
  stroke(100, 100, 100, 4);
  ellipse(155, 95, 60, 65);
  ellipse(225, 95, 60, 65);
  ellipse(295, 95, 60, 65);
  ellipse(363, 95, 60, 65);
  ellipse(430, 95, 60, 65);

  //mouths
  ellipse(155, 110, 15, 8);
  ellipse(225, 110, 15, 8);
  ellipse(295, 110, 15, 8);
  ellipse(363, 110, 15, 8);
  ellipse(430, 110, 15, 8);

  angle0 += 0.54;
  angle1 += 0.5;

  angle2 += 0.01;
  angle3 += 0.5;

  angle4 += 0.01;
  angle5 += 0.1;
  //background(220);

  push();
  var y1 = sin(angle0) * radius0;
  var x0 = cos(angle1) * (radius1 + y1);
  var y0 = sin(angle1) * (radius1 + y1);
  translate(width / 3 - 95, height - 473);
  stroke(0, 135, 158, 20);
  strokeWeight(2);
  point(x0, y0);

  pop();

  push();
  translate(width / 3 - 20, height - 473);
  stroke(0, 135, 158, 20);
  strokeWeight(2);
  point(x0, y0);
  pop();

  push();
  translate(width / 3 + 60, height - 473);
  stroke(0, 135, 158, 20);
  strokeWeight(2);
  point(x0, y0);
  pop();

  push();
  translate(width / 3 + 130, height - 473);
  stroke(0, 135, 158, 20);
  strokeWeight(2);
  point(x0, y0);
  pop();

  push();
  translate(width / 3 + 204, height - 473);
  stroke(0, 135, 158, 20);
  strokeWeight(2);
  point(x0, y0);
  pop();

  push();
  translate(width / 3 + 274, height - 473);
  stroke(0, 135, 158, 20);
  strokeWeight(2);
  point(x0, y0);
  pop();

  //blue headlights
  push();
  var y2 = sin(angle2) * radius2;
  var x1 = cos(angle3) * (radius3 + y2);
  var y3 = sin(angle3) * (radius3 + y2);
  stroke(0, 135, 158, 80);
  strokeWeight(2);
  translate(width / 3 - 48, height / 2);
  point(x1, y3);
  pop();

  push();
  stroke(0, 135, 158, 80);
  strokeWeight(2);
  translate(width - 173, height / 2);
  point(x1, y3);
  pop();

  //stroke(250,190,194,10)
  strokeWeight(1);
  stroke(255, 202, 135, 15);
  //fill(160,160,160,2)
  noFill();

  //headlights
  triangle(x1 + 70, y3 + 450, 145, 250, 152, 250);
  triangle(x1 + 220, y3 + 450, 145, 250, 152, 250);

  triangle(x1 + 350, y3 + 450, 413, 250, 420, 250);
  triangle(x1 + 500, y3 + 450, 413, 250, 420, 250);

  strokeWeight(0.5);
  triangle(220, 160, 360, 160, 290, 300);
  triangle(230, 155, 350, 155, 290, 290);

  push();
  var y4 = sin(angle4) * radius4;
  var x2 = cos(angle5) * (radius5 + y4);
  var y5 = sin(angle5) * (radius5 + y4);
  translate(width / 2 - 5, height - 280);
  stroke(255, 202, 135, 100);
  strokeWeight(0.5);
  point(x2, y5);

  pop();

  //eyes
  push();
  translate(width - 450, height - 410);
  //stroke(255,255,135,100)

  stroke(240, 140, 0, 100);
  strokeWeight(0.5);
  point(x2, y5);
  pop();

  push();
  translate(width - 420, height - 410);
  stroke(240, 140, 0, 100);
  strokeWeight(0.5);
  point(x2, y5);
  pop();

  push();
  translate(width - 380, height - 410);
  stroke(240, 140, 0, 100);
  strokeWeight(0.5);
  point(x2, y5);
  pop();

  push();
  translate(width - 350, height - 410);
  stroke(240, 140, 0, 100);
  strokeWeight(0.5);
  point(x2, y5);
  pop();

  push();
  translate(width - 310, height - 410);
  stroke(240, 140, 0, 100);
  strokeWeight(0.5);
  point(x2, y5);
  pop();

  push();
  translate(width - 280, height - 410);
  stroke(240, 140, 0, 100);
  strokeWeight(0.5);
  point(x2, y5);
  pop();

  push();
  translate(width - 240, height - 410);
  stroke(240, 140, 0, 100);
  strokeWeight(0.5);
  point(x2, y5);
  pop();

  push();
  translate(width - 212, height - 410);
  stroke(240, 140, 0, 100);
  strokeWeight(0.5);
  point(x2, y5);
  pop();

  push();
  translate(width - 173, height - 410);
  stroke(240, 140, 0, 100);
  strokeWeight(0.5);
  point(x2, y5);
  pop();

  push();
  translate(width - 145, height - 410);
  stroke(240, 140, 0, 100);
  strokeWeight(0.5);
  point(x2, y5);
  pop();
}
Footer;
