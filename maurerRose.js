
let xSpeed = 5;
let ySpeed = -3;
let xPos;
let yPos;
let slider;
function setup(){
    createCanvas(windowWidth,windowHeight);
    xPos = width/2;
    yPos = height/2;
    angleMode(DEGREES);
   // slider = createSlider(10,400,50,2);
    //scale(10);
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

function setup(){
    createCanvas(600,400);
    angleMode(DEGREES);
    //scale(10);
}

let n = 6;
let d = 71;
function draw(){
    background(0);

    xPos+=xSpeed;
    yPos+=ySpeed;
    if(xPos>=width || xPos<=0){
        xSpeed*=-1;
    }
    if(yPos>=height || yPos<=0){
        ySpeed*=-1;
    }
    translate(xPos,yPos);
    //stroke(random(255),random(255),random(255));
    stroke(55);
    noFill();
    // moveShape();
    // bounceShape();
    let rTemp = 159;
    beginShape();
    for(let a = 0;a<361;a++){
        
        let r = rTemp*sin(n*a*d); //radius of the circle
    translate(width/2,height/2);
    stroke(255);
    noFill();
    beginShape();
    for(let a = 0;a<361;a++){
        
        let r = 150*sin(n*a*d); //radius of the circle
        let x = r*cos(d*a);
        let y = r*sin(d*a);
        vertex(x,y);
    }
    endShape(CLOSE);
}

// function bounceShape(){
//     if(xPos>=width || xPos<=0){
// 	xSpeed*=-1;
//     }
//     if(yPos>=height || yHeight<=0){
// 	ySpeed*=-1;
//     }
// }

// function moveShape(){
//     xPos+=xSpeed;
//     yPos+=ySPeed;
// }

