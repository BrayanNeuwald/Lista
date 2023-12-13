function adicionarNaTabela() {
    // captura os valores dos campos de entrada
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    // referencia a tabela e ao corpo da tabela
    let tabela = document.getElementById('corpo-tabela');
    // cria uma nova linha na tabela
    let novaLinha = tabela.insertRow();
    // insere as células com os valores capturados
    let celulaNome = novaLinha.insertCell(0);
    let celulaEmail = novaLinha.insertCell(1);
    // adiciona os valores nas células da nova linha
    celulaNome.innerHTML = nome;
    celulaEmail.innerHTML = email;
}

function limparTabela() {
    let tabela = document.getElementById('corpo-tabela');
    tabela.innerHTML = '';
}
''