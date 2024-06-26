function setup() {
	createCanvas(500, 500);
	background(200);
}

function drawLine(x1, y1, x2, y2) {
	let dx = x2 - x1;
	let dy = y2 - y1;
	let steps = Math.max(Math.abs(dx), Math.abs(dy));
	let xIncrement = dx / steps;
	let yIncrement = dy / steps;
	let x = x1;
	let y = y1;
  
	for (let i = 0; i <= steps; i++) {
	  point(x, y);
	  x += xIncrement;
	  y += yIncrement;
	}
  }
  

function draw() {
	drawLine(0, 250, 500, 250);
	drawLine(250, 0, 250, 500);
	drawLine(0, 0, 500, 500);
	drawLine(0, 500, 500, 0);
}