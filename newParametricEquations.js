function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#ffffff");
}
let t = 0;
let xoff = 0;
function draw() {
  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(10, 2);
  for (let i = 0; i < 50; i++) {
    line(x1(t / 2 + i), y1(t + i), x2(t + i) + 30, y2(t / 2 + i) + 30);
  }
  t += 0.25 / 4;
  xoff += 0.05;
}

function x1(t) {
  return sin(t / 10) * 125 + sin(t / 20) * 125 + sin(t / 30) * 125;
}

function y1(t) {
  return cos(t / 10) * 125 + cos(t / 20) * 125 + cos(t / 30) * 125;
}

function x2(t) {
  return sin(t / 15) * 125 + sin(t / 25) * 125 + sin(t / 35) * 125;
}

function y2(t) {
  return cos(t / 15) * 125 + cos(t / 25) * 125 + cos(t / 35) * 125;
}
