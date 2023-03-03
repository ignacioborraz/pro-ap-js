/**
 * @captureData captura los datos de checks checkeados y del input text
 */

function captureData() {
    let texto = document.getElementById('id_search').value
    let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value)
    let filtro = animales.filter(each => {
        return (each.nombre.includes(texto)) && (checks.length === 0 || checks.includes(each.tipo))
    })
    console.log(filtro)
    if (filtro.length>0) {
        printTemplates('#pet_container',filtro)
    } else {
        notFound('#pet_container')
    }
}
