function login() {

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    if (
        (email == "aluno1@gmail.com" && senha == "1234") ||
        (email == "aluno2@gmail.com" && senha == "1234") ||
        (email == "aluno3@gmail.com" && senha == "1234") ||
        (email == "aluno4@gmail.com" && senha == "1234") ||
        (email == "aluno5@gmail.com" && senha == "1234")
    ) {
        return true;
    } else {
        mensagem.style.display = "block";
        return false;
    }
}
