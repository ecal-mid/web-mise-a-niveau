// Get HTML items
var gridItems = document.querySelectorAll(".grid-item");

for (var i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("mouseenter", function () {
    // Generate random color
    var red = Math.random() * 255;
    var green = Math.random() * 255;
    var blue = Math.random() * 255;
    var rgb = "rgb(" + red + "," + green + "," + blue + ")";
    this.style.backgroundColor = rgb;

    // Generate random angle
    var angle = Math.random() * 360 - 180;
    this.style.transform = "rotate(" + angle + "deg)";
  });
}
