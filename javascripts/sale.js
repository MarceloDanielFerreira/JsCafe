
var productos = [];
function add() {
    var selectElement = document.getElementById('producto');
    var cantidadElement = document.getElementById('cantidad');
    var productoId = selectElement.value;
    var selectedOptionText = selectElement.options[selectElement.selectedIndex].text;
    var parts = selectedOptionText.split('$');
    var nombre = parts[0].trim();
    var precio = parseFloat(parts[1].trim());
    var cantidad = parseInt(cantidadElement.value);

    // Crear un objeto que representa el producto seleccionado
    let productoSeleccionado = {
        id: productoId,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };
    productos.push(productoSeleccionado);
    alert(`${lista()} subtotal= ${subtotal()} $`)

}

function subtotal() {
    var total = 0;
    for (var i = 0; i < productos.length; i++) {
        total += productos[i].precio * productos[i].cantidad;
    }
    return total;
}
function lista() {
    var stringProductos = "";
    for (var i = 0; i < productos.length; i++) {
        var producto = productos[i];
        stringProductos += `${producto.nombre}, $${producto.precio}: ${producto.cantidad} items\n`;
    }
    return stringProductos;
}
function envio(total) {
    if (total >= 3000) {
        return 0;
    } else if (total >= 2000) {
        return 250;
    } else {
        return 500;
    }
}
function calc() {
    var totalProductos = subtotal();
    var costoEnvio = envio(totalProductos);
    var totalPedido = totalProductos + costoEnvio;

    var productosEnCarrito = lista();

    var detallePedido = "Detalle del pedido:\n" +
      "-------------------\n" +
      productosEnCarrito +
      "-------------------\n" +
      "Subtotal: $" + totalProductos + "\n" +
      "Gastos de envío: $" + costoEnvio + "\n" +
      "Total del pedido: $" + totalPedido;

    alert(detallePedido);
  }