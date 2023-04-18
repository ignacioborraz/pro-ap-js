let animales_mapeados = animales.map(each => {
    let objeto = {
        //patas: each.patas,
        cantidad_mascotas: each.cantidad_mascotas,
        nombre: each.nombre,
        cantidad_patas: each.patas*each.cantidad_mascotas
    }
    return objeto
})
console.log(animales_mapeados)

let cantidad_patas_totales = animales_mapeados.reduce((acumulador,valor) => {
    //console.log(acumulador)
    //console.log(valor.cantidad_patas)
    let sumar_patas = acumulador
    sumar_patas = sumar_patas + valor.cantidad_patas
    //console.log(sumar_patas)
    return sumar_patas
},0)
console.log(cantidad_patas_totales)

let cantidad_animales_totales = animales_mapeados.reduce((acumulador,valor)=> acumulador += valor.cantidad_mascotas,0)
console.log(cantidad_animales_totales)

let promedio = (cantidad_patas_totales/cantidad_animales_totales).toFixed(2)
console.log(typeof promedio)
let promedio_number = Number(promedio)
console.log(typeof promedio_number)
console.log(promedio_number)

let total_total = animales_mapeados.reduce(
    (acc,val)=> {
        let total_animales = acc.total_animales + val.cantidad_mascotas
        let total_patas = acc.total_patas + val.cantidad_patas
        let promedio_patas = Number((total_patas/total_animales).toFixed(2))
        return {
            total_animales,
            total_patas,
            promedio_patas
            //estructurar: cuando la clave y el valor se llaman exactamente igual PUEDO llamarlo directamente
        }
    },
    { total_animales: 0,total_patas:0,promedio_patas: 0}
)
console.log(total_total)

let array_porcentajes = animales_mapeados.map(each=> {
    let porcentaje_animales = Number((100*each.cantidad_mascotas/total_total.total_animales).toFixed(2))
    let nombre = each.nombre
    return { nombre,porcentaje_animales }
})
console.log(array_porcentajes)

let array_porcentajes_una_linea = animales_mapeados.map(each=> {return {porcentaje_animales: 100*each.cantidad_mascotas/total_total.total_animales}})
console.log(array_porcentajes_una_linea)