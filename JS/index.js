
var opcion = document.getElementById("opciones");

var myFunction = function() {
       var attribute = this.getAttribute("data-id");
       alert(attribute);
    };

opcion.addEventListener('click', myFunction, false);