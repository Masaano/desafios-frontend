var logo = document.getElementById('logo');//Referência ao svg
//Posição inicial do eixo y e x
var y = 1; 
var x = 1;
var vel = 1;  //Quantidade de pixel por movimento
var xMov = vel; 
var yMov = vel; 


function randomColorApi() {
    return fetch("/api/cores.json") 
      .then(function (response){ //Request pra api
          return response.json() 
      })
      .then(function(hex) {
        let posit = Math.floor(Math.random()*20); //Cálculo aleatório de uma posição no array de cores
        return hex.colors[posit]; //Return da cor da posição  aleatória
      })

      .catch((error) => console.log("error")); //Caso ocorra um erro no request da api
  }

async function movimenta(){
    //Atualização do tamanho do logo
    let logoHeight = logo.clientHeight;
    let logoWidth = logo.clientWidth;
    //Atualização do tamanho da tela
    let altWind = window.innerHeight;
    let largWind = window.innerWidth;
    //Atualização do máximo de movimento do eixo x e y
    let maxHeight = altWind - logoHeight;
    let maxWidth = largWind - logoWidth;
    if(y==maxHeight || y==0){ //Colisão do eixo y com as extremidades
        yMov *= -1;
        logo.style.fill = await randomColorApi();
    }else if(y>maxHeight){ //Correção de posição caso a logo saia da tela indo pra baixo
        y = maxHeight;
        yMov = vel*(-1);
        logo.style.fill = await randomColorApi();
    } else if(y<0){ //Correção de posição caso a logo saia da tela indo pra cima
        y = 0;
        yMov = vel;
        logo.style.fill = await randomColorApi();
    }
    if(x==maxWidth || x==0){ //Colisão do eixo x com as extremidades
        xMov *= -1;
        logo.style.fill = await randomColorApi();
    }else if(x>maxWidth){ //Correção de posição caso a logo saia da tela indo pra direita
        x = maxWidth;
        xMov = vel*(-1);
        logo.style.fill = await randomColorApi();
    }else if(x<0){ //Correção de posição caso a logo saia da tela indo pra esquerda
        x = 0;
        xMov = vel;
        logo.style.fill = await randomColorApi();
    }
    //Movimentação da logo
    y+=yMov;
    x+=xMov;
    logo.style.top = y + "px";
    logo.style.left = x + "px";
}
setInterval(movimenta,1);