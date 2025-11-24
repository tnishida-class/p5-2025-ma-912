4-2
function setup() {
  createCanvas(200, 200);
  background(240)
  let scores=[];
  for(let i=0; i<10; i++){
    scores[i]=random(20, 100);
  }
  console.log(scores);

const n=10;
for(let i=0; i<n; i++){
  line(0, height*i/n, width, height*i/n);
}

noFill();
stroke(0);
strokeWeight(2);
beginShape();
for(let i=0; i<scores.length;i++){
  const dx=width/scores.length;
  const x=i*dx+dx/2;
  const y=height-height*scores[i]/100;
  vertex(x,y);
}
endShape();
noStroke();
fill(0);
for(let i=0; i<scores.length; i++){
  const dx=width/scores.length;
  const x=i*dx+dx/2;
  const y=height-height*scores[i]/100;
  ellipse(x,y,8,8);
}
}