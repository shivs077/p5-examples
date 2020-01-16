function setup(){
    createCanvas(320,200);
    pixelDensity(1);
}

function draw(){
    background(51);
    loadPixels();
    for(let y = 0;y<height;y++){
        for(let x = 0;x<width;x++){
            let index = x+(y*width)+4;
            pixels[index+0] = random(255);
            pixels[index+1] = random(255);
            pixels[index+2] = random(255);
            pixels[index+3] = random(255);
        }
    }
    updatePixels();
}