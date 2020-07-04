let n = 0; // this is the current number of particle
let c = 3; // this is the scalling factor
let xoff = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#ecc19c");
  angleMode(DEGREES);
}

function draw() {
  translate(width / 2, height / 2);
  for (let i = 1; i <= 6; i++) {
    let a = 201.113 * n;
    let r = c * sqrt(n);
    let x = r * cos(a);
    let y = r * sin(a);
    let col = map(noise(xoff), 0, 1, 0, 50);
    let col1 = map(noise(xoff), 0, 1, 0, 50);
    let col2 = map(noise(xoff), 0, 1, 0, 50);
    stroke("#ecc19c");
    // fill(col, col1, col2);
    fill("#1e3d59");
    circle(y, x, 25);
    n++;
    xoff += 0.01;
  }
}
