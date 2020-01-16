let values = [];
let i = 0;
let j = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0;i<width;i++){
    values.push(random(height));
  }
}

function draw() {
  background(0);
  for(let k = 0;k<50;k++){
  if(i<values.length){
    //for(let j = 0;j<values.length-i-1;j++){
      let temp = values[j];
      if(values[j] > values[j+1]){
        values[j] = values[j+1];
        values[j+1] = temp;
      }
    j++;
    //}
    if(j>=values.length-i-1){
      j = 0;
      i++;
    }
  }
  else{
    console.log("Finished Sorting");
    noLoop();
  }
  }
  for(let i = 0;i<values.length;i++){
   //stroke(23,69,207);
    //fill(169);
    stroke(random(255),random(255),random(255));
    rect(i , height, 1, -values[i]);
  }
}