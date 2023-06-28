// https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5
// https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5

async function getExchangeRates() {
	try {
	const URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
	const resp = await fetch(`${URL}`);
	if (!resp.ok) {
		throw new Error(resp.statusText);
	}
	const data = await resp.json();

	console.log(data);
}catch(e){
	console.log(e);
}
console.log("end");
}

getExchangeRates()

// fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5')
// 	.then((resp) => resp.json())
// 	.then((json) => console.log(json))