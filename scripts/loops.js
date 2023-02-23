let numeros = [1,2,3,4,5,6,7,8]
console.log(numeros)
console.log(numeros[0]+1)

//for (let i=0; i<=numeros.length-1; i++ )
for (let i=0; i<numeros.length; i+=1) {
    numeros[i] = 3 * numeros[i]
}
//console.log(numeros)

let animales = [
    {nombre: 'gato', foto: 'animal1.png'},
    {nombre: 'perro', foto: 'animal2.png'},
    {nombre: 'tortuga', foto: 'animal3.png'},
    {nombre: 'conejo', foto: 'animal4.png'},
    {nombre: 'loro', foto: 'animal5.png'},
    {nombre: 'tiburón', foto: 'animal6.png'}
]

/**
 * @for_of para iterar un array
 * y armar un array de frases
 */
let frasesDeAnimales = []
for (let animal of animales) {
    let frase ='el animal de la foto es: '+animal.nombre
    //console.log(frase)
    frasesDeAnimales.push(frase)
}
//console.log(frasesDeAnimales)

/**
 * @for_of para iterar un array
 * y armar un array de etiquetas "p"
 */
let parrafosDeAnimales = []
for (let animal of animales) {
    let parrafo ='<p>el animal de la foto es: '+animal.nombre+'</p>'
    //console.log(parrafo)
    parrafosDeAnimales.push(parrafo)
}
//console.log(parrafosDeAnimales)

/**
 * @plantillas_de_javascript - para concatenar HTML+JS
 * las plantillas (templates) se definen con comilla frasesa ``
 * el código HTML se escribe normalmente
 * el código JS se escribe entre ${lo que quieran hacer con JS}
 */
let cardsDeAnimales = []
let numero = 3
let ancho = '20rem'
for (let animal of animales) {
    if (animal.nombre === 'perro' || animal.nombre === 'loro') { /* en amazing events tienen que buscar la condicion necesaria para el filtro por tiempo */
        let card = `
            <div class="card m-2" style="width: ${ancho};">
                <img src="./asset/img/index/${animal.foto}" class="card-img-top img-fit" alt="${animal.nombre}">
                <div class="card-body d-flex flex-column align-items-center">
                    <h${numero} class="card-title">${animal.nombre}</h${numero}>
                    <a href="#" class="btn btn-success">+info</a>
                </div>
            </div>
        `
        console.log(card)
        cardsDeAnimales.push(card)
    }
}

/**
 * @printPets pinta en el DOM las cards
 */
function printPets() {
    let container1 = document.querySelector('#pet_container')  /* trae el elemento con ese id */
    console.log(container1)
    //let box1 = document.getElementById('pet_container') /* trae el elemento con ese id */
    //let container2 = document.querySelector('.pet_container') /* trae la primer etiqueta con esa clase */
    //let box2 = document.getElementsByClassName('pet_container') /* trae todas las etiquetas con esa clase */
    //let container3 = document.querySelector('article') /* trae todos los article */
    //let box3 = document.getElementsByTagName('article') /* trae todos los article */
    container1.innerHTML = cardsDeAnimales.join('')
    return 'se imprimió'
}

printPets()