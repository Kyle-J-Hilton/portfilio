function setup() {
  createCanvas(1024, 1700);
  noLoop();
}

function draw() {
  //background(17,83,74);
  background(110, 0, 53);
  let xoffset = 390;
  let yoffset = 100;
  for (let i = 0; i < 75; i++) {
    for (let j = 0; j < 75; j++) {
      motif1(i * xoffset, j * yoffset);
    }
  }
}
function motif1(xpos, ypos) {
  sw = random(1, 6);
  noFill();

  fill(10, 10, 10, 40);
  stroke(10, 10, 10, 80);
  strokeWeight(sw);

  ellipse(xpos + 200, ypos, 280);

  sw3 = random(1, 10);
  strokeWeight(sw3);
  stroke(240, 240, 240, 50);
  ellipse(xpos + 200, ypos, 200);

  sw2 = random(1, 4);
  strokeWeight(sw2);
  stroke(15, 18, 110, 160);
  ellipse(xpos + 200, ypos, 160);

  strokeWeight(0);
  fill("black");
  ellipse(xpos + 200, ypos + 100, random(10, 40));
}
