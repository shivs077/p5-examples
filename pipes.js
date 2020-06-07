class Ball {
  constructor(radius, col) {
    this.radius = radius;
    this.col = col;
    this.position = new createVector(width / 2, height / 2);
    this.velocity = new createVector(random(-6, 6), random(-6, 6));
  }

  createBall() {
    noStroke();
    fill(this.col);
    circle(this.position.x, this.position.y, this.radius);
  }
  moveBall() {
    this.position.add(this.velocity);
    if (this.position.x <= 0 || this.position.x >= width) this.velocity.x *= -1;

    if (this.position.y <= 0 || this.position.y >= height)
      this.velocity.y *= -1;
  }
}
let balls = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#666");
  for (let i = 0; i <= 500; i++) {
    b = new Ball(
      random(10, 15),
      color(random(0, 255), random(0, 255), random(0, 255))
    );
    balls.push(b);
  }
}

function draw() {
  balls.forEach((b) => {
    b.createBall();
    b.moveBall();
  });
}
