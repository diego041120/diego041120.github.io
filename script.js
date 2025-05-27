document.getElementById("compraForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const cantidad = document.getElementById("cantidad").value;

  const mensaje = `Gracias, ${nombre}. Tu pedido de ${cantidad} detergente(s) ha sido registrado. Nos contactaremos pronto.`;

  document.getElementById("respuesta").textContent = mensaje;

  this.reset();
});
