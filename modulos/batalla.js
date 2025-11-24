import { groupBy } from '../script.js';
/**
 * Módulo de Ranking y Batalla
 * ----------------------------
 * Gestiona el sistema de combate entre jugadores y enemigos,
 * agrupa jugadores según su nivel y muestra el ranking final.
 */

/**
 * Simula una batalla entre un jugador y un enemigo.
 * Si el jugador gana, obtiene puntos según la fuerza del enemigo.
 * @param {Jugador} jugador - Jugador participante.
 * @param {Enemigo} enemigo - Enemigo a combatir.
 * @returns {Object} Resultado con el nombre del ganador y los puntos ganados.
 */
export function batalla(jugador, enemigo) {
  // Copiamos las vidas actuales (sin modificarlas directamente)
  let vidaJugador = jugador.vida;
  let vidaEnemigo = enemigo.vida;

  // Calculamos daño efectivo: ataque - parte de la defensa del rival, con max(1, ...) evitamos que salga negativo (y cure el enemigo al jugador)
  const dmgJugador = jugador.ataqueTotal;
  const dmgEnemigo = Math.max(1, enemigo.ataque - jugador.defensaTotal);

  // Los dos se atacan hasta que uno se quede sin vida
  while (vidaJugador > 0 && vidaEnemigo > 0) {
    vidaEnemigo -= dmgJugador;
    if (vidaEnemigo <= 0) break;
    vidaJugador -= dmgEnemigo;
  }

  // Comprobar si el jugador ganó
  const ganoJugador = vidaJugador > 0 && vidaEnemigo <= 0;
  let puntosGanados = 0;

  if (ganoJugador) {
    // Calcula puntos según el poder del enemigo
    const base = 100 + enemigo.ataque;
    // Si era un jefe, los puntos tendrán bonificación
    const multiplicador = enemigo.tipo === 'jefe'
    ? (enemigo.multiplicador ?? 1.2)
    : 1;
    puntosGanados = Math.round(base * multiplicador);
    jugador.ganarPuntos(puntosGanados);
  }

  // Actualiza la vida final del jugador (mínimo 1)
  jugador.vida = Math.max(1, vidaJugador);

  return {
    ganador: ganoJugador ? jugador.nombre : enemigo.nombre,
    puntosGanados,
  };
}


  /**
 * Agrupa jugadores según su puntuación:
 * - "pro" si superan el umbral.
 * - "rookie" si no lo alcanzan.
 *
 * @param {Array<Jugador>} jugadores - Lista de jugadores.
 * @param {number} [umbral=300] - Puntos mínimos para ser "pro", por defecto 300.
 * @returns {Object} Jugadores agrupados por nivel.
 */
export function agruparPorNivel(jugadores, umbral = 300) {
  return groupBy(jugadores, jugador => (jugador.puntos >= umbral ? 'pro' : 'rookie'));
}

/**
 * Muestra el ranking final de jugadores en consola,
 * ordenados por puntuación de mayor a menor.
 * @param {Array<Jugador>} jugadores - Lista de jugadores.
 */
export function mostrarRanking(jugadores) {
  // Ordena de mayor a menor puntuación
  const ordenados = jugadores.slice().sort((a, b) => b.puntos - a.puntos);

  console.log('🏆 RANKING FINAL 🏆');
  for (const jugador of ordenados) {
    console.log(jugador.mostrarJugador());
  }
}