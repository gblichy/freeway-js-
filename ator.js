//código ator
let xAtor = 120
let yAtor = 366;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 28, 30);

}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter);
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
     voltaAtorPosicaoInicial(); 
      somColisao.play();
      if (pontosMaiorQueZero()){
     meusPontos -= 1;
     }
    }  
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(20);
  fill(color(2238,232,170));
  text(meusPontos, width / 5, 25);
}

function marcaPonto(){
  if (yAtor < 10){
    meusPontos +=1;
    somPonto.play();
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}

