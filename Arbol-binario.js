const historialCommits = [
    { version: 1.0, ambiente: "desarrollo" },
    { version: 1.1, ambiente: "desarrollo" },
    { version: 1.2, ambiente: "testing" },
    { version: 1.3, ambiente: "testing" },
    { version: 2.0, ambiente: "produccion" },
    { version: 2.1, ambiente: "produccion" },
    { version: 2.2, ambiente: "produccion" }
];

// 1. Predicado Atomico
// Funcion flecha que evalua el comit
const esProducto = c => c.ambiente === 'produccion'

// 2. Funcion de busqueda binaria
// Se utiliza parametros por defecto para inicializar la busqueda y mantener el estado inmutable
const busquedaBinaria = (commits, predicado, izquierda = 0, derecha = commits.length - 1, posibleRespuesta = -1) => {
    // Se evalua si el puntero izquierdo supera al derecho, termina la busqueda
    if (izquierda > derecha) {
        return posibleRespuesta
    }
    // Se calcula el punto medio
    const mitad = Math.floor((izquierda + derecha) / 2)
    // Se evalua y se hace la llamada recursiva 
    if (predicado(commits[mitad])) {
        //Si se cumple, la "posible respuesta" actual se vuelve la "mitad"
        //Buscamos a la izquierda (derecha = mitad -1)
        return busquedaBinaria(commits, predicado, izquierda, mitad - 1, mitad)
    } else {
        // Si no se cumple, buscamos a la derecha (izquierda = mitad + 1)
        //Conservando la ultima "posible respuesta" que se haya encontrado
        return busquedaBinaria(commits, predicado, mitad + 1, derecha, posibleRespuesta)
    }
}

// 3. Ejecuacion 
const indicePrimerProducto = busquedaBinaria(historialCommits, esProducto)

if (indicePrimerProducto !== - 1) {
    const commit = historialCommits[indicePrimerProducto]
    console.log("Desplegue funcional encontrado en la version: ", commit.version);
    console.log("Detalles completos del commit: ", commit);

} else {
    console.log("No hay desplieges en productos");

}


/**
 * Calcular el numero maximo de evaluaciones para una busqueda binaria 
 */

function calcularEvaluacion(n) {
    // Math.log2(n) calcula el logaritmo en base 2 del número.
    // Math.ceil() redondea ese resultado hacia arriba al número entero más cercano.
    return Math.ceil(Math.log2(n))
}

const totalCommits = 1000000
const maxEvaluaciones = calcularEvaluacion(totalCommits)
console.log(`Evaluacion maximas requeridas: ${maxEvaluaciones}`);
