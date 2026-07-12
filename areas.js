
class Product {
	/// string bool bool -> Product
	constructor(name, vegan, glutenfree) {
		this.name = name;
		this.vegan = vegan;
		this.glutenfree = glutenfree;
	}

	/// creates a vegan and glutenfree product
	/// string -> Product
	static both(name) {
		return new Product(name, true, true);
	}

	/// creates a vegan product
	/// string -> Product
	static vegan(name) {
		return new Product(name, true, false);
	}

	/// creates a glutenfree product
	/// string -> Product
	static glutenfree(name) {
		return new Product(name, false, true);
	}

	/// creates a vegan and glutenfree product
	/// string -> Product
	static none(name) {
		return new Product(name, false, false);
	}

	toString() {
		let prefix = "";
		if (this.vegan) {
			prefix += "🌱";
		}
		if (this.glutenfree) {
			prefix += "🌾";
		}
		return `${prefix} ${this.name}`;
	}
}

class Area {
	/// number number number number string []Product -> Area
	constructor(x, y, w, h, description, products) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.description = description;
		this.products = products;
	}
}

/// []Area -> [number, number]
function getMin(areas) {
	let x = areas[0].x;
	let y = areas[0].y;
	areas.forEach(r => {
		if (r.x < x) x = r.x;
		if (r.y < y) y = r.y;
	});
	return [x,y];
}

/// []Area -> [number, number]
function getMax(areas) {
	let x = areas[0].x + areas[0].w;
	let y = areas[0].y + areas[0].h;
	areas.forEach(r => {
		if (r.x + r.w > x) x = r.x + r.w;
		if (r.y + r.h > y) y = r.y + r.h;
	});
	return [x,y];
}

