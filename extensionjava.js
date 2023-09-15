alert ("¡Bienvenidos a Turismo Ingenias! Que disfrutes el recorrido por nuestro sitio.")
let correo = prompt ("Si desea recibir novedades de nuestras ofertas de paquetes turisticos ingrese su correo:")
console.log(correo, "correo de usuario");
let nombre = prompt (" Ingrese su nombre:")
console.log(nombre, "nombre de usuario");
let destino = prompt (" Ingrese el destino del cual quiere recibir novedades:")
console.log(destino, "destino de interes");
alert ("¡Gracias! Esperamos que nuestras ofertas y recomendaciones sean de su interés.")

let ayudaalusuario = prompt ("¿Necesitas ayuda para elegir tu próximo destino? SI - NO ");
if (ayudaalusuario == "SI"){
    alert ("A continuacion te haremos un pequeño test para recomendarte algunos destinos.");
} else if (ayudaalusuario == "NO") {
    console.log("No se mostrara el mensaje");
} else {
    alert("Usted no ingreso una opción correcta")
}

let pregunta1 = prompt ("Para ti “vacaciones” es sinónimo de…   A) Relax y descanso   B) Deporte y aventura   C) Nuevas culturas y costumbres ")
console.log(pregunta1, "RespuestaPregunta1");

let pregunta2 = prompt ("¿Qué preferirías hacer en tu viaje?  A) Visitar un museo o ver un espectáculo   B) Practicar algún deporte de aventura o extremo   C) Un masaje o un ratito en el spa sería fantástico")
console.log(pregunta2, "RespuestaPregunta2");

let pregunta3 = prompt ("¿Qué te define mejor?  A) Intelectual y amante del arte   B) Atrevido, me gusta vivir emociones fuertes   C) Tolerante y de mente abierta")
console.log(pregunta3, "RespuestaPregunta3");

if (pregunta1 == "A" && pregunta2 == "C" && pregunta3 == "C"){
    alert ( "Los destinos recomendados son: 1) Isla de Pascua (Chile)   2) Lagunas Cejar y de Baltinache (Chile)   3) Lago Moreno (Arg)")
} else {
    prompt ("Le enviaremos los resultados. Ingrese su correo:")
}