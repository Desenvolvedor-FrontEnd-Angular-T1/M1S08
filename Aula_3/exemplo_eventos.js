const button = document.querySelector('button');

// button.onclick = function() {
//   //console.log('Teste Click - Propriedade');
//   window.alert('Teste Click - Propriedade');
// }

button.addEventListener('click', () => {
  console.log('Teste Click - Event Listener');
})