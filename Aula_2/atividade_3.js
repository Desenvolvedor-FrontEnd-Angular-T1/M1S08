let urlImagem = prompt('Digite a URL da imagem desejada');

let tagImg = document.createElement('img');
tagImg.src = urlImagem;
tagImg.alt = 'Imagem escolhida pelo usuario'

document.body.appendChild(tagImg);
