//Como declarar um array

/* let array = ['string', 1, true];
console.log(array); */

//Pode guardar todos os tipos de dados

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
/* console.log(array); */

//forEach
/* array.forEach(function (item, index) {
  console.log(item, index);
});

 */

//array.push - adiciona um item ao final do array
/* 
array.push([]);
console.log(array);

//Array pop Remove um item do final do array
array.pop();
console.log(array);

//array shitf - Remove um item do inicio do array
array.shift();
console.log(array);
3;

//unshift adiciona um item no inicio do array

array.unshift('novo item');
console.log(array);
 */
/* 
console.log(array.indexOf(true)); */
/* 
array.splice(0, 3);
console.log(array);

let novoArray = array.slice(0, 3);
console.log(novoArray);
 */
//Objetos - Dados que possuem dados e valores e sao declarados entre chaves

let object = {
  string: 'String',
  number: 1,
  Boolean: true,
  array: ['array'],
  objectInterno: { objectInterno: 'object interno' },
};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { string, Boolean, number } = object;
console.log(string, Boolean, number);
