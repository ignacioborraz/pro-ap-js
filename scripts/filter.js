/**
 * @captureData captura los datos de checks checkeados y del input text
 */

function captureData() {
    let name = document.getElementById('id_search')
    //console.log(name.value)
    let checks = document.querySelectorAll('.class_checks:checked') /* es una lista!!! se accede como si fuera un array */
    let data = {
        texto: name.value,
        checks: []
    }
    for (let each of checks) {
        //console.log(each.value)
        data.checks.push(each.value)
    }
    console.log(data)
    let filtro = animales.filter(each => each.nombre.includes(data.texto) && (
        data.checks.includes((each.tipo))
        )
    )
    console.log(filtro)
}

/* let buttonForm = document.getElementById('form-button')
buttonForm.addEventListener(
    'click',
    captureData
) */