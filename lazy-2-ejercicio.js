//Ejercicio 1. Analizador de sensores. 

const lecturasSensor = Object.freeze([
    { id: 1, tempC: 150, estado: "estable" },
    { id: 2, tempC: 850, estado: "estable" },
    { id: 3, tempC: 920, estado: "mantenimiento" },
    { id: 4, tempC: 120, estado: "estable" },
    { id: 5, tempC: 1100, estado: "estable" },
    { id: 6, tempC: 1300, estado: "crítico" }
]); 

// Predicados aromicos
const esCritico = t => t.estado === 'crítico'
const esEstadoCritico = t => t.tempC >= 900

// A Farenheit
const aFarenheit = t => ({ ...t, tempF:(t.tempC * 9/5)+32})


//Composicion
const riesgos = t => esCritico(t) || esEstadoCritico(t)

function* analizarSensores(datos,compo){
    for(const lectura of datos){
        if(compo(lectura)){
            yield aFarenheit(lectura);

        }
    }
}

const procesador = analizarSensores(lecturasSensor,riesgos)
const alerta1 = procesador.next().value
const alerta2 = procesador.next().value

console.log(`Alerta 1: ${alerta1.tempF}°F`);
console.log(`Alerta 2: ${alerta2.tempF}°F`);

// Ejercicio 2. Streaming de vídeo. 

const chunksVideo = Object.freeze([ 
    { n: 1, sizeMb: 4,  codec: "h264" }, 
    { n: 2, sizeMb: 25, codec: "raw" },    
    { n: 3, sizeMb: 12, codec: "h265" }, 
    { n: 4, sizeMb: 40, codec: "raw" },    
    { n: 5, sizeMb: 50, codec: "webm" }   
]);

const esPesado = t => t.sizeMb >= 20;
const optimizado = t => t.codec === 'raw'

const reducirCalidad = t =>({
    ...t,
    sizeMb : t.sizeMb / 2,
    procesado: true
})

const requiereOptimizado = t => esPesado(t) && optimizado(t)

function* procesarVideo(dato, campo){
    for(const chunk of dato){
        if(campo(chunk)){
            yield reducirCalidad(chunk)
        }
    }
}

const procesadorVideo = procesarVideo(chunksVideo, requiereOptimizado)

const chubk1 = procesadorVideo.next().value
const chubk2 = procesadorVideo.next().value

console.log(`Video optimizado -> fragmento N°: ${chubk1.n}, Nuevo Tamaño ${chubk1.sizeMb}`);
console.log(`Video optimizado -> fragmento N°: ${chubk2.n}, Nuevo Tamaño ${chubk2.sizeMb}`);

// Ejercicio 3. Sistema marítimo de carga. 
const aduanaPuerto = Object.freeze([ 
    { manifiesto: "C-01", destino: "Rotterdam", pesoToneladas: 12 },  
    { manifiesto: "C-02", destino: "Tokio",     pesoToneladas: 45 }, 
    { manifiesto: "C-03", destino: "Rotterdam", pesoToneladas: 60 },  
    { manifiesto: "C-04", destino: "Rotterdam", pesoToneladas: 18 },  
    { manifiesto: "C-05", destino: "Lisboa",    pesoToneladas: 22 }   
]);

const esDestino  = c => c.destino === 'Rotterdam'
const esPesoSeguro = c => c.pesoToneladas <= 25

const preparado = c => ({
    ...c,
    estado: "Apto para carga"
})

const esConte = c => esDestino(c) && esPesoSeguro(c)

function* escanearContenedoresLazy(lista, composicion, limite) {
    let encontrados = 0;
    for (const contenedor of lista) {
        if (composicion(contenedor)) {
            yield preparado(contenedor);
            encontrados++;
        }
        if (encontrados === limite) {
            break; 
        }
    }
}

const escaner = escanearContenedoresLazy(aduanaPuerto, esConte, 2)

const selecion = [...escaner]

const pesoTotalCombinado = selecion.reduce((acumulador, actual) => {
    return acumulador + actual.pesoToneladas;
}, 0);

console.log(`\nPeso combinado final de la carga: ${pesoTotalCombinado} Toneladas`);