var spot = {
  x: 0,
  y: 0,
};
var col = {
  r: 0,
  g: 0,
  b: 0,
};
function setup() {
  createCanvas(600, 600);
  background("#ffffff");
}
function draw() {
  spot.x = random(0, width);
  spot.y = random(0, height);
  col.r = random(100, 200);
  col.g = random(100, 200);
  col.b = random(100, 200);
  noStroke();
  fill(col.r, col.g, col.b);
  circle(spot.x, spot.y, random(15));
  fill(col.r, col.b, col.g);
  circle(spot.y, spot.x, random(10));
  fill(col.g, col.b, col.r);
  circle(spot.x + random(50), spot.y + random(50), random(13));
  fill(col.g, col.r, col.b);
  circle(spot.x + random(50), spot.y + random(50), random(13));
  fill(col.b, col.r, col.g);
  circle(spot.x + random(50), spot.y + random(50), random(13));
  fill(col.b, col.g, col.r);
  circle(spot.x + random(50), spot.y + random(50), random(13));
}
