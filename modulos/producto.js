
export class Producto {

  /**
   * Crea una nueva instancia de Producto.
   * @param {string} nombre - Nombre del producto.
   * @param {number} precio - Precio base del producto.
   * @param {string} rareza - Nivel de rareza (por ejemplo: "común", "raro", "épico").
   * @param {string} tipo - Tipo de producto (por ejemplo: "arma", "poción", "armadura").
   * @param {number} bonus - Bonus de ataque, defensa o curación.
   */
  constructor(nombre, imagen, precio, rareza, tipo, bonus) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
    this.rareza = rareza;
    this.tipo = tipo; // "Arma", "Armadura", "Consumible"
    this.bonus = bonus;

  }

  /**
   * Devuelve una representación en texto del producto.
   * @returns {string} Descripción del producto.
   */
  obtenerPrecioFormateado() {
    // Dividimos entre 100 y fijamos 2 decimales
    const euros = (this.precio / 100).toFixed(2);
    return euros.replace('.', ',') + '€';
  }

  /**
   * Aplica un descuento al producto y devuelve una nueva instancia con el precio actualizado.
   * @param {number} porcentaje - Porcentaje de descuento (0–100).
   * @returns {Producto} Un nuevo producto con el precio reducido.
   */
  aplicarDescuento(porcentaje) {
    // Limita el porcentaje entre 0 y 100
    if (porcentaje < 0) porcentaje = 0;
    if (porcentaje > 100) porcentaje = 100;

    // Calcula el nuevo precio (Ejemplo: 200 * (1 - 0.25))
    const nuevoPrecio = Math.round(this.precio * (1 - porcentaje / 100));

    return new Producto(this.nombre, this.imagen, nuevoPrecio, this.rareza, this.tipo, this.bonus);
  }
}