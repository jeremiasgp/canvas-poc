var DvdScreen = function(x, y) {
	const rect = {
		w: 150,
		h: 150
	};
	const pos = {
		x,
		y
	};
	const direction = {
		x: 1,
		y: 1
	};
	const canvas = document.getElementById('canvas_dvd');
	const canvasWidth = canvas.width;
	const canvasHeigt = canvas.height;
	const ctx = canvas.getContext('2d');
	let interval;
	const randomColor = function() {
		return '#'+Math.floor(Math.random()*16777215).toString(16);
	};
	const clear = function() {
		ctx.clearRect(0, 0, canvasWidth, canvasHeigt);
	}
	let color = randomColor();
	const draw = function() {
		ctx.fillStyle = color;
		ctx.fillRect(pos.x, pos.y, rect.w, rect.h);
	}
	const updatePos = function() {
		if (pos.x + direction.x + rect.w > canvasWidth || pos.x + direction.x < 0) {
			direction.x = -direction.x;
			color = randomColor();
		}
		if (pos.y + direction.y + rect.h > canvasHeigt || pos.y + direction.y < 0) {
			direction.y = -direction.y;
			color = randomColor();
		}
		pos.x += direction.x;
		pos.y += direction.y;
	}
	const step = function() {
		clear();
		updatePos();
		draw();
	}
	// Parte publica !!!
	this.start = function() {
		interval = setInterval(step, 50);
	}
	this.stop = function() {
		clearInterval(interval);
	}
}

const dvd = new DvdScreen(10, 10);
dvd.start();
