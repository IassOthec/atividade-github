const botoes = document.querySelectorAll('.toggle');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const descricao = botao.parentElement.nextElementSibling;

        if(descricao.style.display === 'block'){
            descricao.style.display = 'none';
            botao.textContent = '▼';
        }else{
            descricao.style.display = 'block';
            botao.textContent = '▲';
        }
    });
});