let nombre = prompt('inserte su nombre')
console.log(typeof nombre) //este método del navegador sirve para imprimir en la consola del navegador (en este caso) una variable
console.log('este bootcamp es de AP+MH')
//console.log(apellido) //apellido no existe y detiene la ejecucion del codigo que le continua

let edad = Number( prompt('inserte su edad') )
//NaN es un error que significa Not A Number
let otraEdad = 32
console.log(edad)
console.log(typeof edad)
//console.log(typeof otraEdad)
//console.log(otraEdad)

let mayorDeEdad = true
let miSobrinita = false
console.log(mayorDeEdad)
console.log(typeof mayorDeEdad)

let algoVacio = ''
let algoNulo = null
let algoNoDef = undefined

console.log(typeof algoVacio)
console.log(typeof algoNulo)
console.log(typeof algoNoDef)

const iva = 21
let ivaLet = 21
console.log(ivaLet)
ivaLet = 50
console.log(ivaLet)
//iva = 50
console.log(iva)
ivaLet = iva