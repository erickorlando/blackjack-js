// const _ = require("./underscore-min");
let deck = [];

const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const btnNuevo = document.querySelector('#btnNuevo');
const btnDetener = document.querySelector('#btnDetener');
const btnPedirCarta = document.querySelector('#btnPedir');

const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);

    return deck;
};

crearDeck();

const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    return deck.pop();
}

const valorCarta = (carta) => {
    let valor = carta.substr(0, carta.length - 1);
    return isNaN(valor) ? valor === "A" ? 11 : 10 : valor * 1;
}

