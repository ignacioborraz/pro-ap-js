//definir la ruta dinamica
//capturan ese dato dinamico
let query = location.search
//console.log(query)
let params = new URLSearchParams(query)
//console.log(params)
let patas_query = params.get('patas')
//console.log(patas_query)
let tipo_query = params.get('tipo')
//console.log(tipo_query)
let nombre_query = params.get('nombre')
console.log(nombre_query)
//buscan con find ese animal en el array
//renderizan correctamente la pagina de detalle de ese animal

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

function printTemplates(id_etiqueta,animal,array_animales) {
    let container = document.querySelector(id_etiqueta)
    animal = array_animales.find(each => each.nombre === animal)
    //animal = array_animales.filter(each => each.nombre === animal)[0]
    let details = defineDetails(animal)
    container.innerHTML = details //en este caso no es necesario el join() porque no es un array (directamente es un string)
}
printTemplates('#pet_container',nombre_query,animales)