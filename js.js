var ballid = 0
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function spawnball() {
  var ball = document.createElement("div");
  ball.id = "ball" + ballid;
  ballid += 1;
  ball.class = "ball";
  ball.style.top = random(1, 100) + "px";
  ball.style.left = random(1, 100) + "px";
  ball.style.cssText += "background-color: '#FF0000';";
  document.body.appendChild(ball);
  alert(ball.style.cssText);
}
