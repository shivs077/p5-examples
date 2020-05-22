class Particle {
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = 1;
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1.,1.5);
  }

  createParticle() {
    noStroke();
    fill('rgba(255,255,255,0.5)');
    circle(this.x,this.y,this.r);
  }

  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

  joinParticles(paraticles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<90) {
        stroke('rgba(255,255,255,0.1)');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}

let particles = [];
function setup() {
  createCanvas(720, 400);
  for(let i = 0;i<width/8;i++){
    particles.push(new Particle());
  }
}

function draw() {
  background('#0f0f0f');
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}