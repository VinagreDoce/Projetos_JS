let palavra;

function setup() 
{
  createCanvas(400, 400);
  palavra = PalavraAleatoria();
}

function draw() 
{
  //chamando as funções auxiliares//
  InicializandoCores();
  text(PalavraParcial(),200,200)
}






//----Funções Auxiliares----//

function InicializandoCores()
{
  background(220);
  fill("black");
  textAlign(CENTER,CENTER);
  textSize(50);
}
//--------------------------//


  function PalavraParcial()
{
  let minimo = 0
  let maximo = width
  let quantidade = map(mouseX,minimo,maximo, 1,palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0,quantidade);
  return parcial;
}
//--------------------------//


 function PalavraAleatoria()
{
  let palavras = ["Juntos","Caminhantes","Escolhido","Inteligente","Felicidade"];
  return random(palavras);
}
//--------------------------//


 function LugaresBonsParaPassear(DiaDaSemana,Bairro)
{
  /*calcula com os valores recebidos
  e coloca numa variavel chamada parque*/
  //return parque;
} 
//--------------------------//