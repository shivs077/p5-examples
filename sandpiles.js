let sandpiles;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sandpiles = new Array(width);
  for (let i = 0; i < width; i++) {
    sandpiles[i] = new Array(height);
  }
  sandpiles[width / 2][height / 2] = 4;
}

function render() {
  loadPixels();
  for (let x = 0; x < windowWidth; x++) {
    for (let y = 0; y < windowHeight; y++) {
      let num = sandpiles[x][y];
      let newColor = color(255);
      if (num == 0) newColor = color(0);
      else if (num == 1) newColor = color(255, 0, 255);
      else if (num == 2) newColor = color(0, 255, 255);
      else if (num == 3) newColor = color(255, 255, 0);
      pixels[x + y * width] = newColor;
    }
  }
  updatePixels();
}

function draw() {}
