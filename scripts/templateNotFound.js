function notFound(id_etiqueta) {
    let container = document.querySelector(id_etiqueta)
    container.innerHTML = `
    <div class="card m-2 card-box">
        <div class="card-body d-flex flex-column align-items-center">
            <h3 class="card-title d-flex flex-column align-items-center justify-center">ANIMAL NO ENCONTRADO</h3>
        </div>
    </div>
    `
}