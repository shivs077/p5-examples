let slider;
let angle = 0;
function setup(){
    createCanvas(600,400);
  slider = createSlider(0,TWO_PI,PI/4,0.01);
}

function draw(){
    angle = slider.value();
    //angle = random(0,TWO_PI);
    background(0);
    translate(300,height);
    branch(129);
}

function branch(len){
    line(0,0,0,-len);
    translate(0,-len);
    if(len > 4){
        stroke(169,map(angle,0,TWO_PI,0,255),map(angle,0,TWO_PI,255,0));
        push();
        stroke(map(angle,0,TWO_PI,0,255),100,map(angle,0,TWO_PI,255,0));
        rotate(angle);
        branch(len*0.67);
        pop();
        push();
        stroke(map(angle,0,TWO_PI,0,255),map(angle,0,TWO_PI,255,0),100);
        rotate(-angle);
        branch(len*0.67);
        pop();
  }
}