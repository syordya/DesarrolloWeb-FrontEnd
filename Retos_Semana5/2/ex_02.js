let h_sencilla = 20;
let h_doble = 25;
let h_triple = 28;

let N = prompt("Numero de hamburguesas a comprar : ");

let count_1 = 0 ;
let count_2 = 0 ;
let count_3 = 0 ;

alert("1 -- Hamburguesa Sencilla = $20");
alert("2 -- Hamburguesa Doble    = $25");
alert("3 -- Hamburguesa Triple   = $28");

for(let i =0 ; i<N ; i++){
    let TI = prompt("Ingrese tipo de Hamburguesa : ");

    if (TI == 1){
        count_1 = count_1 + 1;
    }
    else if  (TI == 2) {
        count_2 = count_2 + 1;
    }
    else if (TI == 3) {
        count_3 = count_3 + 1;
    }
    else{
        console.log("No hay esa hamburguesa");
    }
}

let TP = prompt("Pago en EFECTIVO (1) / TARJETA (2)");
if (TP == 1){
    let TO = count_1 * h_sencilla + count_2 * h_doble + count_3 * h_triple;
    TO = TO.toFixed(2)
    console.log("TOTAL : ", TO);
    alert("TOTAL :  ${TO}");
}
else{
    let TO = count_1 * h_sencilla + count_2 * h_doble + count_3 * h_triple;
    let TOT = (TO * 1.05).toFixed(2);
    console.log("TOTAL : ", TOT);
    alert("TOTAL :  ${TOT}");
}


