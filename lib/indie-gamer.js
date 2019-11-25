const IG = function(c, config = {}, ...objects) {
  const interval = 50;
  const cw = c.width;
  const ch = c.height;
  const ctx =  c.getContext('2d');
  const defaults = {
    ms: 50
  };
  config = Object.assign(defaults, config);
  const clear = function() {
    ctx.clearRect(0, 0, cw, ch);
  };
  const collision = function() {
    for(const obj of objects) {
      obj.borderCollision(cw, ch);
    }
  };
  const draw = function() {
    for(const obj of objects) {
      obj.draw(ctx);
    }
  };
  const step = function() {
    clear();
    collision();
		draw();
	};
	// Parte publica !!!
	this.start = function() {
		interval = setInterval(step, this.config.ms);
	};
	this.stop = function() {
		clearInterval(interval);
	};
}


const IGObject = {
  drawRect: function() {
    //
  },
  drawArc: function(x, y, r, color, ctx){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
  },
  drawText: function() {
    //
  }
};

const IGInteractions = {
  move: function() {
    //
  }
}

const IGO = function(o) {
  Object.assign(this, o);
}
Object.assign(IGO.prototype, IGObject);

const paddle = new IGO(
    {
      draw: (ctx) => { this.drawArc(this.pos.x, this.pos.y, this.r, this.color, ctx); },
      color: '#ffffff',
      r: 20,
      collisionable: true,
      width: 10,
      height: 60,
      pos: { x: 0, y: 40 },
      vel: { x: 0, y: 0 },
      borderCollision: (cw, ch) => {
        if (this.pos.x + this.vel.x + this.width > cw || this.pos.x + this.vel.x < 0) {
          this.vel.x = -this.vel.x;
        }
        if (this.pos.y + this.vel.y + this.height > ch || this.pos.y + this.vel.y < 0) {
          this.vel.y = -this.vel.y;
        }
        this.pos.x += this.vel.x;
		    this.pos.y += this.vel.y;
      },
      kills: '',
      events: {}
    }
  );
