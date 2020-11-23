function validarEmail(emailImput){
    var texto = document.getElementById(emailImput.id).value;
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!regex.test(texto)) {
        document.getElementById("resultado").innerHTML = "Correo inválido";
    } else {
        document.getElementById("resultado").innerHTML = "Correo válido";
    }
}