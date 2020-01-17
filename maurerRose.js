function setup(){
    createCanvas(600,400);
    angleMode(DEGREES);
    //scale(10);
}
let n = 6;
let d = 71;
function draw(){
    background(0);
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
