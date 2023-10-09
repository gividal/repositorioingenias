alert ("¡Bienvenidos a Turismo Ingenias! Que disfrutes el recorrido por nuestro sitio.")

sessionStorage.setItem ('correo','ricardo@gmail.com')
sessionStorage.setItem('nombre', 'Ricardo')
sessionStorage.setItem('destino', 'Chile, Islas de Pascua')

let correo = sessionStorage.getItem("correo") 
let nombre = sessionStorage.getItem("nombre")
let destino = sessionStorage.getItem("destino")

console.log(nombre);
console.log(correo);
console.log(destino);

alert("Tus últimos datos ingresados:  Nombre: " + nombre + " - " + "Correo: " + correo + " - " + "Destino de interés: " + destino)




let consultasNovedades = 
`{
    "nombre":"Roberto",
    "correo":"roberto@gmail.com",
    "destinoDeInteres":"San Carlos de Bariloche"
},
{
    "nombre":"Andrea",
    "correo":"andrea@gmail.com",
    "destinoDeInteres":"Cataratas del Iguazu"
    
}`
    
let jsonconsultasconvertidas = JSON.parse(consultasNovedades);
console.log(jsonconsultasconvertidas);




















