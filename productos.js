//Array de Planes (tipo objetos literales)
const planes = [
    { id: 1, nombre: "8 CRÉDITOS", precio: 8400, explicacion: "Entrená 2 veces por semana" },
    { id: 2, nombre: "12 CRÉDITOS", precio: 8900, explicacion: "Entrená 3 veces por semana" },
    { id: 3, nombre: "24 CRÉDITOS", precio: 9600, explicacion: "Entrená todos los dias" },
    { id: 4, nombre: "Pase LIONS", precio: 10000, explicacion: "Entrena libre cuando quieras!" },
    { id: 5, nombre: "Pase MUSCULACION", precio: 7900, explicacion: "Libre únicamente para musculación" },
]


//Array de ACCESORIOS
class Accesorio{
    constructor(id, nombre, marca, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.imagen = imagen;
    }
}
const aguaChica = new Accesorio(1, "Agua 600cc", "Agua Mineral", 250, 'imgJS/agua600.jpg');
const aguaGrande = new Accesorio(2, "Agua 2lts", 'Agua Mineral', 450, 'imgJS/agua2lts.jpeg');
const barrita = new Accesorio(3, 'Barrita Proteica', 'NuTres', 250, 'imgJS/barrita.webp');
const cremaDeMani = new Accesorio (4, 'Crema de Maní', 'Hardy', 750, 'imgJS/hardy.jpeg');
const powerade = new Accesorio(13, 'Powerade Azul', 'Powerade', 900, 'imgJS/powerade.jpeg');
const cafe = new Accesorio (5, 'Café expresso', 'Nesspreso', 500, 'imgJS/cafe.webp');
const cupcake = new Accesorio (6, 'Cupcake Vainilla', 'Casero', 350, 'imgJS/cupcake.jpeg');
const calleras = new Accesorio(7, "Calleras", "Full Fitness", 9000, 'imgJS/calleras.webp' );
const soga = new Accesorio(8, "Speed Rope", "RPM", 12000, 'imgJS/speedrope.webp');
const rodilleras = new Accesorio(9, "Rodilleras de neoprene", "Full Fitness", 14500, 'imgJS/rodilleras.webp');
const cinturon = new Accesorio(10, "Cinturon de fuerza", "Full Fitness", 23500, 'imgJS/cinto.webp');
const muniequeras = new Accesorio(11, "Muñequeras elasticas", "Full Fitness", 16800, 'imgJS/muñequeras.webp');
const mangas = new Accesorio(12, "Mangas Protectoras", "Full Fitness", 4000);

//Accesorios
const listaAccesorios = [];
listaAccesorios.push(aguaChica, aguaGrande, barrita, cremaDeMani, powerade, cafe, cupcake, calleras, soga, rodilleras, cinturon, muniequeras, mangas);
