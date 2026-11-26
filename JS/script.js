const precio = 15000;
const cantidad = 3;
const stock = 5;
const cupon = "VERANO";

if (cantidad > stock) {
  console.log("No hay stock suficiente");
} else {
  var subtotal = precio * cantidad;
  console.log(`El subtotal es: ${subtotal} Soles`);
}

// Descuento por cantidad
// subtotal = 75000;
if (cantidad >= 3) {
  subtotal = subtotal * 0.9;
  console.log(`El total con descuento es: ${subtotal} Soles`);
}

// Cupón
if (cupon === "VERANO") {
  subtotal = subtotal - 2000;
}
console.log(`El total con cupón es: ${subtotal} Soles`);

const envio = subtotal >= 50000 ? 0 : 3500;
const total = subtotal + envio;

console.log(`Subtotal: $${subtotal}`);
console.log(`Envío: ${envio === 0 ? "gratis" : "$" + envio}`);
console.log(`Total: $${total}`);

const IVA = 0.21;
const conIva = (precio) => precio * (1 + IVA);
const productos = [
  {
    id: 1,
    nombre: "Zapatillas Urbanas",
    precio: 25000,
    stock: 8,
    categoria: "Calzado",
  },
  {
    id: 2,
    nombre: "Remera Básica",
    precio: 9000,
    stock: 20,
    categoria: "Ropa",
  },
  {
    id: 3,
    nombre: "Mochila",
    precio: 18000,
    stock: 0,
    categoria: "Accesorios",
  },
  { id: 4, 
    nombre: "Gorra", 
    precio: 6500, 
    stock: 15, 
    categoria: "Accesorios" 
  },
];
const disponibles = productos.filter((p) => p.stock > 0);
disponibles.forEach((p) => {
  console.log(`${p.nombre} - $${conIva(p.precio)} (stock: ${p.stock})`);
});
const accesorios = productos.filter((p) => p.categoria === "Accesorios");
console.log(
  "Accesorios:",
  accesorios.map((p) => p.nombre),
);
