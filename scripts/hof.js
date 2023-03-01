/**
 * @map para transformar un array en otro array
 * lo van a poder aplicar para transformar el array de eventos en un array de cards
 */
const soloNombres = (each) => each.nombre //el parámetro each corresponde a un elemento del array a iterar
//console.log(animales.map(soloNombres))
const nombreConParrafo = (each) => `<p>${each.nombre}</p>`
//console.log(animales.map(nombreConParrafo))
//console.log(animales.map(defineTemplate)) //funcion con el template ya definido
//let frases = animales.map(each => `el animal ${each.nombre} tiene ${each.edad_actual} años`)
//console.log(frases)
//console.log(animales)

/**
 * @foreach ??? para muchas cosas o ninguna (en este ejemplo para definir tipos sin repetir)
 * lo van a poder aplicar para definir dinamicamente todas las categorias de eventos (sin repetir)
 */
//console.log(animales.forEach(each => each.edad_actual)) //no retorna ni transforma nada
let tipos = [] //tipos va a ser el array que va a tener los tipos de animal SIN repetirse
animales.forEach(each => {
    if ( ! tipos.includes(each.tipo) ) {
        tipos.push(each.tipo)
    }    
})
//console.log(tipos)

/**
 * @find para encontrar el primer elemento que cumpla una condicion (booleano)
 * lo van a poder aplicar para encontrar el evento de la página de detalle
 */
let terrestre = animales.find(each => each.tipo === "terrestre")
//console.log(terrestres)
let mayorDeEdad = animales.find(each => each.edad_actual > 18)
//console.log(mayorDeEdad)

/**
 * @filter para encontrar todos los elementos que cumplan una condición (booleano)
 * lo van a poder aplicar para los filtros
 */
let terrestres = animales.filter(each => each.tipo === "terrestre")
//console.log(terrestres)
let masDeDosPatas = animales.filter(each => each.patas >= 2)
//console.log(masDeDosPatas)

/**
 * @sort para ordenar
 * [...array] define una copia de ese aray
 * lo van a poder aplicar para ordenar los eventos y tambien para ordenar los datos de la tabla dinamica (tambien obtener min/max)
 */
let sorted1 = [...animales].sort((elemento1,elemento2)=>elemento1.edad_actual-elemento2.edad_actual) //de menor a mayor con el MENOS
//console.log(sorted1)
//console.log('animal con mayor edad '+sorted1[sorted1.length-1].nombre+' con '+sorted1[sorted1.length-1].edad_actual)
//console.log(`animal con menor edad ${sorted1[0].nombre} con ${sorted1[0].edad_actual}`)
let sorted2 = [...animales].sort((e1,e2)=>e1.patas+e2.patas) //de mayor a menor con el MAS
//console.log(sorted2)
//console.log('animal con mayor cantidad de patas '+sorted2[0].nombre)
//console.log('animal con menor cantidad de patas '+sorted2[sorted2.length-1].nombre)

/**
 * @reduce para operar un array y realizar operaciones "de reduccion/acumulacion"
 */
let gasto_total = animales.reduce(
    (acc,each)=> { //acc es el acumulador (alcancia), each son los datos de cada uno de los elementos del array
        //console.log(acc)
        //console.log(each)
        let cantidad = each.cantidad_mascotas
        let gasto = each.gasto_mensual_por_mascota
        let gasto_total = cantidad*gasto
        return acc + gasto_total
    },
    //y entre llaves programo la logica necesaria para reducir los datos
    0
)
//console.log(gasto_total)

let datos = animales.reduce(
    (acc,each)=>{
        let cantidad = each.cantidad_mascotas //de cada elemento, la cantidad de mascotas
        let gasto = each.gasto_mensual_por_mascota //de cada elemento, el gasto de cada mascota
        let obj_acc = {} //objeto que va a acumular todo
        obj_acc = { //acumulo
            suma_gastos: acc.suma_gastos + gasto*cantidad, //a lo que ya habia, le sumo lo nuevo
            cantidad_animales: acc.cantidad_animales + cantidad, //a lo que ya habia, le sumo lo nuevo
        }
        obj_acc.promedio = obj_acc.suma_gastos/obj_acc.cantidad_animales //defino el promedio
        return obj_acc //retorno el objeto acumulador
    },
    //0 necesito acumular dos variables por lo que es más comodo que el valor inicial de la reduccion sea un objeto
    { suma_gastos: 0, cantidad_animales: 0, promedio: 0 } //tengo que acumular más de un dato, por eso es apropiado iniciar la reduccion con un objeto
)
//console.log(datos)