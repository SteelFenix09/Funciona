const datos = [
    { titulo: 'React Avanzado', categoria: 'Desarrollo', esGratis: false, tieneCertificado: true },
    { titulo: 'Introducción a UX/UI', categoria: 'Diseño', esGratis: true, tieneCertificado: false },
    { titulo: 'Node.js y MongoDB', categoria: 'Desarrollo', esGratis: true, tieneCertificado: true },
    { titulo: 'Figma para Principiantes', categoria: 'Diseño', esGratis: false, tieneCertificado: false }
]
//reglas
const cusroDesarrollo = datos=>datos.categoria === "Desarrollo"
const cursoCertificado = datos=>datos.tieneCertificado === true

//combinaciones de hechos
const desarrolloAndCertificado = datos => cusroDesarrollo(datos) && cursoCertificado(datos)

//consultas
const resultado = datos.filter(desarrolloAndCertificado)
console.log(resultado);

const datDesarollo = datos.filter(curso => curso.categoria === "Desarrollo" && curso.tieneCertificado === true)
//console.log(datDesarollo);

const datCurso = datos.filter(curso => curso.esGratis === true || curso.categoria === "Diseño")
//console.log(datCurso);

const datCertificado = datos.filter(curso => curso.tieneCertificado === false)
//console.log(datCertificado);

const datCu = datos.filter(curso => curso.categoria === "Desarrollo" && (curso.esGratis === true || curso.tieneCertificado === true))
//console.log(datCu);


const Hechos = [
    { padre: 'Juan', hijo: 'Luis' },
    { padre: 'Juan', hijo: 'Pedro' },
    { padre: 'Abraham', hijo: 'Juan' },
]

const hijo = Hechos.filter(he => he.padre === "Juan").map(he => he.hijo)
//console.log(hijo);    

// RESOLVER: A es abuelo de C si A es padre de B y B es padre de C
const nietos = (abuelo, dato)=>{
    const hijoAbu = dato.filter(he => he.padre === abuelo).map(he => he.hijo)
    return dato.filter(he => hijoAbu.includes(he.padre)).map(he => he.hijo)
}

//console.log(nietos("Abraham", Hechos));



//1
function padre(sujeto, hijo){
    const padre = Hechos.some(he => he.padre === sujeto && he.hijo === hijo)
    return padre
}
//console.log(padre("Abraham", "Juan"));

//2
function padreLu(suj){
    const esPadre = Hechos.filter(he => he.hijo === suj).map(he => he.padre)
    return esPadre
}
//console.log(padreLu("Luis"));

//3
function hijosJu(suj){
    const esPadre = Hechos.filter(he => he.padre === suj).map(he => he.hijo)
    return esPadre
}
//console.log(hijosJu("Juan"));
