
function round(v, r) {
    return Math.round(v / r) * r;
}

function render(canvas, ctx, selected, scale) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 1;

    rectangles.forEach((rect, index) => {
    	if (selected.ref == index) {
		    ctx.strokeStyle = "rgba(0, 255, 0, 1.0)"; 
		    ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
    	} else {
		    ctx.strokeStyle = "rgba(255, 255, 255, 1.0)"; 
		    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    	}
        ctx.fillRect(
        	rect.x * scale,
        	rect.y * scale,
        	rect.w * scale,
        	rect.h * scale
        );
        ctx.strokeRect(
        	rect.x * scale,
        	rect.y * scale,
        	rect.w * scale,
        	rect.h * scale
        );
    });
}

class Reference {
	constructor(v) {
		this.ref = v;
	}
}

function changeSelected(selected, value, canvas, ctx, selected, scale) {
	selected.ref = value;
	render(canvas, ctx, selected, scale);
}

function main() {
	const selected = new Reference(0);
	const canvas = document.getElementById('myCanvas');
	const ctx = canvas.getContext('2d');
	let scale = 0.2;

	let min = getMin(rectangles);
	let max = getMax(rectangles);
	let diff = [
		max[0] - min[0],
		max[1] - min[1],
	];
	for (let i = 0; i < rectangles.length; i ++) {
		rectangles[i].x -= min[0];
		rectangles[i].y -= min[1];
	}

	canvas.width = diff[0] * scale;
	canvas.height = diff[1] * scale;
	
	render(canvas, ctx, selected, scale);

	changeSelected(selected, 5, canvas, ctx, selected, scale);
	changeSelected(selected, 9, canvas, ctx, selected, scale);
}

// last thing that should be executed #######################

main();
