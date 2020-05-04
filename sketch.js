var drop = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (var i = 0; i < 500; i++) {
    drop[i] = new Drop();
  }
}

function draw() {
  background(230, 250, 250);
  for (var i = 0; i < drop.length; i++) {
    drop[i].fall();
    drop[i].display();
  }
}