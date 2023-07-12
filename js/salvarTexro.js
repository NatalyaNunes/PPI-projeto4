let btnSalvar = $("#btnSalvar");

function salvarTexto(){
    let novo = $("<p>"); //cria um elemento novo/ document.createElemente("p")
    novo.html(campo.val());
    campo.val(""); //apagar o conteudo da textearea
    qtdChar.html("0");
    //adcionar a tag nova dps de salvar
    btnSalvar.after(novo);
}
btnSalvar.click(salvarTexto);