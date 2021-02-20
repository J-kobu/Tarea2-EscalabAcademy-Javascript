const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicación: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google'],

    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,
}

const datosTrabajador = (worker) => {
    const {
        nombre,
        empresa: {
            datos: {
                nombre : nombreEmpresa,
            }
        }, 
        cargo,
        gustos,
        hijos
    } = worker
    

    return `El trabajaddor ${nombre} trabaja en ${nombreEmpresa} con cargo ${cargo} y le gusta ${gustos}, ${hijos == null ? 'no tiene hijos' : 'tiene hijos'}`
}

const datosTrabajoTrabajador = (worker) => {
    const {
        nombre, 
        empresa: {
            ubicación: {
                comuna, 
                puesto,
            },
            clientes,
        },
        cargo
    } = worker

    return `El trabajador ${nombre} va a su trabajo en ${comuna}, es ${cargo}, en el puesto ${puesto}, trabaja con ${clientes[0]} y ${clientes[1]}`
}