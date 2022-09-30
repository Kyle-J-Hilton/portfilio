//let off = 0.001 // off = increment (how smooth function is)

let xpos = []
let ypos = []
let sway = []
let off = []
let ypos2 =[]

function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < 50; i++){
    xpos[i] = random(0,400)
    ypos[i] = 400
    sway[i] = random(-50,50)
    off[i] = random(0,20)
    ypos2[i] = random(160,200)
    
  }
  
}

function draw() {
  background('lavender');
  
  for (let i = 0; i < xpos.length; i ++){
  
  strokeWeight(random(1,2))
  stroke(125,125)
  
  sway[i] = -10+20*noise(off[i])
  
  off[i] = off[i] + 0.005
  
  line(xpos[i],ypos[i],sway[i]+xpos[i],ypos2[i])
  
  let gCol = 255*noise(off[i])
  fill (0,gCol,0)
  ellipse(sway[i]+xpos[i],ypos2[i],12,20)
  
  }
}