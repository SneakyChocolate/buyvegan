
/// number number -> number
function round(v, r) {
	return Math.round(v / r) * r;
}

/// canvas ctx Reference<number> number
function render(areas, canvas, ctx, selected, scale) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.lineWidth = 1;

	areas.forEach((rect, index) => {
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
	/// T -> Reference<T>
	constructor(v) {
		this.ref = v;
	}
}

/// Reference<number>, number, canvas, ctx, number
function changeSelected(areas, selected, value, canvas, ctx, scale) {
	selected.ref = value;
	render(areas, canvas, ctx, selected, scale);
}

/// canvas []Area number
function canvasToContent(canvas, areas, scale) {
	let min = getMin(areas);
	let max = getMax(areas);
	let diff = [
		max[0] - min[0],
		max[1] - min[1],
	];
	for (let i = 0; i < areas.length; i ++) {
		areas[i].x -= min[0];
		areas[i].y -= min[1];
	}

	canvas.width = diff[0] * scale;
	canvas.height = diff[1] * scale;
}

/// element []Product
function renderFinderResults(div, products) {
	for (let i = 0; i < products.length; i ++) {
		let product = products[i];
		let p = document.createElement("p");
		p.textContent = product.name;
		div.append(p);
	}
}

function main() {
	const selected = new Reference(0);
	const canvas = document.getElementById("myCanvas");
	const ctx = canvas.getContext("2d");
	const finderInput = document.getElementById("finderInput");
	const finderResults = document.getElementById("finderResults");

	let scale = 0.25;

	canvasToContent(canvas, areas, scale)
	render(areas, canvas, ctx, selected, scale);

	changeSelected(areas, selected, 6, canvas, ctx, scale);
	renderFinderResults(finderResults, areas[selected.ref].products);
}

// last thing that should be executed #######################

main();
