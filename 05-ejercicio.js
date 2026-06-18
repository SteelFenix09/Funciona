const dinero = [
    { id: 1, tipo: 'deposito', monto: 10000 },
    { id: 2, tipo: 'retiro', monto: 6000 },
    { id: 3, tipo: 'retiro', monto: 1500 },
    { id: 4, tipo: 'retiro', monto: 8000 },
]

//Reglas
const montoAlto = d => d.monto > 5000
const retiro = d => d.tipo === 'retiro'
const multa = d => d.monto * 0.05


// Fucionados
const retiroAlto = d => montoAlto(d) && retiro(d)
const penalizacion = (total, multa) => total + multa

// Consultas

// solo manda penalizacion
/* const resultado = dinero
.filter(retiroAlto)
.map(multa)
.reduce(penalizacion, 0)

console.log(resultado); */


const resultado = dinero.filter(retiroAlto)
const resultadoMulta = resultado.map(multa)
const resultadoPenalizacion = resultadoMulta.reduce(penalizacion,0)

console.log(resultado);
console.log(resultadoMulta);
console.log(resultadoPenalizacion);