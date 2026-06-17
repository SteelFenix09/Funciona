const locos = [
    { nombre: 'Luis', historialLimpio: true, ingresosEstables: true },
    { nombre: 'María', historialLimpio: true, ingresosEstables: false },
    { nombre: 'Jorge', historialLimpio: false, ingresosEstables: true }
]

//Reglas

const confiable = loco => loco.historialLimpio === true
const solvente = loco => loco.ingresosEstables === true

const noconfiable = loco => loco.historialLimpio === false
const nosolvente = loco => loco.ingresosEstables === false



//Combinaciones de hechos
const confiableYSolvente = loco => confiable(loco) && solvente(loco)
const confiableONosolvente = loco => noconfiable(loco) || nosolvente(loco)
const riegomedio = loco => solvente(loco) && noconfiable(loco)
const riesgoCritico = loco => nosolvente(loco) && noconfiable(loco)

const esClienteSeguro = loco => !riesgoCritico(loco);


//Consultas
const resultado = locos.filter(confiableYSolvente)
console.log(resultado);

const resultado2 = locos.filter(confiableONosolvente)
console.log(resultado2);

const resultado3 = locos.filter(riegomedio)
console.log(resultado3);

const resultado4 = locos.filter(riesgoCritico)
console.log(resultado4);

const recibeCertificacion = locos.every(esClienteSeguro);
console.log("¿El banco se certifica?:", recibeCertificacion); 

