var imgTag = new Image();
var canvas = document.getElementById('icanvas');
var ctx = canvas.getContext("2d");
var x = canvas.width;
var y = 0;

imgTag.onload = animate;
imgTag.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-flower-services-1547491684.png";   // load image

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
  ctx.drawImage(imgTag, x, y);                       // draw image at current position
  x -= 4;
  if (x > 1) requestAnimationFrame(animate)        // loop
}

