/**
 * @defineCard define el template de cada card dinamica
 */
function defineCard(ancho,animal,numero) {
    return `
    <div class="card m-2" style="width: ${ancho};">
        <img src="./asset/img/index/${animal.foto}" class="card-img-top img-fit" alt="${animal.nombre}">
        <div class="card-body d-flex flex-column align-items-center">
            <h${numero} class="card-title">${animal.nombre}</h${numero}>
            <a href="#" class="btn btn-success">+info</a>
        </div>
    </div>
`
}

/**
 * @defineTemplate define el template de cada card dinamica
 */
function defineTemplate(animal) {
    return `
    <div class="card m-2" style="width: '20rem';">
        <img src="./asset/img/index/${animal.foto}" class="card-img-top img-fit" alt="${animal.nombre}">
        <div class="card-body d-flex flex-column align-items-center">
            <h3 class="card-title">${animal.nombre}</h3>
            <a href="#" class="btn btn-success">+info</a>
        </div>
    </div>
`
}