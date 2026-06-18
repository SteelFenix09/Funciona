const datos = [
    { titulo: 'React Avanzado', categoria: 'Desarrollo', esGratis: false, tieneCertificado: true },
    { titulo: 'Introducción a UX/UI', categoria: 'Diseño', esGratis: true, tieneCertificado: false },
    { titulo: 'Node.js y MongoDB', categoria: 'Desarrollo', esGratis: true, tieneCertificado: true },
    { titulo: 'Figma para Principiantes', categoria: 'Diseño', esGratis: false, tieneCertificado: false }
]
//reglas
const esDesarrollo = r => r.categoria === 'Desarrollo'
const conCertificado = r => r.tieneCertificado === true
const esGratis = r => r.esGratis === true
const esDiseño = r => r.categoria === 'Diseño'
const sinCertificado = r => r.tieneCertificado === false

//combinacion

const DesarrolloCertificado = r => esDesarrollo(r) && conCertificado(r)
const gratisODiseño = r => esGratis(r) || esDiseño(r)
const cursoSinCertificado = r => sinCertificado(r)
const cursoDesarrollo = r => esDesarrollo(r) && (conCertificado(r) || esGratis(r))

//Consultas

//console.log(datos.filter(DesarrolloCertificado));
//console.log(datos.filter(gratisODiseño));
//console.log(datos.filter(cursoSinCertificado));
//console.log(datos.filter(cursoDesarrollo));


const Hechos = [
    { padre: 'Juan', hijo: 'Luis' },
    { padre: 'Juan', hijo: 'Pedro' },
    { padre: 'Abraham', hijo: 'Juan' },
]

//reglas

const hijos = (a,b) => b.filter(h => h.padre === a).map(h => h.hijo)
const nietos = (a,b) => hijos(a,b).flatMap(r => hijos(r, b))



console.log(hijos('Juan', Hechos));

console.log(nietos('Abraham', Hechos));

