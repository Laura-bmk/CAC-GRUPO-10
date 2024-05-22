// Se define una variable MiInicio como una cadena vacía (``). Esta variable se usará para almacenar el contenido HTML que se generará dinámicamente.
let miInicioOfertas = ``

//For para traer la información de data y mostrarla como tarjetas
for(let elemento of ofertasd){

    //Voy iterando y agregando las tarjetas

    

    miInicioOfertas = miInicioOfertas +`
                <!-- División contenedora del título e imágenes -->
            <section id="popular">
                <div class="container">
                    <h3>${elemento.ram}</h3>
                    <div id="list-popular">
                        <div class="movie-item">
                            <a href="./static/JS/detalle-producto.html">
                                <img src=${elemento.image}  alt="" style="width: 200px; height: 300px; background-color: white;" class="movie-item-img producto-imagen">
                                <div class="movie-item-detail"> 
                                    <p class="movie-item-detail-title"><strong>Modelo:</strong>${elemento.modelo}</p>
                                    <p class="movie-item-detail-subtitle"><strong>Ram:</strong>${elemento.ram}</p>
                                    <p class="movie-item-detail-subtitle"><strong>Precio:</strong> ${elemento.precio}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    
    `
}


//Selecciono el main y con innerHTML agrego lo que definí en la variable miInicio
document.querySelector('.ofertasjs').innerHTML=miInicioOfertas
// Se define una variable MiInicio como una cadena vacía (``). Esta variable se usará para almacenar el contenido HTML que se generará dinámicamente.
let miInicio = ``

//For para traer la información de data y mostrarla como tarjetas
for(let elemento of celulares){

    //Voy iterando y agregando las tarjetas
   
    miInicio = miInicio +`
                <!-- División contenedora del título e imágenes -->
            <section id="popular">
                <div class="container">
                    <h3>${elemento.tendencias}</h3>
                    <div id="list-popular">
                        <div class="movie-item">
                            <a href="./templates/detail-movie.html">
                                <img src=${elemento.image}  alt="" style="width: 200px; height: 300px; background-color: white;" class="movie-item-img producto-imagen">
                                <div class="movie-item-detail"> 
                                    <p class="movie-item-detail-title">${elemento.modelo}</p>
                                    <p class="movie-item-detail-subtitle">${elemento.ram}</p>
                                    <p class="movie-item-detail-subtitle">precio: ${elemento.precio}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    
    `
}


//Selecciono el main y con innerHTML agrego lo que definí en la variable miInicio
document.querySelector('.productojs').innerHTML=miInicio

let miInicioMemorias=``
for(let elemento of memorias){

    //Voy iterando y agregando las tarjetas
   
    miInicioMemorias = miInicioMemorias +`
                <!-- División contenedora del título e imágenes -->
            <section id="popular">
                <div class="container">
                    <h3>Las tendencias de hoy</h3>
                    <div id="list-popular">
                        <div class="movie-item">
                            <a href="./templates/detail-movie.html">
                                <img src=${elemento.image}  alt="" style="width: 200px; height: 300px; background-color: white;" class="movie-item-img">
                                <div class="movie-item-detail"> 
                                    <p class="movie-item-detail-title">${elemento.modelo}</p>
                                    <p class="movie-item-detail-subtitle">precio: ${elemento.precio}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    
    `
}
document.querySelector('.memoriasjs').innerHTML=miInicioMemorias

let miInicioParlantes=``
for(let elemento of parlantes){

    //Voy iterando y agregando las tarjetas
   
    miInicioParlantes = miInicioParlantes +`
                <!-- División contenedora del título e imágenes -->
            <section id="popular">
                <div class="container">
                    <h3>Las tendencias de hoy</h3>
                    <div id="list-popular">
                        <div class="movie-item">
                            <a href="./templates/detail-movie.html">
                                <img src=${elemento.image}  alt="" style="width: 200px; height: 300px; background-color: white;" class="movie-item-img">
                                <div class="movie-item-detail"> 
                                    <p class="movie-item-detail-title">${elemento.modelo}</p>
                                    <p class="movie-item-detail-subtitle">precio: ${elemento.precio}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    
    `
}
document.querySelector('.parlantesjs').innerHTML=miInicioParlantes

let miInicioVariados=``
for(let elemento of variados){

    //Voy iterando y agregando las tarjetas
   
    miInicioVariados = miInicioVariados +`
                <!-- División contenedora del título e imágenes -->
            <section id="popular">
                <div class="container">
                    <h3>Las tendencias de hoy</h3>
                    <div id="list-popular">
                        <div class="movie-item">
                            <a href="./templates/detail-movie.html">
                                <img src=${elemento.image}  alt="" style="width: 200px; height: 300px; background-color: white;" class="movie-item-img">
                                <div class="movie-item-detail"> 
                                    <p class="movie-item-detail-title">${elemento.modelo}</p>
                                    <p class="movie-item-detail-subtitle">$${elemento.precio}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    
    `
}
document.querySelector('.variadosjs').innerHTML=miInicioVariados


let miInicioPendrives=``
for(let elemento of pendrives){

    //Voy iterando y agregando las tarjetas
   
    miInicioPendrives = miInicioPendrives +`
                <!-- División contenedora del título e imágenes -->
            <section id="popular">
                <div class="container">
                    <h3>Las tendencias de hoy</h3>
                    <div id="list-popular">
                        <div class="movie-item">
                            <a href="./templates/detail-movie.html">
                                <img src=${elemento.image}  alt="" style="width: 200px; height: 300px; background-color: white;" class="movie-item-img">
                                <div class="movie-item-detail"> 
                                    <p class="movie-item-detail-title">${elemento.modelo}</p>
                                    <p class="movie-item-detail-subtitle">precio: ${elemento.precio}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    
    `
}
document.querySelector('.pendrivesjs').innerHTML=miInicioPendrives

let miInicioCargadoresp=``
for(let elemento of cargadoresp){

    //Voy iterando y agregando las tarjetas
   
    miInicioCargadoresp = miInicioCargadoresp +`
                <!-- División contenedora del título e imágenes -->
            <section id="popular">
                <div class="container">
                    <h3>Las tendencias de hoy</h3>
                    <div id="list-popular">
                        <div class="movie-item">
                            <a href="./templates/detail-movie.html">
                                <img src=${elemento.image}  alt="" style="width: 200px; height: 300px; background-color: white;" class="movie-item-img">
                                <div class="movie-item-detail"> 
                                    <p class="movie-item-detail-title">${elemento.modelo}</p>
                                    <p class="movie-item-detail-subtitle">precio: ${elemento.precio}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    
    `
}
document.querySelector('.caradorPortatilesjs').innerHTML=miInicioCargadoresp