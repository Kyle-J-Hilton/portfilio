
function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES)
}

function draw() {
  background(300);
  
  strokeWeight(4)
  
  let x1=100
  let y1=20
  let x2=350
  let y2=80
  let offset=10
  
 
  //loop
  for(let i=0 ; i < 30; i++){
     line(x1,y1,x2,y2)
    line(x1,y1+i*offset,x2,y2+i*offset)
  }
    
  offset2=5.25
for(let i=0 ; i < 60; i++){
  line(x1-90,y1+i*offset2,x2-90,y2+i*offset2)
}
  

 
}