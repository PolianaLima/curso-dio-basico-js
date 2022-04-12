/* var jogador1 = 1;
var jogador2 = 0;
var placar;

//If Ternario
jogador1 != -1 && jogador2 != -1
  ? console.log('Os jogadores sao validos')
  : console.log('Jogadores Invalidos');

//Usando if
if (jogador1 > 0 && jogador2 == 0) {
  console.log('Jogador 1 marcou ponto!');
  placar = jogador1 > jogador2;
}
//Usando else if
else if (jogador2 > 0 && jogador1 == 0) {
  console.log('Jogador 2 marcou ponto');
  placar = jogador2 > jogador1;
}
//Usando else
else {
  console.log('Ninguem Marcou ponto');
}

//Usando Switch/case

switch (placar) {
  case (placar = jogador1 > jogador2):
    console.log('Jogador 1 ganhou');
    break;
  case (placar = jogador2 > jogador1):
    console.log('Jogador 2 ganhou');
    break;
  default:
    console.log('Ninguem Ganhou');
}
 */

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {
  propriedade1: 'valor1',
  propriedade2: ' valor2',
  propriedade3: 'valor3',
};

/* //for - executa uma instrução ate que ela seja falsa
for (let indice = 0; indice < array.length; indice++) {
  console.log(indice);
}
 */
/* 
//for in - executa uma repetição apartir de uma propriedade
//for in com array
for (let i in array) {
  console.log(i);
}


//for in com object
for (i in object) {
  console.log(i);
}

 */

/* //for /of - executa uma repetição apartir de uma valor
for (i of array) {
  console.log(i);
}

//com object - nao dar para utilizar o for/of com object

for (i of object.propriedade1) {
  console.log(i);
} */

//while - executa enquanto uma condicão e verdadeira

var a = 0;
while (a < 10) {
  a++;
  console.log(a);
}

//do/while - executa ate que uma condição seja falsa

do {
  a++;
  console.log(a + 's');
} while (a < 10);
