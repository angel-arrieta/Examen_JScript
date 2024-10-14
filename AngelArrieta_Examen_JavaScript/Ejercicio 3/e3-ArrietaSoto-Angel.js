let listaCompra = []
function showCart(){
    if (listaCompra.length === 0){
        alert("El carro no tiene productos")
    } else{
        let mensaje = "Producto: cantidad\n"
        const cantidadProductos = listaCompra.reduce(
            (prod, value) => prod, value++
        )
        for (i in cantidadProductos){
            mensaje += cantidadProductos[i] + "\n"
        }
        alert(mensaje)
    }
}
function addElement(product){
    if (listaCompra.includes(product)){
        alert("Ya hay " + product + " en el carro")
    }
    alert(product + " añadido")
    listaCompra.push(product)
    showCart()
}

function deleteElement(product){
    if (!listaCompra.includes(product)){
        alert("No hay " + product + " en el carro")
    } else{
        alert(product + " eliminado del carro")
        listaCompra.pop(product)
    }
    showCart()
}

let userInput = ""
let producto = ""

do{
    userInput = prompt("¿Cual accion quiere llevar a cabo con su lista de la compra?:\n'0' - salir\n'1' - añadir producto\n'2' - quitar producto")
    switch (userInput){
        case "0":
            break
        case "1":
            producto = prompt("¿Cual producto quiere añadir?")
            addElement(producto)
        case "2":
            producto = prompt("¿Cual producto quiere retirar?")
            deleteElement(producto)
        default:
            alert("Escoja una opcion valida a realizar")
            showCart()
    }
}
while (userInput != "0")

showCart()