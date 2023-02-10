var click;
var triangle;

function setup() {
  pixelDensity(1);
  triangle = loadImage("ex01-01(l).png");
  click = loadImage("ex01-01(f).png");
  createCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  clear();
  return false;
}

function draw() {
  imageMode(CENTER);
  image(click, mouseX, mouseY, 80, 80);
  if (mouseIsPressed === true) {
    if (mouseButton === RIGHT) {a
      image(sale, mouseX, mouseY, 100, 100);
    }
    if (mouseButton === LEFT) {
      image(triangle, mouseX, mouseY, 100, 100);
      return false;
    }
  }
}
