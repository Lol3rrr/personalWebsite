const c = document.getElementById('dotsCanvas');
let ctx = c.getContext('2d');
let w = window.innerWidth;
let h = window.innerHeight;
let m = {
  x : 0,
  y : 0
};
c.width = w;
c.height = h;

let cdist = 50; //connect distance
let p = [];
let cnt;

function calcCount() {
  cnt = (w / 60) * (h / 60);
}

calcCount();

function updateBackground() {
  let refresh = false;

  w = window.innerWidth;
  h = window.innerHeight;

  if (c.width != w || c.height != h) {
    c.width = w;
    c.height = h;

    calcCount();

    refresh = true;
  }

  if (refresh) {
    clearParticleList();
    fillParticleList();
  }
}

function drawBG(clr) {
  ctx.fillStyle = clr
  ctx.fillRect(0,0,w,h);
}

function fillParticleList() {
  for (var i = 0; i < cnt; i++) {
    p.push(new Particle());
  }
}

function clearParticleList() {
  p = [];
}

function Particle(x , y) {
  this.x = x || Math.random() * w;
  this.y = y || Math.random() * h;
  this.vx = (Math.random() - 0.5) * 0.6;
  this.vy = (Math.random() - 0.5) * 0.6;
  this.rad = 1.5;
  this.color = "#fff"

  this.move = function() {
    this.x += this.vx;
    this.y += this.vy;

    if(this.x > w + this.rad) {
      this.x = 0 - this.rad;
    } else if(this.x < 0 - this.rad) {
      this.x = w + this.rad;
    }

    if(this.y > h + this.rad) {
      this.y = 0 - this.rad;
    } else if(this.y < 0 - this.rad) {
      this.x = h + this.rad;
    }
  }

  this.show = function() {
    ctx.beginPath();
    ctx.arc(this.x , this.y , this.rad , 0 , Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function connectDots(p1 , p2) {
  var dx = p1.x - p2.x;
  var dy = p1.y - p2.y;
  var dist = Math.sqrt(dx * dx + dy * dy);

  if(dist <= cdist) {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(200,201,250,1)";
    ctx.lineWidth = 0.1;
    ctx.moveTo(p1.x , p1.y);
    ctx.lineTo(p2.x , p2.y);
    ctx.stroke();
    ctx.closePath();
  }
}


function loop() {
  updateBackground();

  window.requestAnimationFrame(loop);
  drawBG("#222");
  for(var i = 0; i < p.length; i++) {
    p[i].show();
    p[i].move();

    connectDots(p[i],m);
    for(var j = 0; j < p.length; j++) {
      connectDots(p[i],p[j]);
    }
  }
}

fillParticleList();

loop();
