let cant_toner = 0;
let cant_cabezal = 0;
let cant_tinta = 0; 

let N = 0; // TOTAL de unidades

let flag = true;
alert (" TONER -- Ingresar 1 ");
alert (" CABEZAL -- Ingresar 2");
alert (" TINTA -- Ingresar 3 ");

while (flag){
    producto = prompt("Ingresar Producto (salir = 0) : ");
    
    if (producto == 1){
        cant_toner += 1;
    }
    else if (producto == 2){
        cant_cabezal += 1;
    }
    else if (producto == 3){
        cant_tinta += 1;
    }
    else if (producto == 0){
        flag = false;
    }
    else{
        alert("No existe ese producto")
    }
}

// Reporte TOTAL
N = cant_toner + cant_cabezal + cant_tinta;
console.log("Total de TONER : ", cant_toner);
console.log("Total de CABEZAL : ", cant_cabezal);
console.log("Total de TINTA : ",cant_tinta);
console.log("TOTAL DE PRODUCTOS : ", N);

