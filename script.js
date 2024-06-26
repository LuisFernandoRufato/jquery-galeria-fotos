$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImagem = $('endereco-imagem-nova').val();
        const novoItem = $('<li></li>');
        $(`img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-img-link">
                <a href="${enderecoNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    });
});