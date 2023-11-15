let xpos = [];
let xpos2 = [];
let ypos = [];
let ypos2 = [];
let yspeed = [];
let yspeed2 = [];
let xposP = [];
let yposP = [];
let counter = 0;
let pillRowOffset = 0;
let t = [];

let numCircle = 10; // Increase the number of circles

let pills = []; // Array to store pill positions

function setup() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  createCanvas(width - 5, height - 5); // Adjust the canvas size

  for (let i = 0; i < numCircle; i++) {
    xpos[i] = 100 + (i * 35); // Adjust the initial x positions
    ypos[i] = 150;
    ypos2[i] = 150;
    xpos2[i] = 130 + (i * 35); // Adjust the initial x positions for the second set of circles
    t[i] = 0;
  }

  for (let i = 0; i < numCircle; i++) {
    yspeed[i] = random(0.1, 0.7); // Decrease the yspeed values
    yspeed2[i] = random(0.5, 0.9); // Decrease the yspeed2 values
  }
}

function draw() {
  
  background(190, 190, 190);
  strokeWeight(0);
 
  // Repeat the entire animation for each circle
  for (let k = 0; k < numCircle; k++) {
    //poppy bulb
    fill(127, 189, 60);
    ellipse(100 + k * 80, 150, 55, 60);
    strokeWeight(0.5);
    stroke(58, 87, 65, 40);
    ellipse(100 + k * 80, 150, 45, 60);
    ellipse(100 + k * 80, 150, 35, 60);
    ellipse(100 + k * 80, 150, 15, 60);
    fill(127, 189, 60);
    triangle(85 + k * 80, 125, 90 + k * 80, 125, 76 + k * 80, 120);
    strokeWeight(2);
    fill(127, 189, 60);
    ellipse(100 + k * 80, 124, 28, 6);
    rect(97 + k * 80, 180, 5, 220);

    // Repeat the teardrop animation for each circle
    strokeWeight(0);
    //left teardrop
    fill(242, 172, 162);
    circle(xpos[k] + k * 35, ypos[k], 10);
    triangle(xpos[k] - 5 + k * 35, ypos[k], xpos[k] + k * 35, ypos[k] - 10, xpos[k] + 5 + k * 35, ypos[k]);

    //right teardrop
    fill(242, 172, 162);
    circle(xpos2[k] + k * 35, ypos2[k], 10);
    triangle(
      xpos2[k] - 5 + k * 35, ypos2[k], xpos2[k] + k * 35, ypos2[k] - 10, xpos2[k] + 5 + k * 35, ypos2[k]);

    if (ypos[k] > 389) {
      ypos[k] = 150;
      t[k] = 1;
      pills.push({ x: xpos[k] + k * 35, y: (390 - pillRowOffset) }); // Store pill position 
    }

    if (ypos2[k] > 389) {
      ypos2[k] = 150;
      t[k] = 1;
      pills.push({ x: xpos2[k] + k * 35, y: (390 - pillRowOffset) }); 
    }

 
  }
  
  for (let i = 0; i < yspeed.length; i++) {
    ypos[i] = ypos[i] + yspeed[i];
    ypos2[i] = ypos2[i] + yspeed2[i];
  }

  // Draw and update pill positions
  
  for (let i = 0; i < pills.length; i++) {
   
    pill(pills[i].x, pills[i].y);
  }

 
}

function pill(xposP, yposP) {
 
  fill("white");
  strokeWeight(0.1);
  stroke(163, 19, 0);
  rect(xposP - 10, (yposP), 15, 10, 4);
  fill("red");
  rect(xposP, (yposP), 15, 10, 4);

  if (counter % 20 === 0) {
    pillRowOffset = pillRowOffset + 0.005; 
  }
  counter++;
}
