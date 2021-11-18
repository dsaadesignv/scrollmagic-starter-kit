function setup(){
  let c = createCanvas(600,800,WEBGL);
  c.parent('scene6');
}

function draw(){
  background(0);
  fill(255);
  push();
  translate(-width/2,-height/2,0);
  rect(0,0,100*p,50);
  translate(0,55,0);
  rect(0,0,400*p,50);
  translate(0,55,0);
  rect(0,0,300*p,50);

  pop();
  stroke(255);
  noFill();
  push()
  rotateY(p);
  sphere(200);
  pop();
}
