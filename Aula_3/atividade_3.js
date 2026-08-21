const textArea = document.querySelector('textarea');
const span = document.querySelector('span');

function validaCaracteres() {
  const texto = textArea.value;
  span.innerText = `Caracteres digitados: ${texto.length}`;
}

//textArea.onmousedown = validaCaracteres;
//textArea.onkeypress = validaCaracteres;
textArea.onkeyup = validaCaracteres;