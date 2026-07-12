
class CollectionItem {
	/// number Product element []CollectionItem
	constructor(areaIndex, product, itemCollection, collectionItems) {
		this.product = product;
		this.areaIndex = areaIndex;

		let p = document.createElement("p");
		p.textContent = `${product.toString()}`;
		p.onclick = (_) => {
			p.remove();
			const index = collectionItems.indexOf(this);
			if (index !== -1) {
			  collectionItems.splice(index, 1);
			}
		};
		this.element = p;
		itemCollection.append(p);

		collectionItems.push(this);
	}
}
