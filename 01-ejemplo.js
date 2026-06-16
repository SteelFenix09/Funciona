const hechos = [
    { relacion: "es_humano", sujeto: "juan" },
    { relacion: "es_humano", sujeto: "daniela" },
    { relacion: "estudiante", sujeto: "mario" },
    { relacion: "estudiante", sujeto: "yesi" },
    {relacion: "perro", sujeto: "guapo"}
]

//Programacion imperativa

const nuevoArreglo = []
for(let i=0; i<hechos.length; i++){
    if(hechos[i].relacion === "estudiante"){
        nuevoArreglo.push(hechos[i])
    }
}

//console.log(nuevoArreglo)

//Programacion funcional

const datosEstudiantes = hechos.filter(estudiante => estudiante.relacion === "estudiante")
//console.log(datosEstudiantes)

const datEstudiantes = hechos.find(est => est.relacion === "estudiante")
//console.log(datEstudiantes)

const datEst = hechos.some(es => es.relacion === "estudiante")
//console.log(datEst)

const nuevoDatos = hechos.map( data => data.relacion === "estudiante" ? {...data, relacion: "estudiante"}:data)
//console.log(nuevoDatos)

//Reglas (que hara la funcion)
function EsMortal(sujeto){
    const esHumano = hechos.some(humano => humano.relacion === "es_humano" && humano.sujeto === sujeto)
    return esHumano
}

console.log(EsMortal("juan"));
console.log(EsMortal("guapo"));