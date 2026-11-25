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