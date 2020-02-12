function setup(){
  createCanvas(720,400);
}
let t = 0;
function draw(){
  background(0);
  translate(width/2,height/2);
  stroke(255);
  strokeWeight(2);
  for(let i = 0;i<75;i++){
    line(x1(t+i),y1(t+i),x2(t+i)+20,y2(t+i)+20);
  }
  t+=0.2;
}

function x1(t){
  return sin(t/10)*180 + sin(t/20)*180;
}

function y1(t){
  return cos(t/10)*180-cos(t/20)*180;
}

function x2(t){
  return sin(t/15)*180+ sin(t/25)*180;
}

function y2(t){
  return cos(t/15)*180-cos(t/25)*180;
}