let conteudoCss = document.getElementById('content-css')

conteudoCss.addEventListener('click', function(){
    console.log('clickei')
    
   
  
    // consumindo dados
    fetch('https://my-json-server.typicode.com/simaraconceicao/base-minuto/css')
      .then(response => response.json())
      .then(data => {
        const dataCard= document.getElementById("cards")
        console.log(dataCard, "qualquer texto")
        let card = " "
        
        data.forEach(item => {
           card+= 
            `<div class="card">
              <img id="card__img" src="${item.img}" alt="">
              <h3 id="card__title">${item.title}</h3>
              <p id="card__description">${item.description}</p>
              <a id="card__url" class="button" href="${item.url}" target="_blank">Saiba Mais</a>
            </div>`  
            
               
          });    
         
          console.log(dataCard)
          dataCard.innerHTML = card     
        
  
      })
  
    
      
  
  })   