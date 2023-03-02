let query = location.search
let params = new URLSearchParams(query)
let nombre = params.get('nombre')
console.log(nombre)

/**
 * @defineDetails define la card de detalle dinámica
 */
function defineDetails(animal) {
    return `
    <div class="card m-2 card-box">
        <img src="./asset/img/index/${animal.foto}" class="card-img-top img-fit" alt="${animal.nombre}">
        <div class="card-body d-flex flex-column align-items-center">
            <h3 class="card-title">${animal.nombre}</h3>
        </div>
    </div>
`
}

function printTemplates(id_etiqueta,animal) {
    let container = document.querySelector(id_etiqueta)
    animal = animales.find(each => each.nombre === nombre)
    let details = defineDetails(animal)
    container.innerHTML = details
}
printTemplates('#pet_container',nombre)