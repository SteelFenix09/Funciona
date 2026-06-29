const llenadoTanque = Object.freeze([
    "01-Magna",
    "02-Premium",
    "03-Magna",
    "04-Premium",
    "05-Premium"
])
//Definir la regla o predicado
const esPrimum = id => id.includes("Premium")
//Definir la funcion
function* filtrarTipo(iterado,predicado){
    for(let gasolina of iterado){
        console.log("Analiza el arreglo: ",gasolina);
        if(predicado(gasolina)){
            yield gasolina
        }
    }
}
//Definir la consulta
const bombaCarga = filtrarTipo(llenadoTanque,esPrimum)

console.log("Hola; ", bombaCarga.next().value);
console.log("Hola; ", bombaCarga.next().value);
console.log("Hola; ", bombaCarga.next().value);
console.log("Hola; ", bombaCarga.next().value);



