const electrodomesticosTecnologia = [
    { id:1, nombre: "LAVADORA SAMSUNG CARGA FRONTAL 22KG", precio: 6700000},
    { id:2, nombre: "TELEVISOR OLED LG 85PULGADAS", precio: 12300000},
    { id:3, nombre: "PARLANTE JBL PARTYBOX 310", precio: 2600000},
    { id:4, nombre: "LAPTOP LENOVO CORE I9, 1000 SSD, 16GB RAM", precio: 8750000},
    { id:5, nombre: "CELULAR SAMSUNG GALAXY S23 ULTRA 510GB", precio: 8500000},
    { id:6, nombre: "PARLANTE INALAMBRICO SONY XB43 GRIS", precio: 900000},
    { id:7, nombre: "AUDIFONOS DIADEMA PANASONIC INALAMBRICO AZUL", precio: 500000},
    { id:8, nombre: "NEVECON LG SMART INVERTER 840LITROS NEGRO METALIZADO", precio: 9600000},
    { id:9, nombre: "RELOJ INTELIGENTE SAMSUNG GALAXY WATCH 4", precio: 1300000},
    { id:10, nombre: "GAFAS DE SOL CON AUDIO BOSE FRAME ALTO", precio: 1700000},
]

let shoppingCart = [];

let selection = prompt("Bienvenido a la tienda tecnologica KEVVAS LTDA, Deseas comprar algun electrodomestico ¿si o no?");

while(selection != "si" && selection != "no"){
    alert("Por favor ingrese el si o no")
    seleccionar = prompt("Deseas comprar algun producto: si o no?")
}

if(selection === "si"){

    alert("A continuacion se va mostrar nuestra lista de productos");
    let listaProductos = electrodomesticosTecnologia.map(
        (producto) => producto.id + "." + producto.nombre + " " +  "$" + producto.precio
    );

    alert(listaProductos.join("/"));   

}else if (selection === "no"){

    alert("gracias por venir, hasta luego!!");
}

while(selection != "no"){

    let idProducto = parseInt(prompt("Ingrese el id del producto para agregarlo al carrito"));
    let price = 0;
    let electrodomestico = [];

    if(idProducto === 1 || idProducto === 2 || idProducto === 3 || idProducto === 4 || idProducto === 5 || 
    idProducto === 6 || idProducto === 7 || idProducto === 8 || idProducto === 9 || idProducto === 10){
        
            switch(idProducto){

            case 1:
            electrodomestico = "LAVADORA SAMSUNG CARGA FRONTAL 22KG"
            price = 6700000;
            break;
            
            case 2:
            electrodomestico = "TELEVISOR OLED LG 85PULGADAS"
            price = 12300000;
            break; 

            case 3:
            electrodomestico = "PARLANTE JBL PARTYBOX 310"
            price = 2600000;
            break;
            
            case 4:
            electrodomestico = "LAPTOP LENOVO CORE I9, 1000 SSD, 16GB RAM"
            price = 8750000;
            break; 

            case 5:
            electrodomestico = "CELULAR SAMSUNG GALAXY S23 ULTRA 510GB"
            price = 8500000;
            break;

            case 6:
            electrodomestico = "PARLANTE INALAMBRICO SONY XB43"
            price = 900000;
            break;

            case 7:
            electrodomestico = "AUDIFONOS DIADEMA PANASONIC INALAMBRICO"
            price = 500000;
            break;

            case 8:
            electrodomestico = "NEVECON LG SMART INVERTER 840LITROS"
            price = 9600000;
            break;

            case 9:
            electrodomestico = "RELOJ SAMSUNG GALAXY WATCH 4"
            price = 1300000;
            break;

            case 10:
            electrodomestico = "GAFAS DE SOL CON AUDIO BOSE FRAME ALTO"
            price = 1700000;
            break;

            default:
            break; 
        }

        let units = parseInt(prompt("¿Cuantas unidades quieres agregar al carrito?"));
        shoppingCart.push({idProducto, price, electrodomestico, units})
        console.log(shoppingCart);

    }else{

        alert("¡Este producto no se encuentra en nuestra tienda KEVVAS LTDA!");

    };

    selection = prompt("¿Deseas continuar comprando mas productos de tecnologia?")

    while(selection === "no"){

        shoppingCart.forEach((carritoFinal) => {

            alert(`

            ID: ${carritoFinal.idProducto}
            Producto: ${carritoFinal.electrodomestico} 
            Unidades: ${carritoFinal.units}
            Total a pagar por producto: $${carritoFinal.units * carritoFinal.price}

            `)
        });

        break;
    }
}

const precioTotal = shoppingCart.reduce((acumulador, totalProductos) => acumulador + totalProductos.price * totalProductos.units, 0);
alert(`El total a pagar por su compra en nuestra tienda es: $${precioTotal}`);

