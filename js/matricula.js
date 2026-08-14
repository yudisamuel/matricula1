
function enviar() {

    let campos = document.querySelectorAll("input, select, textarea");
    let tudoPreenchido = true;

    for (let campo of campos) {
        if (campo.value == "") {
            tudoPreenchido = false;
        }
    }

    if (tudoPreenchido) {
        document.getElementById("mensagem").style.display = "none";
        document.getElementById("concluido").style.display = "block";
    } else {
        document.getElementById("mensagem").style.display = "block";
        document.getElementById("concluido").style.display = "none";
    }

}
