//Expandir o menu lateral

const btnExpandir = document.querySelector('#btn-exp')
const menuLateral = document.querySelector ('.menu-lateral')

btnExpandir.addEventListener('click', function(){
    menuLateral.classList.toggle('expandir')
})

//Mostrar mais territórios

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
})

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}