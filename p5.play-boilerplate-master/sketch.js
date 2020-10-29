var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0); 

  drawNumbers();
  
  var hr = hour();
  var mn = minute();
  var sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  translate(window.innerWidth/2, window.innerHeight/2);

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 0, -100);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 0, -100);
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 0, -50);
  pop();
}

function drawNumbers(){
  textSize(34);
  fill(255);
  text("0", window.innerWidth/2, window.innerHeight/2 - 100);
  text("3", window.innerWidth/2 + 100, window.innerHeight/2);
  text("6", window.innerWidth/2, window.innerHeight/2 + 100);
  text("9", window.innerWidth/2 - 100, window.innerHeight/2);
}