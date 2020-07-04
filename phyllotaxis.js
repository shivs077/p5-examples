let n = 0; // this is the current number of particle
let c = 3; // this is the scalling factor
let xoff = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#5F4B8BFF");
  angleMode(DEGREES);
}

function draw() {
  translate(width / 2, height / 2);
  for (let i = 1; i <= 6; i++) {
    let a = 137.5 * n;
    let r = c * sqrt(n);
    let x = r * cos(a);
    let y = r * sin(a);
    let col = map(noise(xoff), 0, 1, 0, 190);
    let col1 = map(noise(a), 0, 1, 0, 190);
    let col2 = map(noise(a), 0, 1, 0, 100);
    fill("#E69A8DFF");
    circle(x, y, 25);
    n++;
    xoff += 0.01;
  }
}
