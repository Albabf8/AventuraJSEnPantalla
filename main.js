import { showScene } from "./utils.js";  
import { Jugador } from "./modulos/jugador.js";
import { Producto } from "./modulos/producto.js"; 
import { Enemigo, JefeFinal } from "./modulos/enemigo.js";
import { mercado, aplicarDescuentoPorRareza } from "./modulos/mercado.js";
import { batalla } from "./modulos/batalla.js";

let jugador;
const buttonContinuar = document.getElementById('buttonContinue');

function iniciarEscena1() {

    jugador = new Jugador("", "");

    const nombre = jugador.nombre;
    const avatar = jugador.avatar;
    const ataque = jugador.ataqueTotal;
    const defensa = jugador.defensaTotal;
    const vida = jugador.vida;
    const puntos = jugador.puntos;

    document.getElementById('player-avatar').src = avatar;
    document.getElementById('player-name').innerText = nombre;
    document.querySelector('#stat-attack p').innerText = `Ataque: ${ataque}`;
    document.querySelector('#stat-defense p').innerText = `Defensa: ${defensa}`;
    document.querySelector('#stat-health p').innerText = `Vida: ${vida}`;
    document.querySelector('#stat-points p').innerText = `Puntos: ${puntos}`;


    buttonContinuar.addEventListener('click', () => showScene('market'));

    showScene('scene-1');

}

function iniciarEscena2() {

    //Elegimos una rareza al azar: 0=común, 1=raro, 2=épico
    const rarezas = ['común', 'raro', 'épico'];
    const rarezaAfortunada = rarezas[Math.floor(Math.random() * rarezas.length)];

    // Aplicamos un 20% de descuento a esa rareza
    // Esto nos devuelve una NUEVA lista de productos con los precios cambiados
    const productosEnVenta = aplicarDescuentoPorRareza(rarezaAfortunada, 20);

    // Recorremos la lista de productos. 'index' es la posición (0, 1, 2...)
    productosEnVenta.forEach((producto, index) => {
        
        // Buscamos la cajita correspondiente (card-1, card-2, etc.)
        // Sumamos +1 al index porque tus IDs empiezan en 1
        const cardDiv = document.getElementById(`card-${index + 1}`);

        
    


}

iniciarEscena1();
