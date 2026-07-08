export const palabraClave = (texto) => {
   return ['if', 'for', 'else', 'funcion', 'return'].includes(texto)
}

export const esNumero = (texto) => /^[0-9]+$/.test(texto)

export const esOperador = (texto) => {
    return ['==', '=', '*', '/', '+', '-', '<', '>', '!='].includes(texto)
}

export const esTexto = (texto) => /^[a-zA-Z][a-zA-Z0-9]*$/.test(texto)

export const analizaCodigo =(codigoFuente) => {
    if(!codigoFuente) return [];
    
    const revisor = codigoFuente.match(/[a-zA-Z_][a-zA-Z0-9_]*|[0-9]+|==|[+\-*/<>!]=?/g || []);

    return revisor.map((pieza, index)=>{
        let tipo = 'DESCONOCIDO';
        if(palabraClave(pieza)) tipo="Palabra reservada";
        else if (esNumero(pieza)) tipo="Numero";
        else if (esOperador(pieza)) tipo="Operador";
        else if (esTexto(pieza)) tipo="Identificador";

        return{
            id:index,
            valor:pieza,
            tipo:tipo
        }
    })
}