// Capturando o DOM
const recado = document.getElementById('p-some')
console.log(recado)

const titulo = document.getElementById('titulo')

const setRecado = document.getElementById('p-aparece')
console.log(setRecado)

const divona = document.getElementById('cj-icone')
console.log(divona)

const setDivona = document.getElementById('card-aparece')
console.log(setDivona)

const contentHtml = document.getElementById('content-html')
console.log(contentHtml)

const logica = document.getElementById('logica')
console.log(logica)

const css = document.getElementById('css')
console.log(css)

const git = document.getElementById('git')
console.log(git)

const github = document.getElementById('github')
console.log(github)

const javascript = document.getElementById('javascript')
console.log(javascript)

const api = document.getElementById('api')
console.log(api)

const react = document.getElementById('react')
console.log(react)

const firebase = document.getElementById('firebase')
console.log(firebase)

// consumindo dados
const db = fetch('https://my-json-server.typicode.com/simaraconceicao/base-minuto/db')
  .then(response => response.json())
  .then(json => console.log(json))
  

fetch(' https://my-json-server.typicode.com/simaraconceicao/base-sabedoria/db')
  .then(response => response.json())
  .then(json => console.log(json))
  
  

 



// Escutando o click do icone
contentHtml.addEventListener('click', function(e){

    recado.style.display = "none"
    titulo.style.display = "none"
    setRecado.style.display = "block"
    setDivona.style.display = "block"
    divona.style.display = "none"

    
    function criarCard(){
        

    }
    
        
})

// 2 - escuto o click do icone


// logica
// css
// javaScript
// git
// github
// api
// react
// firebase

// 3 - dou um display none na divona completa
// leio o json
// faço um sorteio randomico dos id's
// dou um display block na div vazia 

// create element 
// card
// botão voltar
// inserindo os dados
// appendchild
// um card com os elementos do obj de acordo com o id sorteado

// title
// description
// img
// url


// botão voltar 
// none no card e volta cj-icones