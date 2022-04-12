//Tipos Primitivos de variaveis

//Boolean
var vouF = false;
console.log(vouF);
console.log(typeof vouF);

//Number

var numeroQualquer = 1;
console.log(numeroQualquer);
console.log(typeof numeroQualquer);

//String

var nome = 'Poliana Lima';
console.log(nome);
console.log(typeof nome);

//Como declarar variavel
var variavel = 'Andre';
variavel = 'Poliana';
console.log(variavel);

let variavel2 = 'Poliana';
variavel2 = 'Andre';
console.log(variavel2);

const constante = 'Poliana';
console.log(constante);

var escopoGlobal = 'Global';
console.log(escopoGlobal);

function escopoLocal() {
  let escopoLocal = 'Local';
  console.log(escopoLocal);
}

escopoLocal();
