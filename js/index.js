const inputs = document.querySelectorAll('.input')
const obrigatorio = document.querySelectorAll('.obrigatorio')
const enviar = document.querySelector('.enviar')

enviar.addEventListener('click', () => {
    inputs.forEach(input => {
      let local = input.classList
      if  (inputs.value != '') {
        inputs.classList.remove('vazio');
        inputs.classList.add('preenchido');
        obrigatorio[local].classList.add('esconder');
      } else {
        inputs.classList.remove('preenchido');
        inputs.classList.add('vazio');
        obrigatorio[local].classList.remove('esconder');
      }
    })
})