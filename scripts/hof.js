/**
 * @map para transformar un array de objetos en un array de cards
 */
//console.log(animales.map(soloNombres))
function soloNombres(each) { //el parámetro each corresponde a un elemento del array a iterar
    let nombre = each.nombre
    return nombre
}

//console.log(animales.map(nombreConParrafo))
function nombreConParrafo(each) { //el parámetro each corresponde a un elemento del array a iterar
    let nombre = each.nombre
    let template = `<p>${nombre}</p>`
    return template
}

//console.log(animales.map(defineTemplate))
animales.map((each) => defineCard('20rem',each,3))
//console.log(animales.map(each => each.edad_actual))
let frases = animales.map(each => `el animal ${each.nombre} tiene ${each.edad_actual} años`)
//animales = animales.map(each => `el animal ${each.nombre} tiene ${each.edad_actual} años`)
//console.log(frases)
//console.log(animales)

/**
 * @foreach ??? (definir tipos sin repetir)
 */
console.log(animales.forEach(each => each.edad_actual))
let tipos = [] //tipos va a ser el array que va a tener los tipos de animal SIN repetirse
console.log(animales.forEach(each => {
    if ( ! tipos.includes(each.tipo) ) {
        tipos.push(each.tipo)
    }    
}))
console.log(tipos)

/**
 * @find para encontrar el primer animal que cumpla una condicion (nombre => id)
 */
console.log(animales.find(each => each.tipo === "terrestre"))
console.log(animales.find(each => each.edad_actual > 18))

/**
 * @filter para encontrar todos los animales que cumplan una condicion (tipo)
 */
console.log(animales.filter(each => each.tipo === "terrestre"))
console.log(animales.filter(each => each.patas >= 2))

/**
 * @sort para ordenar por nombre
 */

/**
 * @sort para min-max de edad
 */

/**
 * @reduce para sacar el promedio de gasto anual de las mascotas
 */