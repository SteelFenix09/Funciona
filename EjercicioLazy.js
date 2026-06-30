/*Ejercicio. 1 combinaciones lazy y programación funcional.*/
const transacciones = Object.freeze([
    { id: 101, tipo: 'deposito', monto: 60000, pais: 'México' },
    { id: 102, tipo: 'retiro', monto: 15000, pais: 'Colombia' },
    { id: 103, tipo: 'retiro', monto: 12000, pais: 'México' },
    { id: 104, tipo: 'retiro', monto: 55000, pais: 'México' },
    { id: 105, tipo: 'deposito', monto: 90000, pais: 'Francia' },
    { id: 106, tipo: 'retiro', monto: 75000, pais: 'Espana' }
])
//Predicad0
const esRetiro = t => t.tipo === 'retiro'
const esMontoSospechoso = t => t.monto >= 50000
const esZonaDeRiesgo = t => t.pais !== 'México'
//Alerta
const alertaFraude = t => esRetiro(t) && (esMontoSospechoso(t) || esZonaDeRiesgo(t))
//Definir la funcion
function* filtrarAlerta(iterable, regla) {
    for (let ojo of iterable) {
        if (regla(ojo)) {
            yield ojo
        }
    }
}
//Definir la consulta
const alertas = filtrarAlerta(transacciones, alertaFraude)

//console.log("Alerta No.1: ",alertas.next().value);
//console.log("Alerta No.2: ",alertas.next().value);

/*Ejercicio 2. Admisión universitaria.*/
 const aspirantes = Object.freeze([
    { nombre: 'Luis', examen: 90, entrevista: 80, estudioSocioeconomico: true },
    { nombre: 'Elena', examen: 70, entrevista: 90, estudioSocioeconomico: true },
    { nombre: 'Pedro', examen: 95, entrevista: 90, estudioSocioeconomico: false },
    { nombre: 'María', examen: 85, entrevista: 95, estudioSocioeconomico: true },
    { nombre: 'Iván', examen: 90, entrevista: 90, estudioSocioeconomico: true }
])


const puntaje = aspirantes.map(t => {
    const puntajeFinal = (t.examen * 0.70) + (t.entrevista * 0.30)
    return Object.freeze({
        ...t,
        puntajeFinal
    }
    )
})
//Definir predicado
const calificaParaBeca = e => e.puntajeFinal >= 85 && e.estudioSocioeconomico === true
//Definir la fncion
function* evaluacion(iteracion, regla) {
    for (let beca of iteracion) {
        if (regla(beca)) {
            yield beca
        }
    }
}

const alumnosBeca = evaluacion(puntaje, calificaParaBeca)
const Becados = [
    alumnosBeca.next().value,
    alumnosBeca.next().value
]
const puntajeFianl = Becados.reduce((a, b) => a + b.puntajeFinal, 0)
const promedio = puntajeFianl / Becados.length

//console.log(`Los becados son ${Becados.map(e=>e.nombre)} con un promedio de puntaje de ${promedio}`    );


/*Ejercicio 3. Optimizador de despacho de inventario.0*/

const paquetes = Object.freeze([
    { tracking: 'ZA1', estado: 'Tabasco', peso: 20 },
    { tracking: 'ZA2', estado: 'Veracruz', peso: 18 },
    { tracking: 'ZA3', estado: 'Chiapas', peso: 5 },
    { tracking: 'ZA4', estado: 'Yucatán', peso: 25 },
    { tracking: 'ZA5', estado: 'Tabasco', peso: 10 },
    { tracking: 'ZA6', estado: 'Oaxaca', peso: 30 }
])

//Definir predicados
const esDestinoLocal = p => p.estado === 'Tabasco'
const esPesado = p => p.peso >= 15
//Regla
const envioPrioritarioLocal = p => !esDestinoLocal(p) && esPesado(p)

function* prioridad (predicado,regla){
    for(let paquete of predicado){
        if(regla(paquete)){
            yield paquete
        }
    }
}
const camionLleno = prioridad(paquetes,envioPrioritarioLocal)
const envios = [
    camionLleno.next().value,    
    camionLleno.next().value,
]

console.log(envios);
