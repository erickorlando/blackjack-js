// const _ = require("./underscore-min");
let deck = [];

const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

const btnNuevo = document.querySelector('#btnNuevo');
const btnDetener = document.querySelector('#btnDetener');
const btnPedirCarta = document.querySelector('#btnPedir');

const divJugador = document.querySelector('#jugador-cartas');
const divComputador = document.querySelector('#computadora-cartas');
const divFooter = document.querySelector('#divFooter');

const puntosHTML = document.querySelectorAll('small');

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

const turnoComputadora = (valorJugador) => {

    do {

        const carta = pedirCarta();

        puntosComputadora += valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divComputador.append(imgCarta);

        if (valorJugador > 21)
            break;

    } while ((puntosComputadora <= valorJugador) && (valorJugador < 21));

    setTimeout(() => {
        if (puntosComputadora === puntosJugador) {
            divFooter.innerText = 'Nadie gana';
        } else if (valorJugador > 21) {
            divFooter.innerText = 'Computadora Gana';
        } else if (puntosComputadora > 21) {
            divFooter.innerText = 'Jugador Gana';
        } else {
            divFooter.innerText = 'Computadora gana';
        }
    }, 100);

}

btnNuevo.addEventListener('click', () => {
    deck = crearDeck();

    console.clear();

    puntosJugador = 0;
    puntosComputadora = 0;
    btnPedirCarta.disabled = false;
    btnDetener.disabled = false;

    puntosHTML[0].innerText = '0';
    puntosHTML[1].innerText = '0';

    divJugador.innerHTML = '';
    divComputador.innerHTML = '';
    divFooter.innerHTML = '';
});

btnPedirCarta.addEventListener('click', () => {
    // debemos pedir una carta, guardar su valor y sumarlo a los puntos del jugador.

    let carta = pedirCarta();

    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divJugador.append(imgCarta);

    if (puntosJugador > 21) {
        // console.warn('Jugador pierde');
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        divFooter.innerText = 'Ganaste!!!';
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
    }

});

btnDetener.addEventListener('click', () => {

    btnPedirCarta.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);
})