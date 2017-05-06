var ballid = 0
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function spawnball() {
  var ball = document.createElement("div");
  ball.id = "ball" + ballid;
  ballid += 1;
  ball.className = "ball";
  ball.style.top = random(1, 1000) + "px";
  ball.style.left = random(1, 1000) + "px";
  document.body.appendChild(ball);
}
