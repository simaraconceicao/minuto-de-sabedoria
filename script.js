// Capturando o DOM

let cards = document.getElementById('cards')
let icones = document.getElementById('icones')
let some = document.getElementById('p-some')
let aparece = document.getElementById('p-aparece')
let titulo = document.getElementById('titulo')

let conteudoHtml = document.getElementById('content-html')
let conteudoLogica = document.getElementById('content-logica')
let conteudoCss = document.getElementById('content-css')


// consumindo dados
fetch('https://my-json-server.typicode.com/simaraconceicao/base-minuto/html')
  .then(response => response.json())
  .then(data => console.log(data[Math.floor(Math.random() * data.length)]))



conteudoHtml.addEventListener('click', function(){
  console.log('clickei')
  icones.style.display = 'none'
  cards.style.display = 'block'
  some.style.display = 'none'
  titulo.style.display = 'none'
  aparece.style.display = 'block'
  // const{title, description, img, url} = data

  //   document.getElementById(card__img) = img
  //   document.getElementById(card__title) = title
  //   document.getElementById(card__description) = description
  //   document.getElementById(card__url) = url

})   
    





// botão voltar 
// none no card e volta cj-icones