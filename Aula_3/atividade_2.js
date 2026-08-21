const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  // btn.style.color = '#2d76ec';
  // btn.innerText = 'Curtido';

  // btn.classList.add('clicado');
  // btn.innerText = 'Curtido';

  btn.classList.toggle('clicado');
  btn.innerText = btn.classList.contains('clicado') ? 'Curtido' : 'Curtir';
});