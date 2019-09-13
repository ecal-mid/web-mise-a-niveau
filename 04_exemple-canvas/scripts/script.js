var width = window.innerWidth;
var height = window.innerHeight;

var canvas = document.querySelector("canvas");
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext("2d");

// Mouse position
var mouseX = 0;
var mouseY = 0;

canvas.addEventListener("mousemove", function (event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

// Particles attributes
var circleX = 0;
var circleY = 0;
var circleRadius = 30;

function draw () {
  // Clear background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);

  // Update circle position
  circleX += (mouseX - circleX) * 0.1;
  circleY += (mouseY - circleY) * 0.1;

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  requestAnimationFrame(draw);
}

draw();