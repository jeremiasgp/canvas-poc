const IG = function(c, config = {}, ...objects) {
  const interval;
  const cw = c.width;
  const ch = c.height;
  const ctx =  c.getContext('2d');
  const defaults = {
    ms: 50
  }
  config = Object.assign(defaults, config);
  const step = function() {
		clear();
		draw();
	}
	// Parte publica !!!
	this.start = function() {
		interval = setInterval(step, this.config.ms);
	}
	this.stop = function() {
		clearInterval(interval);
	}
}

/**
 * Cada Objeto tiene que tener las siguientes propiedades
 * Posicion inicial.
 * Movimiento.
 * Direccion en el canvas. algo asi como el estado
 * width
 * height
 * comportamiento con el canvas
 * comportamiento con otros objetos
 * Tenemos que generar herencia desde un prototype con los métodos rect circle text
 */


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
  this.state = {
    x,
    y,
    velX,
    velY
  };
  this.draw = o.draw(this);
}
Object.assign(IGO.prototype, IGObject);

const paddle = new IGO({ draw: function(obj){ obj.drawArc(); } });
