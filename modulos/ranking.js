export function clasificarJugador(jugador, umbral = 500) {
    
    // Si el jugador lo supera, será un 'Veterano'
    if (jugador.puntos > umbral) {
        return "Veterano";
    } 
    // En caso contrario, un 'Novato'
    else {
        return "Novato";
    }
}