//Expandir o menu

const btnExpandir = document.querySelector('#btn-exp')
const menuLateral = document.querySelector ('.menu-lateral')

btnExpandir.addEventListener('click', function(){
    menuLateral.classList.toggle('expandir')
})
