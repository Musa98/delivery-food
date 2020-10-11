const cardButton = document.querySelector('#card-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close')

cardButton.addEventListener('click', toggleModal);

close.addEventListener('click',toggleModal);

function toggleModal (){
    modal.classList.toggle('is-open');
}

new WOW().init();// Анимация проигрывается только когда видим элмент с ней