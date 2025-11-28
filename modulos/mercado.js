import { Producto } from './producto.js';

export const mercado = [
  new Producto('Gofre Eggo', 'img/gofre.png', 150, 'común', 'consumible', { curacion: 50 }),
  new Producto('Chaqueta de Levis', 'img/chaqueta.png', 250, 'común', 'armadura', { defensa: 5 }),
  new Producto('Bate con Clavos', 'img/bate.png', 300, 'común', 'arma', { ataque: 8 }),
  new Producto('Bicicleta BMX', 'img/bici.png', 600, 'raro', 'consumible', { curacion: 100 }),
  new Producto('Máscara Antigás', 'img/mascara.png', 750, 'raro', 'armadura', { defensa: 10 }),
  new Producto('Linterna de Luz Negra', 'img/linterna.png', 900, 'raro', 'arma', { ataque: 15 }),
  new Producto('Traje HAZMAT', 'img/traje.png', 1500, 'épico', 'armadura', { defensa: 25 }),
  new Producto('Lanza del Azote Mental', 'img/lanza.png', 950, 'épico', 'arma', { ataque: 30 }),
];

export function filtrarPorRareza(rareza) {
  return mercado.filter(producto => producto.rareza === rareza);
}

export function aplicarDescuentoPorRareza(rareza, porcentaje) {
  return mercado.map(producto =>
    producto.rareza === rareza ? producto.aplicarDescuento(porcentaje) : producto
  );
}

export function buscarProducto(nombre) {
  return mercado.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase()) || null;
}
