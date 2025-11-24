import { showScene } from "./script.js";  
import { Jugador } from "./modulos/jugador.js";
import { Producto } from "./modulos/producto.js"; 
import { Enemigo, JefeFinal } from "./modulos/enemigo.js";
import { mercado } from "./modulos/mercado.js";
import { batalla } from "./modulos/batalla.js";

const player = document.getElementById('player');
const market = document.getElementById('market');
const enemies = document.getElementById('enemies');

showScene('player');

player.addEventListener('click', () => showScene('market'));
market.addEventListener('click', () => showScene('enemies'));
enemies.addEventListener('click', () => showScene('enemies'));