let L = prompt("Cantidad de Litros de Leche : ");
let P = prompt("Precio por Galon : ");

let TG = L/3.785;
let GA = (TG * P).toFixed(2);

console.log(TG + " galones ");
console.log(GA + " de ganacia ");
