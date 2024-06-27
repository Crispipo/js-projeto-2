let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y



function setup() {
  createCanvas(600, 600);
   background (color(10, 100, 200));
  
  
  cor= color (random(0,255), random(0,255), random(0,255));
  posicaoHorizontal= 200
  posicaoVertical= 200
}
function draw() {
  
  
 circle(posicaoHorizontal , posicaoVertical, 30);
  fill(cor)
  
  if(mouseX <posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal -1,5;
  }
   
  
  if(mouseX >posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal +1,5;
  }
  
  
  if(mouseY<posicaoVertical) {
    posicaoVertical = posicaoVertical - 1,5;
  }
  
  
  if(mouseY>posicaoVertical) {
    posicaoVertical = posicaoVertical + 1,5;
  }
  
  if(mouseIsPressed) {
    cor = color(random(0,255), random(0,255), random(0,255),
    random(100));
  }
  
  
  
  
  
  
  
}
