let fecha = new Date()

//Creación de un nuevo prototipo para la suma de días
Date.prototype.sumarDias = function (días) {
    this.setDate(this.getDate() + días)
    return this;
}

//Creación de un nuevo prototipo para la suma de años
Date.prototype.sumarAnios = function (anios) {
    this.setFullYear(this.getFullYear() + anios)
    return this;
}

console.log(fecha.sumarDias(5))
console.log(fecha.sumarAnios(1))

