
class CollectionItem {
	/// number Product element []CollectionItem
	constructor(areaIndex, product, itemCollection, collectionItems, areas, selected, canvas, ctx, scale) {
		this.product = product;
		this.areaIndex = areaIndex;
		this.amount = 1;

		let p = document.createElement("p");
		p.textContent = `${this.product.toString()} (${this.amount}x)`;
		p.onclick = (_) => {
			p.remove();
			const index = collectionItems.indexOf(this);
			if (index !== -1) {
				collectionItems.splice(index, 1);
			}
			let newSelected = collectionItems.length > 0 ? collectionItems[0].areaIndex : -1;
			changeSelected(areas, selected, newSelected, canvas, ctx, scale);
		};
		this.element = p;
		itemCollection.append(p);

		collectionItems.push(this);
	}

	addAmount(v) {
		this.amount += v;
		this.element.textContent = `${this.product.toString()} (${this.amount}x)`;
	}
}
