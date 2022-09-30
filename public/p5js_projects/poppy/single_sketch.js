let xpos = [];
let xpos2 = [];
let ypos = [];
let ypos2 = [];
let yspeed = [];
let yspeed2 = [];
let xposP = [];
let yposP = [];

let t = [];

let numCircle = 4;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 2; i++) {
    xpos[i] = random(100, 110);
    ypos[i] = 150;
    ypos2[i] = 150;
    xpos2[i] = random(130, 140);
    t[i] = 0;
  }

  for (let i = 0; i < numCircle; i++) {
    yspeed[i] = random(0.2, 1);
    yspeed2[i] = random(0.5, 1);
  }
}
function draw() {
  background(190, 190, 190);
  strokeWeight(0);

  //poppy bulb
  fill(127, 189, 60);
  ellipse(120, 150, 55, 60);
  strokeWeight(0.5);
  stroke(58, 87, 65, 40);
  ellipse(120, 150, 45, 60);
  ellipse(120, 150, 35, 60);
  ellipse(120, 150, 15, 60);
  fill(127, 189, 60);
  triangle(105, 125, 110, 125, 96, 120);
  strokeWeight(2);
  fill(127, 189, 60);
  ellipse(120, 124, 28, 6);
  rect(117, 180, 5, 220);

  for (let i = 0; i < xpos.length; i++) {
    strokeWeight(0);
    //left teardrop
    fill(242, 172, 162);
    circle(xpos[i], ypos[i], 10);

    //textSize(10)
    //text('raindrops',xpos[i]+5,ypos[i]+5)
    triangle(xpos[i] - 5, ypos[i], xpos[i], ypos[i] - 10, xpos[i] + 5, ypos[i]);

    //right teardrop
    circle(xpos2[i], ypos2[i], 10);
    fill(242, 172, 162);
    triangle(
      xpos2[i] - 5,
      ypos2[i],
      xpos2[i],
      ypos2[i] - 10,
      xpos2[i] + 5,
      ypos2[i]
    );

    if (ypos[i] > height) {
      ypos[i] = 150;
      ypos2[i] = 150;
      t[i] = 1;
    }

    if (mouseIsPressed) {
      //raindrops cease then fall again

      ypos[i] = -600;
    }
  }

  for (let i = 0; i < yspeed.length; i++) {
    ypos[i] = ypos[i] + yspeed[i];
    ypos2[i] = ypos2[i] + yspeed2[i];
  }

  //pills

  pill(100, 390);
  pill2(130, 390);
}

function pill(xposP, yposP) {
  for (let i = 0; i < xpos.length; i++) {
    let d = dist(xpos[i], ypos[i], xposP, yposP);

    if (d < 10) {
      fill("white");
      strokeWeight(0.1);
      stroke(163, 19, 0);
      rect(xposP - 10, yposP, 15, 10, 4);
      fill("red");
      rect(xposP, yposP, 15, 10, 4);
    }
  }
}

function pill2(xposP2, yposP2) {
  for (let i = 0; i < xpos.length; i++) {
    if (dist(xpos2[i], ypos2[i], xposP2, yposP2) < 10) {
      fill("white");
      strokeWeight(0.1);
      stroke(163, 19, 0);
      rect(xposP2 + 5, yposP2, 15, 10, 4);
      fill("red");
      rect(xposP2 + 15, yposP2, 15, 10, 4);
    }
  }
}
