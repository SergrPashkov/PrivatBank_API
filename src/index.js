// https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5
// https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5

async function getExchangeRates() {
	const URL = 'https://api.privatbank.ua/p24api/pubinfo';
	const resp = await fetch `${URL}`;
	const data = await resp;
	console.log(data);
}

getExchangeRates()

// fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5')
// 	.then((resp) => resp.json())
// 	.then((json) => console.log(json))