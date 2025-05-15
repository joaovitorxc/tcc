function mostrarPagina(id) {
    // verifica se os elementos existem antes de tentar acessa-los
    var pagina1 = document.getElementById('pagina1');
    var pagina2 = document.getElementById('pagina2');

    if (pagina1 && pagina2) {
        // oculta todas as páginas
        pagina1.style.display = 'none';
        pagina2.style.display = 'none';

        // mostra a página selecionada
        var paginaSelecionada = document.getElementById(id);
        if (paginaSelecionada) {
            paginaSelecionada.style.display = 'block';
        } else {
            console.error('Página com ID ' + id + ' não encontrada.');
        }
    } else {
        console.error('Elementos das páginas não encontrados.');
    }
}

        //teste js