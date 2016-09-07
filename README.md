# sesion20_ejercicio03
Desarrollar un script que lea la cantidad de segundos y el número inicial desde el HTML, luego, mostrar en el HTML un contador que incremente la cantidad de segundos desde el número inicial ingresado.
Caso de Prueba:
input
segundos = 2
número inicial = 10
output
Cada 2 segundos mostraría en el HTML: 10..11..12..13..14..15...
Guía: Usar setInterval()

### Solucion Js

window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var seg = parseInt(document.getElementById("segundos").value);
		var numb = parseInt(document.getElementById("numero").value);
		minutosOnline(seg, numb);
	});

    function minutosOnline(seconds, numero){
        setInterval(function(){ 
            document.write(numero++);
            document.write(", ");
        },seconds*1000);
    }
});



