let n = 0; // this is the current number of particle
let c = 3; // this is the scalling factor
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
    stroke("#ecc19c");
    fill("#1e3d59");
    circle(y, x, 25);
    n++;
  }
}
