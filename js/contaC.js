let campo = document.querySelector("#msg");
let qtdCaracteres = document.querySelector("#caracteres");

function contaLetras(){
    qtdCaracteres.innerHTML = campo.value.length;
}
campo.addEventListener("keyup", contaLetras);