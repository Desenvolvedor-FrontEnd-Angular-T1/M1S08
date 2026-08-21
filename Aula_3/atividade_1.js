const titulo = prompt('Digite o título da página');

const h1 = document.createElement('h1');
h1.textContent = titulo;

document.body.appendChild(h1);

for (let contador = 0; contador < 3; contador++) {
  let paragrafo = prompt(`Digite o ${contador + 1}º parágrafo`);

  const p = document.createElement('p');
  p.textContent = paragrafo;
  
  document.body.appendChild(p);
}