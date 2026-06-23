
let contador = 1

function obtenerTurno(){
    const turno = `Turno ${contador}`
    contador ++
    return turno
}

function* obtenerTurnoY(){
    let contador = 1
    while (true) {
        yield `Turno ${contador}`
        contador ++
    }
}
const cajero = obtenerTurnoY()
/* console.log(cajero.next().value);
console.log(cajero.next().value);
console.log(cajero.next().value);
 */
function procesarPalabras(frase){
    const palabras = frase.split(" ")
    const resultado = []
    for(let palabra of palabras){
        console.log(`Procesado completo: ${palabra}`);
        resultado.push(palabra.toUpperCase())
    }
    return resultado
}

/* const palabrasEscritas = procesarPalabras("Programacion con JS")
console.log("Resultado: ", palabrasEscritas[0]); */

function* palabrasProcesadas(frase){
    const palabras = frase.split(" ")
    const resultado = []
    for(let palabra of palabras){
        console.log(`Procesando: ${palabra}`);
        yield palabra.toUpperCase()
    }
    return resultado
}
const palabrasEscritas = palabrasProcesadas("Promacion con JS")
console.log("Resultado: ",palabrasEscritas.next().value);

