//Combinar programacion Lazy con funcionakl
//Defenir los predicados atomicos
const espar = n => n%2 === 0;
const multiploCinco = n => n % 5 ===0;
//Definir funciones
function* filtrarNumero(iterable,predicado){
    for(let dato of iterable){
        if(predicado(dato)){
            yield dato
        }
    }
}

function* generarNumeros(){
    let i = 0
    while(true) yield i ++
}

//Generar los numeros a traves de una variable
const numerosAleatorios = generarNumeros()
const generarPares = filtrarNumero(numerosAleatorios,multiploCinco)

console.log(generarPares.next().value);
console.log(generarPares.next().value);
console.log(generarPares.next().value);
console.log(generarPares.next().value);
