/**
 * Define an object of data
 */
let datos = {
    nombre: '',
    es_real: true
}

/**
 * First question
 */
let preguntaNombre = 'cómo se llama su mascota?'
let nombre = prompt(preguntaNombre)

if (nombre.length < 3) {
    alert('minimo dos letras')
    nombre = prompt(preguntaNombre)
} else {
    alert('hola dueñ@ de '+nombre+'!')
}

/**
 * Update a property to an object
 */
datos.nombre = nombre

/**
 * Second question
 */
let preguntaEdad = 'cuántos años tiene su mascota?'
let edad = Number(prompt(preguntaEdad))

if (isNaN(edad)) {
    alert('debe ingresar un numero')
    edad = prompt(preguntaEdad)
} else {
    if (edad>0 && edad<=5) {
        alert('usted tiene una mascota muy joven!')
    } else if (edad>5 && edad<=10) {
        alert('usted tiene una mascota adulto!')
    } else if (edad>10) {
        alert('usted tiene una mascota muy grande!')
    } else {
        alert('la edad es incorrecta')
    }
}

/**
* Add a property to an object
*/
datos.edad = edad

/**
* Delete a property to an object
*/
delete datos.es_real

/**
 * Define an array of pets
 */
let mascotas = ['pez','gato','loro','conejo','tiburon']
console.log(mascotas);
/**
 * Delete the first pet to the array
 */
mascotas.shift()
/**
 * Delete the last pet to the array
 */
mascotas.pop()
/**
 * Add a pet to the array in the first place
 */
mascotas.unshift('perro')
/**
 * Add a pet to the array in the last place
 */
mascotas.push('tortuga')
/**
 * Get index of a pet
 */
let indexTortuga = mascotas.indexOf('tortuga')
console.log(indexTortuga)
/**
 * Join elements with a string
 */
let animalesUnidos = mascotas.join(' o ')
console.log(animalesUnidos)
/**
 * Check if array includes pet
 */
let check1 = mascotas.includes('tiburon')
let check2 = mascotas.includes('gato')
console.log(check1,check2)

/**
 * Third question
 */
let preguntaMascota = 'qué mascota tiene? \n escriba: '+animalesUnidos
let mascota = prompt(preguntaMascota)

if (mascota == 'perro' 
    || mascota == 'gato' 
    || mascota == 'loro' 
    || mascota == 'conejo' 
    || mascota == 'tortuga'
) {
    alert('usted tiene un '+mascota+'!')
} else {
    alert('no es una mascota valida')
    mascota = prompt(preguntaMascota)
}

/**
* Add a property to an object
*/
datos.mascota = mascota

console.log(datos)
console.log(datos.nombre)
console.log(datos.edad)
console.log(datos.mascota)