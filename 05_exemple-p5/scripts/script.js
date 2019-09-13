/**
 * Create an array to hold all the ellipses.
 */
var ellipses = [];

/**
 * The setup function is used to initialize the canvas and
 * some variables.
 */
function setup() {
  /**
   * Initialize the canvas.
   */
  createCanvas(windowWidth, windowHeight);

  /**
   * Create 200 vectors that will be used to draw the ellipses.
   */
  for (var i = 0; i < 200; i++) {
    var position = createVector(windowWidth * 0.5, windowHeight * 0.5);

    /**
     * Add the new position to the array.
     */
    ellipses.push(position);
  }
}

/**
 * The draw function is used to draw things on the screen. This is
 * the main loop.
 */
function draw() {
  /**
   * Clear the background.
   */
  background(240);

  /**
   * Update the first ellipse's position according to the mouse.
   */
  ellipses[0].x = mouseX;
  ellipses[0].y = mouseY

  for (var i = ellipses.length - 1; i >= 1; i--) {
    /**
     * Update the current ellipse's position according to the last one.
     * Every ellipse should follow the precedent one.
     */
    var lastEllipse = ellipses[i - 1];
    ellipses[i].x += (lastEllipse.x - ellipses[i].x) * 0.3;
    ellipses[i].y += (lastEllipse.y - ellipses[i].y) * 0.3;

    /**
     * Generate a radius according to the index of the ellipse.
     */
    var radius = abs(cos(i * 0.3) * 200) + 50;

    /**
     * Setup the filling style of the ellipse
     */
    noStroke();
    fill(abs(sin(i * 0.5) * 255));

    /**
     * Draw the ellipse.
     */
    ellipse(ellipses[i].x, ellipses[i].y, radius, radius);
  }
}