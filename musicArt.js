var rot = 0;
var song;
var fft;
var button;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound("mySound.aac");
}

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  button = createButton("toggle");
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.9, 128);
}

function draw() {
  background("#DDC6B6");
  var spectrum = fft.analyze();
  //console.log(spectrum);
  //stroke(255);
  noStroke();
  translate(width / 2, height / 2);
  //beginShape();
  rot += 0.075;
  rotate(rot);
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 360);
    var amp = spectrum[i];
    var r = map(amp, 0, 128, 200, 500);
    //fill(i, 255, 255);
    var x = r * (cos(angle) * cos(angle) * cos(angle));
    var y = r * (sin(angle) * sin(angle) * sin(angle));
    stroke(38 + i, 34 + i, 35 + i);
    line(0, 0, x, y);
    //vertex(x, y);
    //var y = map(amp, 0, 256, height, 0);
    //rect(i * w, y, w - 2, height - y);
  }
  //endShape();
}
