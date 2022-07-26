const catalogoProdu = new CatalogoProdu([])


function inicio() {
    let opcion = ""
    while (opcion !== "S") {

        opcion = prompt(`Seleccione una opcion: 
                        A. Ingresar Producto
                        B. Listar Producto
                        C. Modificar producto
                        D. Buscar un prodcuto por ID
                        E. Vender un producto
                        S. SALIR`).toUpperCase();
        switch (opcion) {
            case "A":
                cargarDatosProductos();
                break;
            case "B":
                listarProducto();
                break;
            case "C":
                modificar();
                break;
            case "D":
                buscar ();
                break;
            case "E":
                vender ();
                break;
            case "S":
                alert("Saludos");
                break;
            default:
                alert("Opcion Inválida")
                break;
        }
    }
}

inicio()


let precioCompra = 0

function vender (){
    venta = prompt(`Ingrese el ID del producto: `)
    catalogoProdu.comprarProducto(venta)
    }


















/*

    esta (producto,venta)
    if (estas == true){
        pos (tipi,sel)
        total = total + tipi[posicion].precio    
    } else{
        alert(`El producto no existe`)
    }

    cobrar(total)
}

*/


/*
function cobrar (monto) {
    alert (`El total a abonar es de ${monto}`)
    let recibo = Number(prompt(`Ingrese el dinero que desea abonar`))
    if (recibo>monto || recibo==monto){
        alert(`Su vuelto es $ ${recibo-monto}`)
    }
    else if (recibo<monto){
        alert(`El dinero recibido es inferior al valor de la compra, restan $ ${monto-recibo}`)
        while (recibo<monto){
            let pedir = Number(prompt(`Ingrese el dinero restante`))
            recibo = recibo + pedir
            alert(`Restan $ ${monto-recibo}`)
        }
        alert(`Su vuelto es $ ${recibo-monto}`)
    }
}
*/

function cargarDatosProductos()
{
    id = prompt("Ingrese el ID: ");
    cate = prompt("Ingrese la categoria: ");
    nombre = prompt("Ingrese el producto: ");
    valor =  prompt("Ingrese Precio: ");
    descri = prompt("Ingrese la Descripción: ");
    cantidad = prompt("Ingrese la cantidad en stock: ");
    let nuevo = new Producto (id, cate, nombre, valor, descri, cantidad)
    catalogoProdu.agregarProd(nuevo)//tiene que ser en el array y no en el constructor
}



function modificar () {
    idmodificar = prompt ("Ingrese el id del prodcuto: ")
    cate = prompt("Ingrese la categoria: ");
    nombre = prompt("Ingrese el producto: ");
    valor =  prompt("Ingrese Precio: ");
    descri = prompt("Ingrese la Descripción: ");
    cantidad = prompt("Ingrese la cantidad en stock: ");
    catalogoProdu.modificarProdu(idmodificar, cate, nombre, valor, descri, cantidad)

    }



function listarProducto() {
    catalogoProdu.listarProdu(catalogoProdu)
}


function buscar () {
    let busca = prompt ("Ingrese el Id del prodcuto a buscar: ")
    catalogoProdu.buscarProdu(busca)
    }


let total = 0
let posicion = 0 
let estas
let sel = 0 





