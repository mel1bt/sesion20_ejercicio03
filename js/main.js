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

