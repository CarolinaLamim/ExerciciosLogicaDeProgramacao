// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

function ePaisagem(largura, altura) {
   if (largura > altura)  return true 
   return false
}

console.log(ePaisagem(800,1080))