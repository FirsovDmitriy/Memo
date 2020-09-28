const modal = document.querySelector('.modal')
const button = document.querySelector('.button')
const close = document.querySelector('.close')
const buttonDone = document.querySelector('.button-done')

button.addEventListener('click', () => {
    modal.classList.add('modal-open')
})

close.addEventListener('click', () => {
    modal.classList.remove('modal-open')
})





