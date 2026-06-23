//1. Ejercicio . Generador de ID únicos para una base de datos.

function* idsGenerador() {
    let contador = 1
    while (true) {
        yield `TEC-2026-${contador}`
        contador++
    }
}
const ids = idsGenerador()
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);

//2. Ejercicio. Paginación infinita, al hacer scroll, se va cargando de 3 en 3.

// --- CÓDIGO INICIAL (A TRANSFORMAR) ---
const dbPosts = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"];


function* elTodoFeedObtener(posts) {
    const post = posts.map(p => `<html>${p}</html>`)
    const resultado = []
    console.log("-> Procesando e indexando todos los posts en el cliente...");
    for (let palbra of post) {
        yield palbra
    }
    return resultado
}

const todoElFeed = elTodoFeedObtener(dbPosts)
console.log(todoElFeed.next().value);
console.log(todoElFeed.next().value);
console.log(todoElFeed.next().value);


//3. Ejercicio. Buscador de errores críticos en logs de un servidor.
// --- CÓDIGO INICIAL (A TRANSFORMAR) ---
const logsServidor = ["200 OK", "200 OK", "500 ERROR", "200 OK", "500 ERROR", "404 NOTFOUND"];


function* todosLosErroresABuscar(logs) {
    const filtrados = logs.filter(log => log.includes("500"))
    const resultado = []
    for (palabra of filtrados) {
        yield palabra
    }
    return resultado
}

const losErrores = todosLosErroresABuscar(logsServidor)

console.log(losErrores.next().value);
console.log(losErrores.next().value);

//4. Generador de la serie de Fibonacci.
// --- CÓDIGO INICIAL (A TRANSFORMAR) ---

function* fibonacciSerie() {
    let actual = 0
    let siguiente = 1

    while (true) {
        yield actual;
        [actual, siguiente] = [siguiente, actual + siguiente]
    }
}

const fibo = fibonacciSerie()
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);

//5. Simulador de carrito de compras: Tienes un lote inmenso de productos y quieres
//aplicarles un IVA o descuento, pero el cliente en caja va pagando uno por uno de forma
//síncrona.

// --- CÓDIGO INICIAL (A TRANSFORMAR) ---
const preciosAlmacen = [100, 200, 300, 400, 500];
function* ivaAplicar (precio){
    const proceso = [];
    for(let precios of precio){
        yield precios * 1.16
    }
    return proceso
}

const ivasAplicados = ivaAplicar(preciosAlmacen)

console.log(ivasAplicados.next().value);
console.log(ivasAplicados.next().value);
console.log(ivasAplicados.next().value);
