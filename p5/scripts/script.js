var numEllipses = 200;
var ellipses = [];
var ellipseX = 0;
var ellipseY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  ellipseX = windowWidth * 0.5;
  ellipseY = windowHeight * 0.5;

  for (var i = 0; i < numEllipses; i++) {
    var ellipse = createVector(ellipseX, ellipseY);
    ellipses.push(ellipse);
  }
}

function draw() {
  noStroke();
  fill(240);
  rectMode(CORNER);
  rect(0, 0, windowWidth, windowHeight);

  ellipseX += (mouseX - ellipseX) * 0.1;
  ellipseY += (mouseY - ellipseY) * 0.1;

  // Draw & update ellipses
  var firstEllipse = ellipses[0];
  firstEllipse.x = mouseX;
  firstEllipse.y = mouseY

  for (var i = ellipses.length - 1; i >= 1; i--) {
    // Fill the ellipse
    fill(abs(sin(i * 0.5) * 255));

    // Update ellipse position according to the precedent ellipse
    var lastEllipse = ellipses[i - 1];
    var currentEllipse = ellipses[i];

    currentEllipse.x += (lastEllipse.x - currentEllipse.x) * 0.3;
    currentEllipse.y += (lastEllipse.y - currentEllipse.y) * 0.3;

    var radius = abs(cos(i * 0.3) * 200) + 50;

    // Draw ellipse
    push();
    translate(currentEllipse.x, currentEllipse.y);
    rotate(i * 0.1);
    rectMode(CENTER);
    ellipse(0, 0, radius, radius);
    pop();
  }
}