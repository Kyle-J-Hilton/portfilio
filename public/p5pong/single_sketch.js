let xpos = 20;
let ypos=30;
let dir = 1
let diry = 1
let r = 30

let showRect = 0;

pWidth = 150

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
}

function draw() {
  background(220,240,190);
  
  //rect(mouseX,350,100,20)
  //strokeWeight(0)
  
 circle(xpos,ypos,r)
  
  xpos = xpos + dir;
  ypos = ypos + diry;
  
  if (mouseX < pWidth/2){
    rect(pWidth/2,350,pWidth/2,20)
  }
  
  else{
    rect(mouseX,350,pWidth,20)
  }
  
  fill(mouseX,mouseY/2,100)
  rect(mouseX,350,pWidth,20)
  
  
  
  let ballDistance = dist(xpos,ypos,mouseX,350)
  //print(ballDistance)
  
  if (ballDistance < 30){
    diry = -4
  }
  
if(xpos > width-r){
    dir = -2
  }
  
  if (xpos < 0){
    dir = 3
      }
  
  if (ypos < r){
    diry = 2 + random (0,4)
  }

if (ypos > height){
  
  textSize(40)
  text('GAME OVER :/',50,200)
}
  
  
  if(showRect ==0){
    fill(40,30,100)
    rect(200,10,100,70)
    
  }
  let brdistance = dist(xpos,ypos,200,10)
  
  if(brdistance < 10){
    showRect =1
  }
  
}