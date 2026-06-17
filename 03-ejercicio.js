const datos = [
    { nombre: 'Ana', edad: 25, rol: 'admin', activo: true },
    { nombre: 'Carlos', edad: 17, rol: 'user', activo: true },
    { nombre: 'Beto', edad: 30, rol: 'user', activo: false }
]

//reglas 

const cuentaDesactivada = datos => datos.activo === false
const nombre = datos => datos.nombre

const cuentaActiva = datos => datos.activo === true
const edadMayor = datos => datos.edad > 18

const esAdmin = datos => datos.rol === "admin"
const edadMenor = datos => datos.edad < 18



//combinaciones de hechos

const cuentaActivaYMayor = datos => cuentaActiva(datos) && edadMayor(datos)

const adminYMenor = datos => esAdmin(datos) && edadMenor(datos)

const editar = datos => cuentaActiva(datos) || (esAdmin(datos) || (edadMayor(datos))) 

//consulta

const resultado1 = datos.filter(cuentaDesactivada).map(nombre)
console.log(resultado1);

const resultado2 = datos.filter(cuentaActivaYMayor)
console.log(resultado2);

const resultado3 = datos.filter(adminYMenor)
console.log(resultado3);

const resultado4 = datos.filter(editar)
console.log(resultado4);
