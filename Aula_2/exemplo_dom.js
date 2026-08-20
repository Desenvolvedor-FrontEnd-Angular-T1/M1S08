//Tipos de Seleção de elementos

//Exemplo getElementsByTagName
document.getElementsByTagName('h1');
document.getElementsByTagName('h1')[0];

//Exemplo getElementsByClassName
document.getElementsByClassName('teste-classe');

//Exemplo getElementById
document.getElementById('teste-id');

//Exemplo querySelector
document.querySelector('h1'); //Seleção pela primera tag h1 encontrada

document.querySelector('.teste-classe'); //Seleção pela classe
document.querySelector('teste-classe'); //Seleção incorreta de classe (faltando o . )

document.querySelector('#teste-id'); //Seleção pelo ID
document.querySelector('h2.teste-classe'); //Combinação de seleção de tag + classe
document.querySelector('h2#teste-id'); //Combinação de seleção de tag + id

//Exemplo querySelectorAll
document.querySelectorAll('h1');  //Seleção de todas as tags h1 encontradas
document.querySelectorAll('h2');  //Seleção de todas as tags h2 encontradas

//----------------------------------------------------------------------------------------

//Selecionando um elemento
let tituloPrincipal = document.querySelector('h1');

//getAttribute recupera o valor de um atributo
tituloPrincipal.getAttribute('class');

//setAttribute altera o valor do atributo escolhido
tituloPrincipal.setAttribute('class', 'teste-set-attr');

//removeAttribute remove o atributo do elemento
tituloPrincipal.removeAttribute('class');

//hasAttribute verifica se o elemento possui um atributo
tituloPrincipal.hasAttribute('class'); //retorna false pois o atributo classe foi excluído na linha 39

tituloPrincipal.setAttribute('class', 'teste-classe'); //Caso o atributo não exista, o setAttribute adiciona o atributo
tituloPrincipal.hasAttribute('class'); //retorna true pois o atributo classe foi incluído na linha anterior

//----------------------------------------------------------------------------------------

tituloPrincipal.textContent; //exibe o valor do atributo textContent
tituloPrincipal.innerHTML; //exibe o valor do atributo innerHTML
tituloPrincipal.value; //exibe o valor do atributo value

//----------------------------------------------------------------------------------------

let exemploClasse = document.querySelector('h2.teste-classe');

exemploClasse.classList.add('teste-classe-tres');
exemploClasse.classList.remove('teste-classe');
exemploClasse.classList.toggle('open');
exemploClasse.classList.toggle('open');
exemploClasse.classList.contains('teste-classe-tres');
exemploClasse.classList.contains('teste-classe-quatro');
exemploClasse.classList.replace('teste-classe-tres', 'teste-classe-quatro');

//----------------------------------------------------------------------------------------

exemploClasse.textContent = 'Teste DOM';
exemploClasse.textContent = 'Teste ABC';
exemploClasse.textContent = 'Teste Classe';
exemploClasse.style.color = '#000000';
exemploClasse.style.color = '#ffffff';
exemploClasse.style.color = '#000000';
exemploClasse.style.fontSize = '30px';

//----------------------------------------------------------------------------------------

//Criação de um novo elemento
document.createElement('h2');