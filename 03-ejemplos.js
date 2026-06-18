//Frezze

const nombres = {nombre:"Alejandro", rol:"admin"}
nombres.rol = "user"
//console.log(nombres);

const nombres2 = Object.freeze({nombre:"Alejandro", rol:"admin"})
nombres2.rol = "user"
//console.log(nombres2);

const nombresModificados = {...nombres2, rol:"user"}
console.log(nombresModificados);

