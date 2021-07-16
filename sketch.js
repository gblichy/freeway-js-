function setup() {
  createCanvas(650, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosiçãoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}



