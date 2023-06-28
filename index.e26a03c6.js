!async function(){try{const o="https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5",n=await fetch(`${o}`);if(!n.ok)throw new Error(n.statusText);const t=await n.json();console.log(t)}catch(o){console.log(o)}console.log("end")}();
//# sourceMappingURL=index.e26a03c6.js.map
