let angle = 0;
let w = 24;
function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background("#0f0f0f");
  // translate(width / 2, height / 2);
  rectMode(CENTER);
  let offset = 0;
  for (let x = 0; x < width; x += w) {
    push();
    let a = angle + offset;
    let h = 150 * sin(a) + 150;
    noStroke();
    fill(255);
    rect(x - width / 2 + w / 2, 0, w - 2, h);
    offset += 0.05;
    pop();
  }
  angle += 0.05;
}
