/*Escreva uma função que recebe um número e retorne o seguinte:
Numero é divisivel por 3 = Fizz
numero é divisivel por 5 = Buzz
numero é divisivel por 3 e por 5 = FizzBuzz
numero não é divisivel por 3 e 5 = retorna o proprio numero
checar se o numero é realmente um numero
numeros apenas de 0 a 100 */


function teste(number){
    if(!number) return console.log('Entre com um número');
    if(number < 0 || number > 100) return console.log('Entre com um número entre 0 a 100');
    number % 3 == 0 && number % 5 != 0 ? console.log('Fizz') : '';
    number % 5 == 0 && number % 3 != 0 ? console.log('Buzz') : '';
    number % 3 == 0 && number % 5 == 0 ? console.log('FizzBuzz') : '';
    number % 3 != 0 && number % 5 != 0 ? console.log(number) : '';

}

console.log(teste(7))