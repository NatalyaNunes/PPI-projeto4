
let campo = $("#msg");
let qtdChar = $("#caracteres");

function contaChar(){
    qtdChar.html(campo.val().length);
}
campo.keyup(contaChar);
