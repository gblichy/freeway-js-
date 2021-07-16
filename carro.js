//código carro

let xCarros = [650, 650, 650, 650, 650, 650];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 4, 3.3, 2.3]
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
}
}

function voltaPosiçãoInicialCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  if (passouTodaTela(xCarros[i])){
    xCarros[i] = 650;
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}

