class DataSource {
	getPrices() {
		return new Promise(async (resolve, reject) => {
			try {
				let result = [];
				const res = await fetch("https://static.ngnrs.io/test/prices");
				const json = await res.json();
				json.data.prices.forEach((element) => {
					result.push({
						pair: element.pair,
						mid: () => (element.buy + element.sell) / 200,
						quote: () => element.pair.slice(-3),
					});
				});
				resolve(result);
			} catch (error) {
				reject(error);
			}
		});
	}
}
