/**
 * Get the width and height of the window
 */
var width = window.innerWidth;
var height = window.innerHeight;

/**
 * Get the canvas element in the DOM.
 */
var canvas = document.querySelector("canvas");

/**
 * Set the width and the height of the canvas.
 */
canvas.width = width;
canvas.height = height;

/**
 * Get the context of the canvas. This will enable us to use some drawing
 * tools in the main loop ("draw" function).
 */
var ctx = canvas.getContext("2d");

/**
 * Create two variables to hold the mouse position.
 */
var mouseX = 0;
var mouseY = 0;

/**
 * Add an event listener on the canvas to retrieve the mouse position.
 * On "mousemove" we reset the two variables above with the new mouse values.
 */
canvas.addEventListener("mousemove", function (event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

/**
 * Declare some properties for the circle (position and radius).
 */
var circleX = 0;
var circleY = 0;
var circleRadius = 30;

/**
 * Create a function that will be used to draw things. This is our main loop.
 */
function draw () {
  /**
   * Clear the background.
   */
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);

  /**
   * Update the circle's position.
   */
  circleX += (mouseX - circleX) * 0.1;
  circleY += (mouseY - circleY) * 0.1;

  /**
   * Draw the circle with a red background.
   */
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  /**
   * Call the "draw" function as soon as possible.
   */
  requestAnimationFrame(draw);
}

/**
 * Start the main loop.
 */
requestAnimationFrame(draw);