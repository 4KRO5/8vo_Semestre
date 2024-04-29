function setup() {
    createCanvas(250, 250);
    background(255);

    const r = 100;
    const xc = width / 2;
    const yc = height / 2;

    drawCircleMidpoint(r, xc, yc);
}

function drawCircleMidpoint(r, xc, yc) {
    for (let x = 0; x <= r / Math.sqrt(2); x++) {
        let y = Math.round(Math.sqrt(r * r - x * x));

        for (let i = -1; i <= 1; i += 2) {
            for (let j = -1; j <= 1; j += 2) {
                point(xc + i * x, yc + j * y);
                point(xc + i * y, yc + j * x);
            }
        }
    }
}