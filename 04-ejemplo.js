const datos = {
    nombre: 'Alejandro',
    edad: 20,
    ciudad: 'Ocosingo',
    intereses: ['Ia', 'React']
}
//Ocultar propiedades
Object.defineProperty(datos, "edad", {enumerable:false})

/* console.log(Object.keys(datos)) // ['nombre']
console.log(datos) // {nombre: 'Alejandro', edad: 20};
console.log(Object.getOwnPropertyNames(datos)); */

function deepFreeze(obj){
    if(obj === null || typeof obj !== 'Object' || Object.isFrozen(obj)){
        return obj
    }
    const propiedadesObjeto = Object.getOwnPropertyNames(obj)

    for(let nombres of propiedadesObjeto){
        const propiedadHijo = obj[nombres]

        if(propiedadHijo && typeof propiedadHijo === 'object'){
            deepFreeze(propiedadHijo)
        }
    }
    return Object.freeze(obj)
    
}

