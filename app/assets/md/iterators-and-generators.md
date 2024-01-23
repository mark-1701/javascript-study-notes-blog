# Iterators and generators

Procesar cada uno de los elementos en una colección es una operación muy común. JavaScript proporciona diversas formas de iterar sobre una colección, desde simples bucles `for` hasta métodos como `map()` y `filter()`. Los iteradores y los generadores traen el concepto de iteración al centro del lenguaje y proporcionan un mecanismo para personalizar el comportamiento de los bucles `for...of`.

## iterators

En JavaScript, un iterador es un objeto que permite recorrer una colección y devolver un valor al terminar.

````javascript
const iterable = [1, 2, 3, 4, 5];
// Otros objetos iterables
// const StringIterable = "Hola Mundo"; //StringIterator
// const iterable = new Set{[1,2,3,4,5]}
// const iterable = new Map([["nombre", "jon"],["edad",35]])```

// accedenos al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.warn(iterador); // Array Iterator {}
console.warn(iterador.next()); // {value: 1, done: false}
console.warn(iterador.next()); // {value: 2, done: false}
console.warn(iterador.next()); // {value: 3, done: false}
console.warn(iterador.next()); // {value: 4, done: false}
console.warn(iterador.next()); // {value: 5, done: false}
console.warn(iterador.next()); // {value: undefined, done: true}
// done indica el final del loop

// recorrerlo con un while
let next = iterador.next();
while (!next.done) {
  console.warn(next.value);
  next = iterador.next();
}
````

## generators

Aunque los iteradores personalizados son una herramienta útil, su creación require una programación meticulosa ya que necesitan mantener su estado interno explícitamente. Los `generadores` son una alternativa poderosa: permiten definir un algoritmo iterativo al escribir una sola función que puede mantener su propio estado.

Una función generadora (constructor GeneratorFunction) es un tipo especial de función que sirve como una fábrica de iteradores. Cuando se ejecuta, regresa un nuevo objeto Generador. Una función se convierte en una Función Generadora si utiliza la sintáxis `function*`.

````javascript
// funcion iterable
function* iterable2() {
  yield "hola";
  console.log("Hola consola");
  yield "hola 2";
  console.log("Seguimos con más intrucciones de nuestro código");
  yield "hola 3";
  yield "hola 4";
}

let iterador2 = iterable2();
console.warn(iterador2.next()); // {value: 'hola', done: false}
console.warn(iterador2.next()); // Hola consola
console.warn(iterador2.next()); // {value: 'hola 2', done: false}
console.warn(iterador2.next()); // {value: 'hola 4', done: false}
console.warn(iterador2.next()); // {value: undefined, done: true}

iterador2 = iterable2();
// imprimir los elementos con un for...of
for (const yield of iterador2) {
  console.warn(yield);
  // hola
  // hola consola
  // hola 2
  // hola 4
}

// guardar los iterables en un array
const arr = [...iterable2()];
console.log(arr); // ['hola', 'hola 2', 'hola 3', 'hola 4']
````
### Otro ejemplo generators
```javascript
function* fibonacci() {
  var fn1 = 1;
  var fn2 = 1;
  while (true) {
    var actual = fn2;
    fn2 = fn1;
    fn1 = fn1 + actual;
    var reset = yield actual;
    if (reset) {
      fn1 = 1;
      fn2 = 1;
    }
  }
}

var secuencia = fibonacci();
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 2
console.log(secuencia.next().value); // 3
console.log(secuencia.next().value); // 5
console.log(secuencia.next().value); // 8
console.log(secuencia.next().value); // 13
console.log(secuencia.next(true).value); // 1
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 2
console.log(secuencia.next().value); // 3
```