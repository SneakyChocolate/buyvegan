
// TODO reload finder page on import
// TODO see for existing collectionitems first before creating new one
/// []CollectionItem []Area Reference<number> canvas ctx number
function importData(collectionItems, areas, selected, canvas, ctx, scale) {
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

