const listaSpesa = [];
let prodotto;

do {
	prodotto = prompt('Inserisci prodotti per lacquisto');
	listaSpesa.push(prodotto);
} while (prodotto != ''  && listaSpesa.length < 10)

if (!listaSpesa[listaSpesa.length - 1]) {
	listaSpesa.pop();
}

const spesa = document.querySelector('.Lista-Spesa');

for (let i = 0; i < listaSpesa.length; i++) {
	spesa.innerHTML += `<li>${listaSpesa[i]}</li>`;
}