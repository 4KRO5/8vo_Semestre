let circulos = [];

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(220);

	for (let i = 0; i < circulos.length; i++) {
		for (let j = i+1; j < circulos.length; j++) {
			circulos[i].colisionar(circulos[j]);
		}
		circulos[i].mover();
		circulos[i].mostrar();
	}
}

function mousePressed() {
	let x = constrain(mouseX, 25, width - 25);
	let y = constrain(mouseY, 25, height - 25);
	circulos.push(new Circulo(x, y, 50));
}

class Circulo {
	constructor(x, y, d) {
		this.x = x;
		this.y = y;
		this.d = d;
		this.xSpeed = random(-2, 2);
		this.ySpeed = random(-2, 2);
	}

	mover() {
		if (this.x - this.d / 2 < 0 || this.x + this.d / 2 > width) {
			this.xSpeed *= -1;
		}
		if (this.y - this.d / 2 < 0 || this.y + this.d / 2 > height) {
			this.ySpeed *= -1;
		}
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}

	mostrar() {
		ellipse(this.x, this.y, this.d);
	}

	colisionar(otroCirculo) {
		let dx = this.x - otroCirculo.x;
		let dy = this.y - otroCirculo.y;
		let distancia = sqrt(dx * dx + dy * dy);

		if (distancia < this.d / 2 + otroCirculo.d / 2) {
			let angulo = atan2(dy, dx);
			let fuerza = 0.5;
			let fuerzaX = cos(angulo) * fuerza;
			let fuerzaY = sin(angulo) * fuerza;

			this.xSpeed += fuerzaX;
			this.ySpeed += fuerzaY;
			otroCirculo.xSpeed -= fuerzaX;
			otroCirculo.ySpeed -= fuerzaY;
		}
	}
}