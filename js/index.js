var angle = 0;

function animation() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  var WIDTH = Number(c.getAttribute("width"));
  var HEIGHT = Number(c.getAttribute("height"));
  var delta = 6;
  var radius = 8 * Number(document.getElementById("radCirc").value);
  var rMenor = Number(document.getElementById("radBol").value);
  var angVel = Number(document.getElementById("velAng").value) / 5;
  var colorCirc = document.getElementById("colorCirc").value;
  var colorBol = document.getElementById("colorBol").value;
  var colorFondo = document.getElementById("colorFondo").value;
  var vPh = Number(document.getElementById("faseVert").value);
  var hPh = Number(document.getElementById("faseHoriz").value);
  console.log(
    "R:" +
      radius +
      ", r:" +
      rMenor +
      ",angVel:" +
      angVel +
      ", vert: " +
      vPh +
      ", horiz: " +
      hPh
  );
  var h = 0;
  var k = 0;
  var phase = 0;

  ctx.fillStyle = colorFondo;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  while (h < WIDTH + radius) {
    phase = vPh * h / WIDTH * Math.PI * 2.5;
    while (k < HEIGHT + radius) {
      ctx.beginPath();
      ctx.strokeStyle = colorCirc;
      ctx.arc(h, k, radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(
        h + radius * Math.cos(angVel * angle + phase),
        k + radius * Math.sin(angVel * angle + phase),
        rMenor,
        0,
        2 * Math.PI
      );
      //ctx.fillStyle = '#' + Math.random().toString(16).substring(0, 6);
      //console.log(ctx.fillStyle);
      ctx.fillStyle = colorBol;
      ctx.fill();
      phase += hPh * Math.PI / 8;
      k += radius + delta * 0.5;
    }
    k = 0;
    h += radius + delta * 0.5;
  }
  angle += Math.PI / 18;
}

window.setInterval(animation, 50);