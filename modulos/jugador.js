
export class Jugador {
  nombre;
  avatar;
  puntos;
  inventario;
  vidaMaxima;
  vida;

  /**
   * Crea una nueva instancia de Jugador.
   * @param {string} nombre - Nombre del jugador.
   * @param {string} avatar - URL de la imagen del avatar del jugador.
   */
  constructor(nombre, avatar) {
    this.nombre = nombre;
    this.avatar = avatar;
    this.puntos = 0;
    this.inventario = [];
    this.vidaMaxima = 100;
    this.vida = this.vidaMaxima;
  }

  /**
   * Añade un objeto al inventario del jugador.
   * Se utiliza `structuredClone` para evitar modificar el objeto original.
   * @param {Object} item - Objeto que se añadirá al inventario.
   */
  añadirItem(item) {
    this.inventario.push(structuredClone(item));
  }

  /**
   * Incrementa los puntos del jugador.
   * @param {number} cantidad - Cantidad de puntos a añadir.
   */
  ganarPuntos(cantidad) {
    this.puntos += cantidad;
  }

  /**
   * Calcula el total de ataque del jugador basado en los bonus de sus ítems.
   * @returns {number} Puntos de ataque totales.
   */
  get ataqueTotal() {
    let ataque = 0;
        // Recorremos el inventario
        for (let item of this.inventario) {
            // Los productos de tipo arma sumarán el bonus al ataque
            if (item.tipo === "arma") {
                ataque += item.bonus; // Sumamos el número
            }
        }
        return ataque;
  }

  /**
   * Calcula el total de defensa del jugador basado en los bonus de sus ítems.
   * @returns {number} Puntos de defensa totales.
   */
  get defensaTotal() {
    let defensa = 0;
        for (let item of this.inventario) {
            // Los productos de tipo armadura sumarán el bonus a la defensa
            if (item.tipo === "armadura") {
                defensa += item.bonus;
            }
        }
        return defensa;
  }

  /**
   * Calcula el total de vida del jugador basado en los bonus de sus ítems.
   * @returns {number} Puntos de vida totales.
   */
  get vidaTotal() {
    let vidaExtra = 0;
        for (let item of this.inventario) {
            // Los productos de tipo consumible sumarán el bonus a la vida
            if (item.tipo === "Consumible") {
                vidaExtra += item.bonus;
            }
        }
        // La vida total es la base (100) más lo que den los objetos
        return this.vidaMaxima + vidaExtra;
  }

}