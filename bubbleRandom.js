class Bubble{
  constructor(tempX,tempY,tempR){
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }
  
  move(){
    this.x = this.x+random(-5,5);
    this.y = this.y+random(-5,5);
  }
  
  createBubble(){
    noStroke();
    fill(255);
    circle(this.x,this.y,this.r);
  }
}
let bubble;
let bubble1;

function setup(){
  createCanvas(600,400);
  bubble = new Bubble(100,100,20);
  bubble1 = new Bubble(300,200,10);
}

function draw(){
  background(50);
  bubble.createBubble();
  bubble.move();
  bubble1.createBubble();
  bubble1.move();
}
