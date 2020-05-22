let center = 0;
let shade = 0;
let direction = 1;
function setup() {
  createCanvas(windowWidth, windowHeight / 2);
  angleMode(DEGREES);
  //scale(10);
}
let n = 6;
let d = 71;
function draw() {
  if (shade == 175) {
    direction = -1;
  } else if (shade == 0) {
    direction = 1;
  }
  center += 1;
  if (direction == 1) {
    shade += 1;
  } else {
    shade -= 1;
  }
  background("#0f0f0f");
  translate(width / 2, height / 2);
  //   stroke("#eee");
  stroke(shade, shade + 40, shade + 80);
  noFill();
  rotate(center);
  beginShape();
  for (let a = 0; a < 361; a++) {
    let r = 250 * sin(n * a * d); //radius of the circle
    let x = r * cos(d * a);
    let y = r * sin(d * a);
    vertex(x, y);
  }
  endShape(CLOSE);
}
