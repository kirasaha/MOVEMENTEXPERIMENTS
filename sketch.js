let images = [];

const squareSize = 70;

function preload() {
  images.push(loadImage('ex01-2(f).png'));
  images.push(loadImage('ex01-2(l).png'));
  images.push(loadImage('ex01-3(f).png'));
  images.push(loadImage('ex01-3(l).png'));
  images.push(loadImage('ex06-05(f).png'));
  images.push(loadImage('ex02-04(l).png'));
  images.push(loadImage('ex04-04(f).png'));
  images.push(loadImage('ex05-03(f).png'));
  images.push(loadImage('ex06-03(f).png'));
  images.push(loadImage('ex03-02(f).png'));








}

function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);

  for (const img of images) {
    img.resize(squareSize, squareSize);
  }

  background(255);

  frameRate(0.6);
}


function draw() {
  const x = squareSize / 5 + squareSize * floor(random(width / squareSize));
  const y = squareSize / 5 + squareSize * floor(random(height /squareSize));

  translate(x, y);

  const r = (PI / 2) * random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  rotate(r);

  let redColor;
  let greenColor;
  let blueColor;

  do {
    redColor = random(255);
    greenColor = random(255);
    blueColor = random(255);
  } while(redColor < 10 && greenColor < 10 && blueColor < 10);


  tint(redColor, greenColor, blueColor);

  // tint(0, 153, 204);


  image(random(images), 0, 0);
}
