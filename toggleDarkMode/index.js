
const checkbox = document.querySelector('#toggle-dark-mode')
const body = document.querySelector('body')

checkbox.addEventListener('click', ()=>{
    if(checkbox.checked === true){
        body.classList.add('dark-mode')
    }else{
        body.classList.remove('dark-mode')
    }
})