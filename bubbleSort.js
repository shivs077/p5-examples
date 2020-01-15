let values = [];
let i = 0;
let j = 0;
function setup(){
    createCanvas(100,100);
    for(let i = 0;i<innerWidth;i++){
        values.push(random(height));
    }
    
}

function draw(){
    let tempo = values[j];
    if(values[j] > values[j+1]){
        values[j] = values[j+1];
        values[j+1] = tempo;
    }
    if(i<values.length){
            j++;
            if(j>=values.length-i-1){
                j = 0;
                i++;
            }
    }
    else{
        print("finished sorting");
        noLoop();
    }
    background(255);
    for(let i = 0;i<values.length;i++){
        stroke(0);
        line(i,height,i,height-values[i]);
    }
}