class Ball {
  let radius;
  let col;
  let position;
  let velocity;

  Ball(radius, col) {
    this.radius = radius;
    this.col = col;
    this.position = new createVector(100,100);
    this.velocity = new createVector(2,2);
  }

  createBall() {
    noStroke();
    fill(this.col);
    circle(this.position.x, this.position.y, this.radius);
  }
}

Ball b;
function setup() {
  createCanvas(400,400);
  background(0);
  b = new Ball(30, color(255));
}

function draw() {
  b.createBall();
}