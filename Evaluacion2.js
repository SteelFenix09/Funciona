function deepFreeze(obj) {
    const propiedadesNombres = Reflect.ownKeys(obj)
    for (const name of propiedadesNombres) {
        const value = obj[name];
        if ((value && typeof value === "object") || typeof value === "function") {
            deepFreeze(value)
        }
    }
    return Object.freeze(obj)
}

//Caso de estudio 1. 
const peticionesHttp = [
    { id: "REQ-01", metodo: "GET", ipOrigen: "192.168.1.50", latenciaMs: 45, tamanioPayloadKb: 2, payload: "SELECT * FROM users" },
    { id: "REQ-02", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 2500, tamanioPayloadKb: 1500, payload: "DROP TABLE users;--" },
    { id: "REQ-03", metodo: "GET", ipOrigen: "192.168.1.55", latenciaMs: 12, tamanioPayloadKb: 1, payload: "ping" },
    { id: "REQ-04", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 1800, tamanioPayloadKb: 950, payload: "normal_profile_update" },
    { id: "REQ-05", metodo: "POST", ipOrigen: "192.168.1.70", latenciaMs: 3100, tamanioPayloadKb: 1200, payload: "upload_heavy_image" },
    { id: "REQ-06", metodo: "GET", ipOrigen: "172.16.25.40", latenciaMs: 50, tamanioPayloadKb: 500, payload: "exec MaliciousScript" }
];

deepFreeze(peticionesHttp)

//Predicados atomicos
const esMetodoEscritura = x => x.metodo === 'POST'
const esLatenciaAlta = x => x.latenciaMs >= 2000
const esPayloadSospechozo = x => x.payload.includes('DROP') || x.payload.includes('SELECT') || x.payload.includes('MaliciousScript')

//Reglas Logicas
const detectarAmenazaPotencial = x => esMetodoEscritura(x) && (esLatenciaAlta(x) || esPayloadSospechozo(x))

//Lazy
function* analizadorSegutidadLazy(flujo, regla) {
    for (let datos of flujo) {
        if (regla(datos)) {
            yield datos
        }
    }
}

const deteccionAmenaza = analizadorSegutidadLazy(peticionesHttp, detectarAmenazaPotencial)

const amenazas = [
    deteccionAmenaza.next().value,
    deteccionAmenaza.next().value
]
const sumapay = amenazas.reduce((valores, incidente) => valores + incidente.tamanioPayloadKb, 0) / amenazas.length

console.log(amenazas);
console.log(`Hay promedio de los incidentes detectados ${sumapay}KB`);


//Caso de estudio 2. 

const ordenesEnvio = [
    { id: "ORD-101", tipo: "estandar", destino: "Tabasco", pesoKg: 4, distanciaKm: 8, asegurado: false },
    { id: "ORD-102", tipo: "express", destino: "Veracruz", pesoKg: 22, distanciaKm: 120, asegurado: true },
    { id: "ORD-103", tipo: "estandar", destino: "Tabasco", pesoKg: 1.5, distanciaKm: 15, asegurado: false },
    { id: "ORD-104", tipo: "express", destino: "Tabasco", pesoKg: 5, distanciaKm: 3, asegurado: false },
    { id: "ORD-105", tipo: "express", destino: "Yucatán", pesoKg: 18, distanciaKm: 250, asegurado: false },
    { id: "ORD-106", tipo: "express", destino: "Chiapas", pesoKg: 35, distanciaKm: 190, asegurado: true }
]; 

deepFreeze(ordenesEnvio)

//Predicados atomicos

const esEnvioExpres = x => x.tipo === 'express'
const esPaquetePesado = x => x.pesoKg  >= 15
const esRutaForanea = x => x.destino !== 'Tabasco'

//Reglas
const esDestinoPrioritario = x => esEnvioExpres(x) && (esPaquetePesado(x) || esRutaForanea(x))

function* despachadorOrdenesLazy(flujo,regla){
    for(let dato of flujo){
        if(regla(dato)){
            yield dato
        }
    }
}

const paqueteCamion = despachadorOrdenesLazy(ordenesEnvio,esDestinoPrioritario)

const destino = [
    paqueteCamion.next().value,
    paqueteCamion.next().value
]
const rutaDespacho = destino.reduce((acumulado, distancia) => acumulado + distancia.distanciaKm, 0 )/destino.length

console.log(`Paquetes prioritarios con destino a ${destino.map(x => x.destino)} con un promedio de un viaje de ${rutaDespacho}Km`);
