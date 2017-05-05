function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function spawnball() {
  var ball = document.getElementById("ball");
  alert(ball.style.height);
}
