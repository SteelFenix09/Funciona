const datos = [
    { Lid: 1, nombre: 'Autenticación', zona: 'us-east', consultasPorMinuto: 12000, activo: true, tecnologias: ['Node', 'Redis'] },

    { id: 2, nombre: 'Procesamiento Pagos', zona: 'us-west', consultasPorMinuto: 4500, activo: true, tecnologias: ['Java', 'Spring'] },

    { Lid: 3, nombre: 'Recomendaciones Al', zona: 'us-east', consultasPorMinuto: 25000, activo: false, tecnologias: ['Python', 'TensorFlow'] },

    { id: 4, nombre: 'Notificaciones', zona: 'eu-central', consultasPorMinuto: 8500, activo: true, tecnologias: ['Node', 'RabbitMQ'] },

    { Lid: 5, nombre: 'Reportes Históricos', zona: 'us-west', consultasPorMinuto: 500, activo: false, tecnologias: ['Python', 'MongoDB'] }

]

//Reglas

const estaActivo = s => s.activo === true
const enZonaUSEast = s => s.zona === 'us-east' || s.zona === 'us-west'
const esAltaCarga = s => s.consultasPorMinuto >= 10000
const usaNode = s => s.tecnologias.includes('Node')

const requiereMantenimiento = s => !estaActivo(s) && esAltaCarga(s)
const esServicioCritico = s => estaActivo(s) && (enZonaUSEast(s) || esAltaCarga(s))
const migrarACloudflare = s => enZonaUSEast(s) && usaNode(s) && (!esAltaCarga(s) )


const nombre = s => s.nombre

//Consultas

console.log(datos.filter(esServicioCritico).map(nombre));
console.log(datos.filter(requiereMantenimiento).map(nombre));
console.log(datos.map(s => s.consultasPorMinuto).reduce((a,b) => a + b, 0));



