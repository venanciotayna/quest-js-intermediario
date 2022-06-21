const campos = document.querySelectorAll('.campo');
const inputs = document.querySelectorAll('.input');
const obrigatorio = document.querySelectorAll('.obrigatorio');

function enviar() {
  for (const campo of campos) {
    const input = campo.querySelector('.input'
    );
    const error = campo.querySelector('.obrigatorio');

    if (input.value === "") {
      input.classList.add('vazio');
      input.classList.remove('preechido');
      error.classList.remove('esconder');
    } else {
      input.classList.remove('vazio');
      input.classList.add('preenchido');
      error.classList.add('enconder');
    }
  }
}