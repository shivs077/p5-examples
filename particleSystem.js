let bubbles = [];
function setup(){
  createCanvas(windowWidth,windowHeight);
  for(let i =  0;i<1000;i++){
    let x = new Bubble();
    bubbles.push(x);
  }
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function draw(){
  background(0);
  for(let i = 0;i<bubbles.length;i++){
    bubbles[i].createBubble();
    bubbles[i].move();
  }
}

class Bubble{
  constructor(){
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.r = random(5,45);
  }
  move(){
    this.x+=random(-5,5);
    this.y+=random(-5,5);
  }
  createBubble(){
    noStroke();
    fill(random(255),random(255),random(255),random(100));
    circle(this.x,this.y,this.r);
  }
}
    
