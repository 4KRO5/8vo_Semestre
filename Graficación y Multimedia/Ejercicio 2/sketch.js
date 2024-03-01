function setup() {
	createCanvas(400, 400);
}

function draw() {
	let x = 45;
	let y = 45;
	let size = (x + y)/2;
	let color = true;

	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			noStroke();
			color ? fill(255) : fill(0);
			rect(x * i, y * j, size);
			color = !color;
		}
		color = !color;
	}
	noLoop();
}