function setup() {
	createCanvas(400, 400);
	background(225);
}

function draw() {
	let x = 25;
	let y = 25;
	let size = 50;
	let borderThickness = 1;

	let triangle = false;
	let fill = true;

	(fill ? drawFill : drawBorder)(x, y, size, borderThickness, triangle);
	noLoop();
}

function drawFill(x, y, size, borderThickness, triangle) {
	if (triangle) {
		for (let i = 0; i < size; i++) {
			for (let j = 0; j < i; j++) {
				let offsetX = j - i / 2;
				let offsetY = i * (sqrt(3) / 2);

				let pointX = x + offsetX + size / 2;
				let pointY = y + offsetY;

				point(pointX, pointY);
			}
		}
	} else {
		for (let i = 0; i < size; i++) {
			for (let j = 0; j < size; j++) {
				point(x + i, y + j);
			}
		}
	}
}

function drawBorder(x, y, size, borderThickness, triangle) {
	if (triangle) {
		for (let i = 0; i < size; i++) {
			let offsetX1 = i - size / 2;
			let offsetY1 = size * (Math.sqrt(3) / 2);

			let pointX1 = x + offsetX1 + size / 2;
			let pointY1 = y + offsetY1;

			for (let k = 0; k < borderThickness; k++) {
				point(pointX1 + k, pointY1);
			}

			if (i > 0 && i < size - 1) {
				let offsetX2 = -i / 2;
				let offsetY2 = i * (Math.sqrt(3) / 2);

				let pointX2 = x + offsetX2 + size / 2;
				let pointY2 = y + offsetY2;

				let pointX3 = x - offsetX2 + size / 2;
				let pointY3 = y + offsetY2;

				for (let k = 0; k < borderThickness; k++) {
					point(pointX2 + k, pointY2);
					point(pointX3 - k, pointY3);
				}
			}
		}
	} else {
		for (let i = 0; i < size; i++) {
			for (let t = 0; t < borderThickness; t++) {
				point(x + i, y + t);
				point(x + i, y + size - t - 1);
			}

			if (i < borderThickness || i >= size - borderThickness) {
				for (let j = borderThickness; j < size - borderThickness; j++) {
					point(x + i, y + j);
				}
			}
		}
	}
}