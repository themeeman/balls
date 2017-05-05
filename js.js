function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function spawnball() {
  var ball = document.getElementById("ball");
  ball.style.top = random(1, 100) + "px";
  ball.style.left = random(1, 100) + "px";
  ball.style.cssText += "background-color: '#FF0000';";
}
