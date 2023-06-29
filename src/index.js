// https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5
// https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5

// const e = require("cors");
const btn = document.querySelector("button");

// const cors = require('cors');

// server.use(cors());

async function getExchangeRates(url) {

	const promise = await axios.get(url);
	console.log(promise);
	const {data} = promise;

	return data;
// 	try {
		
// 	// const URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5$';
// 	// const resp = await fetch(`${URL}`);
// 	const resp = await axios.get(url);
// 	// if (!resp.ok) {
// 	// 	throw new Error(resp.statusText);
// 	// }
// 	const {data} = resp;

// 	console.log(data);
// 	return data;
// }catch(e){
// 	console.log(e);
// }
// console.log("end");
}

btn.addEventListener("click", serverLife);

function serverLife(){

console.log("ghbdtn");
async () => {
	
	const res = await getExchangeRates("server.php?currency=now");
	console.log(res);
}


}

// getExchangeRates()

// fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5')
// 	.then((resp) => resp.json())
// 	.then((json) => console.log(json))



// async function fetchExchangeRates() {
// 	const URL = 'https://api.privatbank.ua/p24api/pubinfo?exchange&courseid=5';
// 	const options = {
// 	headers: {
// 		Authority: 'api.privatbank.ua'
// 	}
// 	};
// 	try {
// 	const response = await fetch(URL, options);
// 	const rates = await response.json();
// 	return rates;
// 	} catch (err) {
// 	throw err;
// 	}
// }

// fetchExchangeRates(e).
// then(console.log(e)).
// catch(console.err);