
function importData(collectionItems) {
	navigator.clipboard.readText()
		.then((text) => {
			let parsed = JSON.parse(text);
			console.log(parsed);
		})
		.catch(err => {
			console.error("Failed to copy text: ", err);
		})
	;
}

