
function exportData(collectionItems) {
	let copyText = JSON.stringify(collectionItems);
	navigator.clipboard.writeText(copyText)
		.then(() => {
			console.log("copied text: ", copyText);
		})
		.catch(err => {
			console.error("Failed to copy text: ", err);
		})
	;
}
