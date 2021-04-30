// Para completar nuestros scripts necesitaremos estudiar en un momento concreto el tipo de datos que recibimos y devolver una respuesta u otra en base a ello. Este es el rol de los condicionales y también de los valores booleanos.

/**************ALCANCE DE LAS VARIABLES****************/
//Si declaramos las variables al principio de todo el código serán variables GLOBALES a las que se pueden acceder desde cualquier otro punto del código
//Si las declaramos dentro de una función será una variable a la que solo podré acceder dentro de la función

function recogeDatos(evento){
    evento.preventDefault();
    var nombre = document.querySelector("#nombre").value;
    var fecha = document.querySelector("#fecha").value;
    var edad = 2021 - fecha;
    var bienvenida = document.querySelector("#bienvenida");
    var mensajeEdad;
    var mensaje;
    //Analizaremos los datos que recibimos y daremos una respuesta condicionada a estos datos.
    //Para esto añadiremos el condicional IF
    //Se recomienda utilizar siempre el === para asegurarse de que estamos usando el mismo tipo de dato

    if(edad >= 30 ){
        mensajeEdad = "viejoven!";
    }else if(edad < 30){
        mensajeEdad = "jovenzuelo!";
    }else{
        mensajeEdad = "mentirosillo!";
    }


    mensaje = 
    "<h1>Hola " 
    + nombre + 
    ", tienes " 
    + edad + 
    " años. <br> Eres un " 
    + mensajeEdad + "</h1>";

    this.classList = "ocultar";
    
    bienvenida.innerHTML = mensaje;
    bienvenida.classList.add('animate__animated', 'animate__bounceIn')
}


var miForm = document.querySelector("#formulario");
    
miForm.addEventListener("submit", recogeDatos);

