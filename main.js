
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
			ctx.strokeStyle = "rgba(0, 0, 0, 1.0)"; 
			ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
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

/// []Area (fn(string) -> bool) fn(number, Product)
function findProducts(areas, filterFn, fn) {
	for (let i = 0; i < areas.length; i ++) {
		let area = areas[i];
		for (let i2 = 0; i2 < area.products.length; i2 ++) {
			let product = area.products[i2];
			if (filterFn(product.name)) {
				fn(i, product);
			}
		}
	}
}

/// element []Area string
function renderFinderResults(div, areas, filter, collectionItems, itemCollection, selected, canvas, ctx, scale) {
	div.replaceChildren();
	let filterFn = (name) => {
		let simplifiedName = name
			.toLowerCase()
			.replaceAll("ä", "ae")
			.replaceAll("ö", "oe")
			.replaceAll("ü", "ue")
			.replaceAll("ß", "ss")
			.replaceAll(" ", "")
		;
		let simplifiedFilter = filter
			.toLowerCase()
			.replaceAll("ä", "ae")
			.replaceAll("ö", "oe")
			.replaceAll("ü", "ue")
			.replaceAll("ß", "ss")
			.replaceAll(" ", "")
		;
		return simplifiedName.includes(simplifiedFilter);
	};
	/// Product []CollectionItem -> CollectionItem
	let checkExistingCollectionItem = (product, collectionItems) => {
		let existingCollectionItem = null;
		collectionItems.forEach((collectionItem) => {
			if (collectionItem.product === product) {
				existingCollectionItem = collectionItem;
			}
		});
		return existingCollectionItem;
	};
	let renderFn = (i, product) => {
		let p = document.createElement("p");
		let existingCollectionItem = checkExistingCollectionItem(product, collectionItems);
		let amount = existingCollectionItem !== null ? existingCollectionItem.amount : 0;
		p.textContent = `${product.toString()} (${amount}x)`;
		p.onclick = (_) => {
			let existingCollectionItem = checkExistingCollectionItem(product, collectionItems);
			if (existingCollectionItem !== null) {
				existingCollectionItem.addAmount(1);
			} else {
				existingCollectionItem = new CollectionItem(i, product, collectionItems, areas, selected, canvas, ctx, scale);
			}
			p.textContent = `${product.toString()} (${existingCollectionItem.amount}x)`;
		};
		div.append(p);
	};
	findProducts(areas, filterFn, renderFn);
}

function main() {
	const selected = new Reference(0);
	const canvas = document.getElementById("myCanvas");
	const ctx = canvas.getContext("2d");
	const finderGroup = document.getElementById("finder");
	const finderInput = document.getElementById("finderInput");
	const finderResultsDiv = document.getElementById("finderResults");
	const collectionGroup = document.getElementById("collection");
	const itemCollection = document.getElementById("itemCollection");
	const selectionGroup = document.getElementById("selection");

	const collectionItems = [];

	let scale = 0.25;

	canvasToContent(canvas, areas, scale)
	render(areas, canvas, ctx, selected, scale);

	changeSelected(areas, selected, 35, canvas, ctx, scale);
	renderFinderResults(finderResultsDiv, areas, finderInput.value, collectionItems, itemCollection, selected, canvas, ctx, scale);

	document.getElementById("inc").onclick = () => {
		selected.ref += 1;
		render(areas, canvas, ctx, selected, scale);
		console.log(areas[selected.ref].description);
	};
	finderInput.oninput = (_) => {
		renderFinderResults(finderResultsDiv, areas, finderInput.value, collectionItems, itemCollection, selected, canvas, ctx, scale);
	};

	selectionGroup.children[0].onclick = (_) => {
		finderGroup.style.display = 'block';
		collectionGroup.style.display = 'none';
		renderFinderResults(finderResultsDiv, areas, finderInput.value, collectionItems, itemCollection, selected, canvas, ctx, scale);
	};
	selectionGroup.children[1].onclick = (_) => {
		finderGroup.style.display = 'none';
		collectionGroup.style.display = 'block';
		let index = collectionItems.length > 0 ? collectionItems[0].areaIndex : -1;
		changeSelected(areas, selected, index, canvas, ctx, scale);

		// sort the collectionItems and rebuild the collection tab
		collectionItems.sort((a, b) => {
			return a.areaIndex - b.areaIndex;
		});
		itemCollection.replaceChildren();
		collectionItems.forEach(c => {
			itemCollection.append(c.element);
		});
	};
}

// last thing that should be executed #######################

main();
