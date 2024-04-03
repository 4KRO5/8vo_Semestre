function setup() {
	createCanvas(500, 500);
	background(200);
}

function drawLine(x1, y1, x2, y2) {
	let m = (y2 - y1) / (x2 - x1);
	let b = y1 - m * x1;

	for (let x = x1; x <= x2; x++) {
		let y = m * x + b;
		stroke(250, 0, 200);
		point(x, y);
	}
}

function draw() {
	drawLine(50, 50, 350, 100);
	stroke(0, 200, 0);
	line(50, 55, 350, 105)
}