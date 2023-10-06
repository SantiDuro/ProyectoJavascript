//Toma de datos del formulario para enviarlo por consola a una "base de datos"

const baseDeDatos = []

const formulario = document.getElementById('sendBtn');

formulario.addEventListener('click', (evento) => {
    evento.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const mail = document.getElementById('mail').value; 
    const edad = document.getElementById('edad').value;    
    const telefono = document.getElementById('telefono').value; 
    const dni = document.getElementById('dni').value; 
    const nuevoSocio = {
        nombre : nombre,
        mail: mail,
        edad: edad,
        telefono: telefono,
        dni: dni,
    }
    console.log(`Se ha registrado un nuevo socio! su nombre es ${nombre}, tiene ${edad} años y podés ver en la Base de Datos toda su información.`);
    baseDeDatos.push(nuevoSocio);
    console.table(baseDeDatos);

    
    //Enviar datos del socio a la API

    function enviarSocio(){
        const URLPOST = 'https://jsonplaceholder.typicode.com/posts';
        const socioAlaAPI = {
                title: `${nombre}`,
                body: `${mail}, ${edad}, ${telefono}, ${dni}`,
                userId: 1,
        }
        fetch(URLPOST, {
            method :'POST',
            body : JSON.stringify(socioAlaAPI),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        .then((respuesta) => respuesta.json())
        .then((data) => console.log (data))
    }
    enviarSocio();

})




// Cards de Planes

let cartasPlanes = document.getElementById('inferior');
cartasPlanes.classList.add('row');
cartasPlanes.classList.add('container');
cartasPlanes.classList.add('gap-3');
cartasPlanes.classList.add('mx-auto');
cartasPlanes.classList.add('my-3');


function renderizarPlanes(planes){
    for(const plan of planes){
        cartasPlanes.innerHTML+=`
        <div class="card" style="width: 18rem;">
            <div class="card-body fondoCard">
                <h3 class="card-title">${plan.nombre}</h3>
                <h6 class="card-subtitle mb-2 text-body-secondary">$${plan.precio}</h6>
                <p class="card-text">${plan.explicacion}</p>
                <button href="#" id=${plan.id} class="btn btn-primary comprar">Elegir Plan</button>
                <a href="https://santiduro.github.io/2-PreEntrega-Coder/pages/planes.html" target:'_blank' class="card-link">Más Info</a>
            </div>
        </div>
        `;
    }


//Evento de eleccion de plan y envio al carrito

    let botones = document.getElementsByClassName('comprar');
    for(const boton of botones){
        boton.addEventListener('click', () => {
            console.log(`El socio seleccionó el plan con id ${boton.id}`);
            const planACarro = planes.find((plan) => plan.id == boton.id)
            /* console.log(planACarro); */
            //activo función para mandar al carrito
            agregarAlCarrito(planACarro);
        })
        boton.onmouseover = () => boton.classList.replace('btn-primary', 'btn-warning');
        boton.onmouseout = () => boton.classList.replace('btn-warning', 'btn-primary');
    }
}

function agregarAlCarrito(plan){
    carrito.push(plan);
    console.table(carrito);
}


//Cards de accesorios

let articuloCartas = document.getElementById('cartas');
articuloCartas.classList.add('container');
articuloCartas.classList.add('gap-3');
articuloCartas.classList.add('mx-auto');
articuloCartas.classList.add('my-3');


function renderizarAccesorios(listaAccesorios){
    for (const accesorio of listaAccesorios){
        articuloCartas.innerHTML += `
        <div class="card" style="width: 10rem;">
            <img src="${accesorio.imagen}" class="card-img-top" alt="${accesorio.nombre}">
            <div class="card-body">
                <h5 class="card-title">${accesorio.nombre}</h5>
                <p class="card-text">Precio $ ${accesorio.precio}</p>
                <button id=${accesorio.id} href="#" class="btn btn-primary compra">Comprar</button>
            </div>
        </div>
        `;
    }
}


function clickear(producto) {
    const prodACarro = listaAccesorios.find((accesorio) => {
        return accesorio.id == producto.id;
    })
    console.log(`El producto de id ${producto.id} fue seleccionado`);
    agregarAlCarrito(prodACarro);
}

function agregarClickEvents() {
    const seleccionCompra = document.getElementsByClassName('compra');
    for(const comprar of seleccionCompra){
        /* console.log('comprar: ', comprar) */
        comprar.addEventListener('click', () => clickear(comprar))

        comprar.onmouseover = () => comprar.classList.replace('btn-primary', 'btn-warning');
        comprar.onmouseout = () => comprar.classList.replace('btn-warning', 'btn-primary');

    }
}


//Desarrollo del carrito

let carrito = []; 
/* console.table(carrito); */

renderizarPlanes(planes);
renderizarAccesorios(listaAccesorios);
agregarClickEvents();
articuloCartas.style.height = '15rem';


//Llevar el producto al carro
function agregarAlCarrito(accesorio){
    carrito.push(accesorio);
    console.table(carrito);
    Swal.fire(
        `Agregaste ${accesorio.nombre} al carrito`,
        'Gracias por elegirnos!',
        'info'
        )
        let totalCarrito = calcularTotalCarrito(carrito);
        console.log(`El total de la compra es $${totalCarrito}`);
        const tablaCarrito = document.getElementById('tablabody');
    tablaCarrito.innerHTML += `
        <tr>
            <td>${accesorio.id}</td>
            <td>${accesorio.nombre}</td>
            <td>$${accesorio.precio}</td>
        </tr>
    `;
    const total = document.getElementById('total');
    total.innerText = `Total $${totalCarrito}`;
}


//Sumar el total del carrito con reduce
function calcularTotalCarrito(carrito) {
    const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
    return total;
}


//Evento de finalización de compra
const btnFinCompra = document.getElementById('btn_finalizarCompra');

btnFinCompra.addEventListener('click',()=>{
    const nombre = document.getElementById('nombre').value;
    const mail = document.getElementById('mail').value; 
    const edad = document.getElementById('edad').value;    
    const telefono = document.getElementById('telefono').value; 
    const dni = document.getElementById('dni').value; 
    const nuevoSocio = {
        nombre : nombre,
        mail: mail,
        edad: edad,
        telefono: telefono,
        dni: dni,
    }
    Swal.fire({
        icon: 'success',
        title: `¡Felicitaciones ${nombre}, hemos recibido exitosamente tu pedido!`,
        text: `Te va a llegar todo el detalle de tu pedido a ${mail}`,
        footer: '<a href="">Volver a la página de Inicio</a>'
      })

    document.getElementById('nombre').value ='';
    document.getElementById('mail').value ='';
    document.getElementById('edad').value ='';
    document.getElementById('telefono').value ='';
    document.getElementById('dni').value ='';
      

})


//dark y light mode
const contenedor = document.getElementById('principal');
const boton = document.getElementById('mode');

//Modo de apertura según preferencia del usuario
if(localStorage.getItem('mode') == 'dark'){
    pasarADark();
}else{
    pasarALight();
}


//Función de cambio de modo
boton.onclick = () => {
    if(localStorage.getItem('mode') == 'dark'){
        pasarALight();
    }else{
        pasarADark();
    }
}
function pasarADark(){
    document.body.className='dark';
    contenedor.classList.replace('light','dark');
    boton.innerText = 'Light Mode';
    localStorage.setItem('mode','dark');
}

function pasarALight(){
    document.body.className='light';
    contenedor.classList.replace('dark','light');
    boton.innerText = 'Dark Mode';
    localStorage.setItem('mode','light');
}
