
/// []CollectionItem []Area Reference<number> canvas ctx number fn([]CollectionItem element)
function importData(collectionItems, areas, selected, canvas, ctx, scale, itemCollection, finderResultsDiv, finderInputValue) {
	navigator.clipboard.readText()
		.then((text) => {
			try {
				let parsed = JSON.parse(text);
				console.log(parsed);
				if (parsed.length) {
					parsed.forEach((collectionItemData, i) => {
						let product = null;
						findProducts(areas,
							(name) => name == collectionItemData.product.name,
							(areaIndex, foundProduct) => {
								product = foundProduct;
							}
						);
						if (product) {
							let existingCollectionItem = checkExistingCollectionItem(product, collectionItems);
							if (existingCollectionItem) {
								existingCollectionItem.addAmount(collectionItemData.amount);
							} else {
								new CollectionItem(
									collectionItemData.areaIndex,
									product,
									collectionItems,
									areas,
									selected,
									canvas,
									ctx,
									scale,
									collectionItemData.amount
								);
							}
							// reload collection page on import
							rebuildCollection(collectionItems, itemCollection);
							// reload finder page on import
							renderFinderResults(finderResultsDiv, areas, finderInputValue, collectionItems, itemCollection, selected, canvas, ctx, scale);
						}
						else {
							console.error("product not found for collection item data", collectionItemData);
						}
					});
				} else {
					console.error("wrong import format");
				}
			} catch (e) {
				console.error("Failed to parse import: ", e);
			}
		})
		.catch(err => {
			console.error("Failed to paste text: ", err);
		})
	;
}

