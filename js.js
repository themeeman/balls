var ballid = 0
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function spawnball() {
  var size = random(10, 100);
  var ball = document.createElement("div");
  ball.id = "ball" + ballid;
  ballid += 1;
  ball.className = "ball";
  ball.style.top = random(1, window.innerHeight-size) + "px";
  ball.style.left = random(1, window.innerWidth-size) + "px";
  ball.style.backgroundColor = "rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) + ")";
  ball.style.height = size + "px";
  ball.style.width = size + "px";
  document.body.appendChild(ball);
  removeballs();
}
function removeballs() {
  var balls = document.getElementsByClassName("ball");
  for (var i = 0; i < balls.length; i++) {
    var x = parseInt(balls[i].style.left);
    var y = parseInt(balls[i].style.top);
    alert(x);
    alert(y);
    if (y > window.innerHeight || x > window.innerWidth) {
      var elem = document.getElementById("ball" + i);
      elem.parentNode.removeChild(elem);
      alert(elem.id);
    }
  }
}
