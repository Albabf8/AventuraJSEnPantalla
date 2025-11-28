export class Enemigo {
  tipo;
  nombre;
  avatar;
  ataque;
  vida;

  /**
   * Crea una nueva instancia de Enemigo.
   * @param {string} nombre - Nombre del enemigo.
   * @param {number} ataque - Nivel de ataque del enemigo.
   * @param {number} vida - Puntos de vida del enemigo.
   * @param {string} avatar - URL de la imagen del avatar del enemigo.
   */
  constructor(nombre, ataque, vida, avatar) {
    this.tipo = 'enemigo';
    this.nombre = nombre;
    this.avatar = avatar;
    this.ataque = ataque;
    this.vida = vida;
  }

}

export class JefeFinal extends Enemigo {
  multiplicador;

  /**
   * Crea una nueva instancia de JefeFinal.
   * @param {string} nombre - Nombre del jefe final.
   * @param {number} ataque - Nivel de ataque base del jefe.
   * @param {number} vida - Puntos de vida del jefe.
   * @param {string} habilidadEspecial - Nombre o descripción de su habilidad especial.
   * @param {number} [multiplicador=1.3] - Multiplicador aplicado al ataque o defensa del jefe.
   */
  constructor(nombre, ataque, vida, avatar, multiplicador = 1.2) {
    super(nombre, ataque, vida, avatar);
    this.tipo = 'jefe';
    this.multiplicador = multiplicador;
  }


}