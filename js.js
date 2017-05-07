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
  var pos = [];
  alert("Height " + window.innerHeight + " Width " + window.innerWidth);
  for (var i = 0; i < balls.length; i++) {
    pos.push([balls[i].style.left, balls[i].style.top]);
  }
  alert(pos);
  for (var i = 0; i < pos.length; i++) {
    var x = parseInt(pos[i][0]);
    var y = parseInt(pos[i][1]);
    if (y > window.innerHeight || x > window.innerWidth) {
      var elem = document.getElementById(balls[i].id);
      elem.parentNode.removeChild(elem);
      alert(balls.length);
      
    }
  }
}
