const objeto = {
    mascota: ['perros', 'gatos', 'canarios', 'pez', 'serpiente'], 
    eliminarMascota: function(tipoMascotaEliminar) {
        const posicion = this.mascota.indexOf(tipoMascotaEliminar)
        posicion === -1 ? console.log('No se encuentra guardada esta mascota') : this.mascota.splice(posicion, 1)
        return this.mascota
    },
    eliminarUltimaMascota: function() {
        this.mascota.pop()
        return this.mascota
    },
    agregarMascota: function(nuevaMacota) {
        this.mascota.push(nuevaMacota)
        return this.mascota
    },
    contadorMascotas: function() {
        let contadorOs = 0
        this.mascota.forEach(animal => {
            if(animal.includes('os')) {
                contadorOs++
            }
        });
        return `En el arreglo hay ${contadorOs} que terminan en 'os'`
    },
}

