const nombreJugador = document.getElementById("player-name");
const botonContinuar = document.getElementById("buttonContinue");

const regexUsuario = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{,20}$/;

let usuarioValido = false;

const USUARIO_INVALIDO = "El nombre de usuario debeempezar en mayúscula y como máximo tener 20 carácteres";

nombreJugador.addEventListener("blur", validarUsuario);



function comprobarFormulario() {
    if (usuarioValido) {
        botonRegistro.classList.remove("noDisponible");

    } else {
        botonRegistro.classList.add("noDisponible");

    }
}


function validarUsuario() {
    usuarioValido = regexUsuario.test(nombreJugador.value);
    nombreJugador.className = usuarioValido ? "success" : "error";

    if (!usuarioValido) {
        // Obtenemos la etiqueta <small> del div al que pertenece el input
        nombreJugador.parentNode.getElementsByTagName("small")[0].innerHTML = USUARIO_INVALIDO;
    } else {
        nombreJugador.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }

    comprobarFormulario();
}





