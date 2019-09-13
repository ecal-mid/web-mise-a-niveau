// Get all .grid-item as an array.
var gridItems = document.querySelectorAll(".grid-item");

/**
 * Loop through all .grid-item and add a listener to each one.
 * On the event "click" generate a random color and assign it to
 * the background of the element.
 */
for (var i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("mouseenter", function () {
    // Generate random color values (red, blue, green),
    var red = Math.random() * 255;
    var green = Math.random() * 255;
    var blue = Math.random() * 255;

    // Generate a string (CSS value) with all the values.
    var rgb = "rgb(" + red + "," + green + "," + blue + ")";
    
    // Assign the new color to the current element's background.
    this.style.backgroundColor = rgb;

    // Generate random angle
    var angle = Math.random() * 360 - 180;
    this.style.transform = "rotate(" + angle + "deg)";
  });
}