let areas = [
	new Area(766, 462, 98, 22, "gebaeck", [
		Product.none("Donuts"),
		Product.vegan("Franzbrötchen"),
		Product.vegan("Laugenbrötchen"),
		Product.none("Baguette"),
		Product.none("Apfeldreieck"),
	]),
	new Area(868, 426, 18, 56, "brot", [
	
	]),
	new Area(888, 406, 58, 18, "smoothies", [
	
	]),
	new Area(948, 404, 54, 22, "kartoffelpuffer", [
	
	]),
	new Area(1000, 406, 62, 20, "vegan", [
		Product.both("Rügenwalder Mühle Leberwurst mit Schnittlauch"),
		Product.both("Rügenwalder Mühle Leberwurst mit Apfel"),
		Product.both("Rügenwalder Mühle Leberwurst fein"),
		Product.vegan("Rügenwalder Mühle Mühlen Crispies Western Style"),
		Product.vegan("Rewe Burger Patties"),
		Product.vegan("Billie Green Schinkenwürfel"),
		Product.both("Simply V Pizzakäse"),
		Product.both("Rewe Hackfleisch"),
		Product.vegan("Rewe Mini Frikadellen"),
		Product.vegan("Lekka Salami Classico"),
		Product.both("Simply V Feta"),
		Product.both("Simply V Scheibenkäse würzig "),
		Product.both("Rewe milde Genuss Scheiben Käse"),
		Product.vegan("Steak"),
		Product.both("Greenforce Wiener"),
		Product.both("Like Gyros"),
		Product.both("Like Döner"),
		Product.vegan("Rügenwalder Mühle Salami"),
		Product.both("Simply V Frischkäse"),
		Product.vegan("Billie Green Snack Salami mit Chilli"),
		Product.vegan("Rewe Räucherlachs"),
		Product.both("Planted Chicken Kräuter und Zitrone"),
		Product.vegan("Rügenwalder Mühle BBQ Filets Paprika"),
		Product.both("Rewe Bio Tempeh"),
		Product.both("Rügenwalder Mühle Mett"),
		Product.vegan("Rügenwalder Mühle Crispies Brezel"),
		Product.both("Rügenwalder Mühle Teewurst fein"),
		Product.vegan("Billie Green Frikadellen"),
		Product.both("Rügenwalder Mühle Fleischsalat Kräuter"),
		Product.vegan("Rügenwalder Mühle Cordon Bleu"),
		Product.vegan("Rügenwalder Mühle Fischstäbchen"),
		Product.both("Rügenwalder Mühle Geschnetzeltes"),
		Product.vegan("Rügenwalder Mühle Schnitzel"),
		Product.vegan("Rügenwalder Mühle Nuggets"),
		Product.vegan("Rügenwalder Mühle Rostbratwürstchen"),
		Product.both("Rewe Bio Quinoa Bites"),
		Product.vegan("Tofu Natur"),
		Product.vegan("Taifun Räuchertofu"),
		Product.vegan("Räuchertofu"),
		Product.both("Creme Vega"),
		Product.glutenfree("Eberswalder Würstchen Vegetarios"),
	
	]),
	new Area(1064, 406, 52, 20, "obst", [
		// Product.both("Apfel"), 
		// Product.both("Himbeere"),
		// Product.both("Bananen"),
		// Product.both("Wassermelone"),
		// Product.both("Nektarinen"),
		// Product.both("Pfirsiche"),
		// Product.both("Kiwi gold"),
		// Product.both("Kiwi grün"),
		// Product.both("Avocado"),
		// Product.both("Grapefruit"),
		// Product.both("Erdbeeren"),
		// Product.both("Ananas"),
		// Product.both("Weintrauben"),
		// Product.both("Physalis"),
		// Product.both("Zitrone"),
		// Product.both("Orangen"),
		// Product.both("Honigmelone"),
		// Product.both("Kirschen"),
		// Product.both("Aprikosen"),
		// Product.both("Birne"),
		// Product.both("Heidelbeeren"),
		// Product.both("Blaubeeren"),
		// Product.both("Passionsfrucht"),
		// Product.both("Mango"),
		// Product.both("Pflaumen"),
		// Product.both("Granatapfel"),
		// Product.both("Papaya"),
		// Product.both("Johannisbeeren"),
		// Product.both("Brombeeren"),
		// Product.both("Limetten"),
		// Product.both("Datteln"),
		// Product.both("Drachenfrucht"),
		// Product.both("Feigen"),
		// Product.both("Kaki"),
		// Product.both("Litschi"),
		// Product.both("Stachelbeeren"),
	
	]),
	new Area(1118, 406, 54, 20, "obst", [
		Product.both("Apfel"), 
		Product.both("Himbeere"),
		Product.both("Bananen"),
		Product.both("Wassermelone"),
		Product.both("Nektarinen"),
		Product.both("Pfirsiche"),
		Product.both("Kiwi gold"),
		Product.both("Kiwi grün"),
		Product.both("Avocado"),
		Product.both("Grapefruit"),
		Product.both("Erdbeeren"),
		Product.both("Ananas"),
		Product.both("Weintrauben"),
		Product.both("Physalis"),
		Product.both("Zitrone"),
		Product.both("Orangen"),
		Product.both("Honigmelone"),
		Product.both("Kirschen"),
		Product.both("Aprikosen"),
		Product.both("Birne"),
		Product.both("Heidelbeeren"),
		Product.both("Blaubeeren"),
		Product.both("Passionsfrucht"),
		Product.both("Mango"),
		Product.both("Pflaumen"),
		Product.both("Granatapfel"),
		Product.both("Papaya"),
		Product.both("Johannisbeeren"),
		Product.both("Brombeeren"),
		Product.both("Limetten"),
		Product.both("Datteln"),
		Product.both("Drachenfrucht"),
		Product.both("Feigen"),
		Product.both("Kaki"),
		Product.both("Litschi"),
		Product.both("Stachelbeeren"),
		
	]),
	new Area(1174, 406, 54, 20, "nuesse", [
		Product.both("Rewe Bio Walnusskerne"),
		Product.both("Seeberger Nusskernmischung"),
		Product.both("Seeberger Mandeln"),
		Product.both("Seeberger Haselnüsse"),
		Product.both("Seeberger Mandeln geröstet"),
		Product.both("Seeberger geprannte Mandeln"),
		Product.both("Seeberger Studentenfutter"),
		Product.both("Seeberger Cashewkerne"),
		Product.both("Seeberger Pinienkerne"),
		Product.both("Rewe Bio Kürbiskerne"),
		Product.both("Seeberger Erdnüsse"),
		Product.both("Seeberger Pistazien"),
	]),
	new Area(930, 454, 20, 56, "sushi", [
	
	]),
	new Area(986, 452, 20, 56, "joghurt", [
	
	]),
	new Area(1048, 452, 22, 58, "tomaten", [
		Product.both("Tomaten"),
		Product.both("Zwiebeln"),
		Product.both("Bundmöhren"),
		Product.both("Möhren"),
		Product.both("Kartoffeln festkochend"),
		Product.both("Lauchzwiebeln"),
		Product.both("Radieschen"),
		Product.both("Zwiebel rot"),
		Product.both("Cherry Tomaten"),
		Product.both("Kartoffeln mehligkochend"),
		Product.both("Kohlrabi"),
		Product.both("Blumenkohl weiß"),
		Product.both("Suppengrün"),
		Product.both("Gurke"),
		Product.both("Eisbergsalat"),
		Product.both("Salat"),
		Product.both("Paprika"),
		Product.both("Spitzpaprika"),
		Product.both("Feldsalat"),
		Product.both("Porree"),
		Product.both("Rucola"),
		Product.both("Pak Choi"),
		Product.both("Fenchel"),
		Product.both("Knoblauch"),
		Product.both("Rettich"),
		Product.both("Rotkohl"),
		Product.both("Zucchini"),
		Product.both("Brokkoli"),
		Product.both("Sellerie"),
		Product.both("Bohnen"),
		Product.both("Schalotten"),
		Product.both("Spinat"),
		Product.both("Weißkohl"),
		Product.both("Rote Beete"),
		Product.both("Mais"),
		Product.both("Süßkartoffel"),
		Product.both("Aubergine"),
		Product.both("Spitzkohl"),
		Product.both("Ingwer"),
		Product.both("Kurkuma"),
		Product.both("Chinakohl"),
		Product.both("Pastinake"),
		Product.both("Romanasalat"),
		Product.both("Kürbis"),
	]),
	new Area(1108, 452, 18, 56, "bananen", [
		Product.both("Apfel"), 
		Product.both("Himbeere"),
		Product.both("Bananen"),
		Product.both("Wassermelone"),
		Product.both("Nektarinen"),
		Product.both("Pfirsiche"),
		Product.both("Kiwi gold"),
		Product.both("Kiwi grün"),
		Product.both("Avocado"),
		Product.both("Grapefruit"),
		Product.both("Erdbeeren"),
		Product.both("Ananas"),
		Product.both("Weintrauben"),
		Product.both("Physalis"),
		Product.both("Zitrone"),
		Product.both("Orangen"),
		Product.both("Honigmelone"),
		Product.both("Kirschen"),
		Product.both("Aprikosen"),
		Product.both("Birne"),
		Product.both("Heidelbeeren"),
		Product.both("Blaubeeren"),
		Product.both("Passionsfrucht"),
		Product.both("Mango"),
		Product.both("Pflaumen"),
		Product.both("Granatapfel"),
		Product.both("Papaya"),
		Product.both("Johannisbeeren"),
		Product.both("Brombeeren"),
		Product.both("Limetten"),
		Product.both("Datteln"),
		Product.both("Drachenfrucht"),
		Product.both("Feigen"),
		Product.both("Kaki"),
		Product.both("Litschi"),
		Product.both("Stachelbeeren"),
	]),
	new Area(1172, 452, 20, 56, "kartoffeln", [
	
	]),
	new Area(894, 536, 56, 20, "planzen", [
	
	]),
	new Area(950, 536, 58, 20, "weissbrot", [
	
	]),
	new Area(1006, 538, 56, 20, "weissbrot", [
	
	]),
	new Area(1066, 538, 56, 20, "kaese", [
		Product.both("Schlagfix Mascarpone"),
	]),
	new Area(1242, 458, 34, 42, "frischeteke", [
	
	]),
	new Area(1348, 458, 20, 56, "grillfleisch", [
	
	]),
	new Area(1408, 456, 22, 56, "bratwurst", [
	
	]),
	new Area(1276, 402, 60, 22, "muesli", [
	
	]),
	new Area(1336, 402, 62, 24, "muesli", [
	
	]),
	new Area(1396, 402, 56, 24, "cornflakes", [
	
	]),
	new Area(1124, 538, 242, 20, "wurst", [
	
	]),
	new Area(1366, 538, 56, 20, "fleisch", [
	
	]),
	new Area(1426, 538, 62, 18, "fleisch", [
	
	]),
	new Area(1486, 404, 54, 154, "fleischteke", [
	
	]),
	new Area(1488, 344, 22, 58, "zaziki", [
	
	]),
	new Area(1276, 376, 60, 26, "tee", [
	
	]),
	new Area(1394, 380, 58, 20, "kafffe", [
	
	]),
	new Area(1336, 378, 60, 24, "tee", [
	
	]),
	new Area(1298, 318, 22, 58, "milch", [
		Product.both("Milch Alpro Not Milk Haferdrink"),
		Product.both("Milch Alpro Barista Hafer"),
		Product.both("Milch Alpro Hafer ohne Zucker"),
		Product.both("Milch Alpro geröstete Mandeln ohne Zucker"),
		Product.both("Milch Alpro Soja Drink Protein"),
		Product.both("Milch Alpro Barista Kokos"),
		Product.both("Milch Alpro Barsita Mandel"),
		Product.both("Milch Oatly Haferdrik Vanille"),
		Product.both("Milch Oatly Barsita Kokos"),
		Product.both("Milch Oatly Barista Hafter Karamell"),
		Product.both("Milch Oatly Hafer Matcha"),
		Product.both("Milch Oatly Barsita Hafer Popcorn"),
		Product.glutenfree("Frei laktosefreie Milch"),
	]),
	new Area(1342, 340, 58, 22, "zimtschnecken", [
	
	]),
	new Area(1402, 340, 56, 22, "chibo", [
	
	]),
	new Area(1400, 318, 58, 20, "backen", [
	
	]),
	new Area(1342, 318, 58, 20, "fillinchen", [
	
	]),
	new Area(1342, 262, 56, 20, "mehl", [
	
	]),
	new Area(1400, 260, 56, 22, "kuchen", [
	
	]),
	new Area(1342, 240, 56, 20, "schokososse", [
	
	]),
	new Area(1400, 240, 58, 20, "marmelade", [
	
	]),
	new Area(1276, 240, 40, 20, "eier", [
		Product.glutenfree("Eier"),
	]),
	new Area(1300, 262, 18, 56, "schlagsahne", [
		Product.both("Schlagfix universele Schlagcreme"),
		Product.both("Schlagfix Sprühfertig Schlagcreme"),
	]),
	new Area(1490, 146, 22, 58, "butter", [
		Product.both("Milram Schmand"),
		Product.both("Rama Margarine"),
		Product.both("Deli Reform Zwiebel Schmalz"),
	]),
	new Area(1488, 86, 24, 58, "grieschischer joghurt", [
	
	]),
	new Area(1432, 66, 56, 20, "joghurt", [
	
	]),
	new Area(1372, 64, 60, 22, "joghurt", [
	
	]),
	new Area(1310, 64, 60, 22, "tiramisu", [
	
	]),
	new Area(1344, 114, 54, 20, "kuehl", [
	
	]),
	new Area(1400, 112, 58, 24, "kuehl", [
	
	]),
	new Area(1344, 152, 52, 22, "kuehl", [
	
	]),
	new Area(1398, 154, 62, 20, "kuehl", [
	
	]),
	new Area(1290, 140, 20, 60, "eingelegtes", [
	
	]),
	new Area(1286, 80, 22, 60, "wein", [
	
	]),
	new Area(1274, 260, 22, 60, "ketchup", [
	
	]),
	new Area(1276, 318, 22, 58, "sossen", [
	
	]),
	new Area(1264, 140, 24, 60, "alkohol", [
	
	]),
	new Area(1262, 80, 24, 60, "alkohol", [
	
	]),
	new Area(1204, 60, 56, 20, "alkohol", [
	
	]),
	new Area(1148, 60, 56, 22, "alkohol", [
	
	]),
	new Area(1206, 100, 20, 100, "alkohol", [
	
	]),
	new Area(1184, 102, 20, 98, "alkohol", [
	
	]),
	new Area(1180, 234, 20, 54, "russisch", [
	
	]),
	new Area(1202, 232, 22, 56, "asia", [
	
	]),
	new Area(1204, 286, 22, 60, "siracha", [
	
	]),
	new Area(1180, 288, 24, 56, "russisch", [
	
	]),
	new Area(1126, 232, 22, 56, "mexico", [
	
	]),
	new Area(1126, 286, 20, 58, "mexico", [
	
	]),
	new Area(1102, 286, 24, 58, "trockenfrucht", [
	
	]),
	new Area(1102, 232, 24, 56, "leinsamen", [
	
	]),
	new Area(1102, 140, 22, 58, "nudeln", [
	
	]),
	new Area(1124, 140, 24, 60, "alokohl", [
	
	]),
	new Area(1126, 82, 20, 56, "alokohl", [
	
	]),
	new Area(1102, 78, 22, 60, "nudeln", [
	
	]),
	new Area(1044, 60, 60, 20, "asia nudeln", [
	
	]),
	new Area(1044, 98, 20, 102, "tomatenmark", [
	
	]),
	new Area(1022, 100, 22, 96, "konserven", [
	
	]),
	new Area(1040, 230, 22, 152, "glutenfrei", [
		Product.both("Rewe Spaghetti Nudeln glutenfrei"),
		Product.both("Rewe Bio Reiswaffeln Zartbitter glutenfrei"),
		Product.both("Schär XL Ciabatte Brot glutenfrei"),
		Product.both("Rewe frei Saatenbrötchen glutenfrei"),
		Product.both("Rewe frei Karottenbrot glutenfrei"),
		Product.both("Rewe Fusilli Nudeln glutenfrei"),
		Product.both("Hammermühle Bauernbrot glutenfrei"),
		Product.both("Schär Landbrot glutenfrei"),
		Product.glutenfree("Rewe frei Mini Brownnies glutenfrei"),
		Product.both("Schär Salzbrezeln glutenfrei"),
		Product.both("Schär Mehrkornbrötchen glutenfrei"),
		Product.both("Schär Sauerteigbrot glutenfrei"),
		Product.both("Schär Mini Baguette glutenfrei"),
		Product.glutenfree("Leimer Paniermehl glutenfrei"),
		Product.both("Schär Knusperbrot glutenfrei"),
		Product.both("Schär Wraps glutenfrei"),
		Product.glutenfree("Schär Waffel Snack glutenfrei"),
		Product.both("Schär Focaccia brot glutenfrei"),
		Product.both("Rewe frei pures Korn Brot glutenfrei"),
		Product.both("Schär Vollkornbrot glutenfrei"),
		Product.glutenfree("Schär Doppelkeks glutenfrei"),
		Product.both("Schär Schoko Cookies glutenfrei"),
		Product.glutenfree("Schär Pitas glutenfrei"),
		Product.glutenfree("Hammermühle Mandeleines Küchlein glutenfrei"),
		Product.glutenfree("Rewe frei Windbeutel glutenfrei"),
		Product.both("Schär Hamburger Brötchen glutenfrei"),
		Product.both("glutenfrei Mehl"),
		Product.both("Weinstein Backpulverglutenfrei"),
		Product.both("Zwieback glutenfrei"),
	]),
	new Area(1062, 380, 56, 24, "oel", [
	
	]),
	new Area(1116, 380, 60, 24, "gewuerze", [
	
	]),
	new Area(1174, 382, 56, 22, "gewuerze", [
	
	]),
	new Area(1018, 230, 20, 152, "gummibaerchen", [
	
	]),
	new Area(946, 382, 72, 20, "milka", [
	
	]),
	new Area(886, 384, 60, 20, "biscoff", [
	
	]),
	new Area(828, 382, 56, 20, "popcorn", [
	
	]),
	new Area(790, 380, 38, 24, "erdnussflips", [
	
	]),
	new Area(768, 230, 24, 152, "chips", [
	
	]),
	new Area(746, 230, 22, 152, "haushalt", [
	
	]),
	new Area(676, 384, 72, 20, "haushalt", [
	
	]),
	new Area(616, 386, 58, 20, "haushalt", [
	
	]),
	new Area(556, 384, 58, 20, "haushalt", [
	
	]),
	new Area(516, 382, 36, 22, "haushalt", [
	
	]),
	new Area(496, 230, 22, 150, "haushalt", [
	
	]),
	new Area(568, 230, 20, 60, "haushalt", [
	
	]),
	new Area(568, 288, 22, 54, "haushalt", [
	
	]),
	new Area(590, 230, 20, 58, "haushalt", [
	
	]),
	new Area(592, 288, 20, 56, "haushalt", [
	
	]),
	new Area(660, 230, 22, 58, "haushalt", [
	
	]),
	new Area(660, 286, 22, 60, "haushalt", [
	
	]),
	new Area(682, 226, 22, 62, "haushalt", [
	
	]),
	new Area(684, 288, 22, 58, "haushalt", [
	
	]),
	new Area(838, 228, 24, 56, "nuesse", [
	
	]),
	new Area(840, 280, 26, 64, "asiasnacks", [
	
	]),
	new Area(862, 230, 24, 54, "pralinen", [
	
	]),
	new Area(864, 282, 22, 62, "pralinen", [
	
	]),
	new Area(932, 232, 20, 56, "pralinen", [
	
	]),
	new Area(934, 286, 20, 60, "pralinen", [
	
	]),
	new Area(956, 230, 20, 58, "ausland suess", [
	
	]),
	new Area(954, 284, 24, 62, "ausland suess", [
	
	]),
	new Area(980, 58, 64, 22, "instant nudeln", [
	
	]),
	new Area(916, 60, 64, 20, "konserven", [
	
	]),
	new Area(856, 60, 58, 18, "konserven", [
	
	]),
	new Area(798, 60, 56, 18, "konserven", [
	
	]),
	new Area(838, 98, 24, 100, "konserven", [
	
	]),
	new Area(864, 98, 22, 100, "konserven", [
	
	]),
	new Area(932, 98, 22, 96, "reis", [
	
	]),
	new Area(954, 98, 20, 98, "konserven", [
	
	]),
	new Area(776, 76, 22, 60, "kichererbsen", [
	
	]),
	new Area(774, 134, 24, 62, "kichererbsen", [
	
	]),
	new Area(740, 78, 32, 60, "hygiene", [
	
	]),
	new Area(738, 138, 32, 60, "hygiene", [
	
	]),
	new Area(686, 58, 56, 20, "hygiene", [
	
	]),
	new Area(632, 58, 52, 20, "hygiene", [
	
	]),
	new Area(570, 58, 60, 20, "hygiene", [
	
	]),
	new Area(588, 96, 22, 100, "hygiene", [
	
	]),
	new Area(608, 98, 22, 98, "hygiene", [
	
	]),
	new Area(664, 98, 24, 100, "hygiene", [
	
	]),
	new Area(686, 98, 24, 104, "hygiene", [
	
	]),
	new Area(528, 100, 22, 96, "brottrunk", [
	
	]),
	new Area(504, 98, 22, 98, "protein", [
	
	]),
	new Area(466, 56, 58, 20, "burgertk", [
	
	]),
	new Area(404, 56, 60, 22, "erbsentk", [
	
	]),
	new Area(350, 56, 52, 22, "fruechtetk", [
	
	]),
	new Area(428, 98, 24, 98, "pizzatk", [
		Product.vegan("Rewe Mini Pizza Pomodori"),
		Product.vegan("Rewe Pizza Tonno"),
		Product.none("TK Pizza"),
	]),
	new Area(406, 98, 22, 98, "pizzatk", [
		Product.vegan("Rewe Mini Pizza Pomodori"),
		Product.vegan("Rewe Pizza Tonno"),
		Product.none("TK Pizza"),
	]),
	new Area(324, 78, 24, 118, "eis", [
		Product.vegan("Rewe Bourbon Vanillee Eis"),
		Product.both("Florida Eis Erdbeere"),
		Product.both("Florida Eis Himbeere"),
		Product.both("Florida Eis Mandarine"),
		Product.vegan("Friends of Asisa Pfirsich Dessert Eis"),
		Product.vegan("Friends of Asisa Zitrone Dessert Eis"),
		Product.both("Langnese Capri Orangenfruchteis"),
		Product.both("Rewe Bio Mango Sorbet"),
		Product.both("Bruno Gelato ACE Eis"),
		Product.both("Little Moons Chocolate Mochi Eis"),
		Product.both("Schokoeis"),
		Product.both("Eis"),
		Product.both("Fruchteis"),
	]),
	new Area(418, 308, 22, 100, "kasse", [
	
	]),
	new Area(354, 308, 22, 100, "kasse", [
	
	]),
	new Area(294, 310, 18, 100, "kasse", [
	
	]),
	new Area(226, 312, 22, 98, "kasse", [
	
	]),
	new Area(302, 76, 20, 118, "saefte", [
		Product.both("Kirsch Bananen Saft"),
		Product.both("hohes C Mildes Frühstück Saft"),
		Product.both("hohes C Multivitamin Saft"),
		Product.both("Orangensaft"),
		Product.both("Apfelsaft"),
		Product.both("Multivitaminsaft"),
		Product.both("Kirschsaft"),
		Product.both("Bananensaft"),
		Product.both("Roter Multivitaminsaft"),
		Product.both("Mangosaft"),
		Product.both("Ananassaft"),
		Product.both("Tomatensaft"),
		Product.both("Eisensaft"),
		Product.both("Blutorangensaft"),
		Product.both("Karottensaft"),
    	Product.both("Capri Sonne"),
		Product.both("Rotbäckchensaft"),
		Product.both("Traubensaft"),
		Product.both("Grapefruitsaft"),
		Product.both("Drachenfruchtsaft"),
		Product.both("Maracujasaft"),
		Product.both("Johannisbeersaft"),
		Product.both("Pfirsichsaft"),
		Product.both("ACE Saft"),
		Product.both("Apfelschorle Saft"),
	]),
	new Area(240, 60, 62, 20, "saefte", [
		Product.both("Kirsch Bananen Saft"),
		Product.both("hohes C Mildes Frühstück Saft"),
		Product.both("hohes C Multivitamin Saft"),
		Product.both("Orangensaft"),
		Product.both("Apfelsaft"),
		Product.both("Multivitaminsaft"),
		Product.both("Kirschsaft"),
		Product.both("Bananensaft"),
		Product.both("Roter Multivitaminsaft"),
		Product.both("Mangosaft"),
		Product.both("Ananassaft"),
		Product.both("Tomatensaft"),
		Product.both("Eisensaft"),
		Product.both("Blutorangensaft"),
		Product.both("Karottensaft"),
    	Product.both("Capri Sonne"),
		Product.both("Rotbäckchensaft"),
		Product.both("Traubensaft"),
		Product.both("Grapefruitsaft"),
		Product.both("Drachenfruchtsaft"),
		Product.both("Maracujasaft"),
		Product.both("Johannisbeersaft"),
		Product.both("Pfirsichsaft"),
		Product.both("ACE Saft"),
		Product.both("Apfelschorle Saft"),
	]),
	new Area(182, 60, 58, 20, "saefte", [
		Product.both("Kirsch Bananen Saft"),
		Product.both("hohes C Mildes Frühstück Saft"),
		Product.both("hohes C Multivitamin Saft"),
		Product.both("Orangensaft"),
		Product.both("Apfelsaft"),
		Product.both("Multivitaminsaft"),
		Product.both("Kirschsaft"),
		Product.both("Bananensaft"),
		Product.both("Roter Multivitaminsaft"),
		Product.both("Mangosaft"),
		Product.both("Ananassaft"),
		Product.both("Tomatensaft"),
		Product.both("Eisensaft"),
		Product.both("Blutorangensaft"),
		Product.both("Karottensaft"),
    	Product.both("Capri Sonne"),
		Product.both("Rotbäckchensaft"),
		Product.both("Traubensaft"),
		Product.both("Grapefruitsaft"),
		Product.both("Drachenfruchtsaft"),
		Product.both("Maracujasaft"),
		Product.both("Johannisbeersaft"),
		Product.both("Pfirsichsaft"),
		Product.both("ACE Saft"),
		Product.both("Apfelschorle Saft"),
	]),
	new Area(122, 58, 56, 22, "wasser", [
		Product.both("Wasser"),
	]),
	new Area(64, 58, 56, 22, "wasser", [
		Product.both("Wasser"),
	]),
	new Area(50, 80, 20, 230, "energy", [
	
	]),
	new Area(96, 108, 56, 20, "cola", [
	
	]),
	new Area(154, 112, 62, 18, "fanta", [
	
	]),
	new Area(214, 112, 56, 20, "sprite", [
	
	]),
	new Area(96, 162, 60, 22, "bier", [
		Product.both("Neumarkter Lammsbräu Bio Bier glutenfrei"),
		Product.both("Bitburger Helles Lager Bier glutenfrei"),
	]),
	new Area(154, 164, 56, 20, "bier", [
		Product.both("Neumarkter Lammsbräu Bio Bier glutenfrei"),
		Product.both("Bitburger Helles Lager Bier glutenfrei"),
	]),
	new Area(212, 164, 58, 22, "bier", [
		Product.both("Neumarkter Lammsbräu Bio Bier glutenfrei"),
		Product.both("Bitburger Helles Lager Bier glutenfrei"),
	]),
	new Area(100, 220, 56, 24, "bier", [
	
	]),
	new Area(156, 220, 60, 24, "bier", [
		Product.both("Neumarkter Lammsbräu Bio Bier glutenfrei"),
		Product.both("Bitburger Helles Lager Bier glutenfrei"),
	]),
	new Area(214, 222, 62, 20, "bier", [
	
	]),
];


