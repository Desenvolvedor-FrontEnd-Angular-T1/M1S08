//Receber o título do usuario
let titulo = prompt('Digite um título principal');

//Selecionar o h1
let tag = document.querySelector('h1');

//Incluir texto do título
tag.textContent = titulo;
