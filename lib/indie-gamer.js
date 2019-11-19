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
