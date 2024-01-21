# Array
---
<!-- [mdn web docs_](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#descripci%C3%B3n "documentation") -->

## Temario
- [Array](#array)
  - [Temario](#temario)
  - [Opciones habituales](#opciones-habituales)
    - [Crear un Array](#crear-un-array)
    - [Acceder a un elemento de Array mediante un índice](#acceder-a-un-elemento-de-array-mediante-un-índice)
    - [Añadir un elemento al final de un Array](#añadir-un-elemento-al-final-de-un-array)
    - [Eliminar el último elemento de un Array](#eliminar-el-último-elemento-de-un-array)
    - [Añadir un elemento al principio de un Array](#añadir-un-elemento-al-principio-de-un-array)
    - [Eliminar el primer elemento de un Array](#eliminar-el-primer-elemento-de-un-array)
    - [Encontrar el índice de un elemento del Array](#encontrar-el-índice-de-un-elemento-del-array)
    - [Eliminar un único elemento mediante su posición](#eliminar-un-único-elemento-mediante-su-posición)
    - [Copiar un array](#copiar-un-array)
    - [Características ```length```](#características-length)
  - [Métodos estáticos](#métodos-estáticos)
  - [Propiedades de instancia](#propiedades-de-instancia)
  - [Métodos de instancia](#métodos-de-instancia)
  - [Categorías](#categorías)
    - [Métodos para modificar arrays](#métodos-para-modificar-arrays)
    - [Métodos para iterar y acceder a elementos](#métodos-para-iterar-y-acceder-a-elementos)
    - [Métodos para obtener información sobre arrays](#métodos-para-obtener-información-sobre-arrays)
    - [Métodos para ordenar y manipular elementos](#métodos-para-ordenar-y-manipular-elementos)
  - [Repositorio de Códigos](#repositorio-de-códigos)
  - [splice()](#splice)
  - [slice()](#slice)
  - [filter()](#filter)
  - [find()](#find)
  - [map()](#map)


## Opciones habituales

### Crear un Array
```javascript
let frutas = ["Manzana", "Banana"];
console.log(frutas.length);
// 2
```
### Acceder a un elemento de Array mediante un índice
```javascript
let primero = frutas[0];
// Manzana
let ultimo = frutas[frutas.length - 1];
// Banana
```
### Añadir un elemento al final de un Array
```javascript
let nuevaLongitud = frutas.push("Naranja"); // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]
```
### Eliminar el último elemento de un Array
```javascript
let ultimo = frutas.pop(); // Elimina "Naranja" del final
// ["Manzana", "Banana"]
```

### Añadir un elemento al principio de un Array
```javascript
let nuevaLongitud = frutas.unshift("Fresa"); // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]
```
### Eliminar el primer elemento de un Array
```javascript
let primero = frutas.shift(); // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]
```

### Encontrar el índice de un elemento del Array
```javascript
frutas.push("Fresa");
// ["Manzana", "Banana", "Fresa"]
let pos = frutas.indexOf("Banana"); // (pos) es la posición para abreviar
// 1
```

### Eliminar un único elemento mediante su posición
Eliminamos "Banana" del array pasándole dos parámetros: la posición del primer elemento que se elimina y el número de elementos que queremos eliminar. De esta forma, ```.splice(pos, 1)``` empieza en la posición que nos indica el valor de la variable ```pos``` y elimina 1 elemento. En este caso, como ```pos``` vale 1, elimina un elemento comenzando en la posición 1 del array, es decir "Banana".

```javascript
let elementoEliminado = frutas.splice(pos, 1);
// ["Manzana", "Fresa"]
```

### Copiar un array
```javascript
let copiaArray = vegetales.slice();
// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"
```
### Características ```length```
Cuando se le da a una propiedad de un array JavaScript un valor que corresponda a un índice válido para el array pero que se encuentre fuera de sus límites, el motor actualizará el valor de la propiedad ```length``` como corresponda:
```javascript
frutas[5] = "fresa";
console.log(frutas[5]); // 'fresa'
console.log(Object.keys(frutas)); // ['0', '1', '2', '5']
console.log(frutas.length); // 6
```
Si se aumenta el valor de ```length```
```javascript
frutas.length = 10;
console.log(frutas); // ['banana', 'manzana', 'pera', <2 empty items>, 'fresa', <4 empty items>]
console.log(Object.keys(frutas)); // ['0', '1', '2', '5']
console.log(frutas.length); // 10
console.log(frutas[8]); // undefined
```
Si se disminuye el valor de la propiedad ```length``` pueden eliminarse elementos:
```javascript
frutas.length = 2;
console.log(Object.keys(frutas)); // ['0', '1']
console.log(frutas.length); // 2
```
## Métodos estáticos
Método | Información
-- | --
from() | Crea una nueva instancia de ```Array``` a partir de ```similarAUnArray```, un objeto iterable o parecido a un array
isArray() | Devuelve ```true``` si ```valor``` es un array, y ```false``` en caso contrario
Array.of() | Crea una nueva instancia de ```Array``` con un número variable de parámetros, independientemente del número y del tipo de dichos parámetros.

## Propiedades de instancia
Propiedad | Información
-- | --
length | Indica el número de elementos de un array.
\[@@unscopables\] | Símbolo que contiene todos los nombres de las propiedades que se excluyen de un ámbito de enlace ```with```

## Métodos de instancia
Método | Información
-- | --
concat() | Devuelve un nuevo array que es la concatenación de aquél sobre el que se invoca, seguido de otros array(s) o valor(es)
copyWithin() | Copia una secuencia de elementos de un array dentro del propio array
entries() | Devuelve un nuevo objeto ```Array Iterator``` que contiene los pares clave/valor para cada índice del array
every() | Devuelve ```true``` si todos los elementos del array cumplen el predicado que recibe como parámetro
fill() | Asigna un ```valor``` estático a todos los elementos del array entre las posiciones ```inicio``` y ```fin```
filter() | Devuelve un nuevo array que contiene todos los elementos de aquél para el cual se llama que cumplan el predicado que se le pasa como parámetro
find() | Devuelve el primer ```elemento``` del array que cumpla el predicado que se pasa como parámetro, o ```undefined``` si ninguno lo cumple
findIndex() | Devuelve el índice del primer elemento del array que cumpla el predicado que se pasa como parámetro, o ```-1``` si nunguno lo cumple
forEach() | Llama a la función pasada como parámetro para todos los elementos del array
includes() | Determina si el array contiene el valorBuscado y devuelve ```true``` o ```false``` según sea el caso
indexOf() | Devuelve el índice del primer elemento del array que sea igual a ```elementoBuscado```, o ```-1``` si no existe
join() | Concatena en un string todos los elementos de un array
keys() | Devuelve un nuevo ```Array Iterator``` que contiene las claves de cada índice del array
lastIndexOf() | Devuelve el índice del último elemento del array que sea igual a ```elementoBuscado```, o ```-1``` si no existe
map() | Devuelve un nuevo array que contiene el resultado de llamar a la función pasada como parámetro a todos los elementos del array sobre el que se invoca
pop() | Elimina el último elemento de un array, y devuelve dicho elemento.
push() | Añade uno o más elementos al final de un array y devuelve el nuevo valor de su propiedad ```length```
reduce() | Aplica la función pasada como parámetro a un ```acumulador``` y a cada valor del array, que se recorre de izquierda a derecha, para reducirlo a un único valor
reduceRight() | Aplica la función pasada como parámetro a un ```acumulador``` y a cada valor del array, que se recorre de derecha a izquierda, para reducirlo a un único valor
reverse() | Invierte el orden de los elementos de un array (el primero pasa a ser el último y el último a ser el primero) en el propio array. Este método modifica el array
shift() | Elimina el primer elemento de un array, y devuelve dicho elemento
slice() | Extrae una porción del array sobre el que se llama y devuelve un nuevo array.
some() | Devuelve ```true``` si al menos un elemento del array cumple con el predicado que se pasa como parámetro
sort() | Ordena los elementos de un array, modificando éste, y devuelve el array ordenado
splice() | Añade, borra o modifica elementos de un array
toLocaleString() | Devuelve un string adaptado a la configuración regional que representa el array y sus elementos. Redefine el método ```Object.prototype.toLocaleString()```
toString() | Devuelve un string que representa el array y sus elementos. Redefine el método ```Object.prototype.toString()```
unshift() | Añada uno o más elementos al inicio de un array y devuelve el nuevo valor de ```length``` para el array resultante
values() | Devuelve un nuevo objeto ```Array Iterator``` que contiene los valores para cada índice del array
\[@@iterator\]() | Devuelve un nuevo objeto ```Array Iterator``` que contiene los valores para cada índice del array

## Categorías

### Métodos para modificar arrays
- **pop()**: Elimina el último elemento del array y lo retorna.
- **push()**: Agrega uno o más elementos al final del array.
- **shift()**: Elimina el primer elemento del array y lo retorna.
- **splice()**: Cambia el contenido de un array, agregando, removiendo o reemplazando elementos. Puede insertar, eliminar o reemplazar elementos basado en su posición.
- **unshift()**: Agrega uno o más elementos al principio del array y devuelve la nueva longitud del array.

### Métodos para iterar y acceder a elementos
- **filter()**: Crea un nuevo array con todos los elementos que pasan la prueba de una función proporcionada.
- **find()**: Retorna el valor del primer elemento del array que cumple una condición específica.
- **findIndex()**: Retorna el índice del primer elemento que cumple una condición específica proporcionada en una función.
- **forEach()**: Ejecuta una función por cada elemento del array, pero no retorna un nuevo array.
- **includes()**: Determina si un array incluye un cierto elemento y retorna true o false según corresponda.
- **indexOf()**: Retorna el primer índice en el que se encuentra un elemento dado en el array, o -1 si no está presente.
- **map()**: Crea un nuevo array con los resultados de llamar a una función para cada elemento del array original.
- **reduce()**: Ejecuta una función reductora sobre cada elemento del array, devolviendo un único valor resultante. Este método permite realizar operaciones acumulativas sobre los elementos del array, como sumar todos los elementos o concatenarlos en una cadena, utilizando una función de reducción que se aplica secuencialmente a cada elemento.

### Métodos para obtener información sobre arrays
- **concat()**: Combina dos o más arrays creando uno nuevo sin modificar los arrays originales.
- **join()**: Une todos los elementos de un array en un string, opcionalmente separados por un separador especificado.
- **length**: Propiedad que retorna la cantidad de elementos en un array.
- **toString()**: Retorna un string representando los elementos del array.

### Métodos para ordenar y manipular elementos
- **reverse()**: Invierte el orden de los elementos de un array y modifica el array original.
- **slice()**: Retorna una copia superficial de una porción del array en un nuevo array, sin modificar el array original.
- **sort()**: Ordena los elementos de un array y modifica el array original.

## Repositorio de Códigos
## splice() 
El método ```splice()``` cambia el contenido de un array, eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar. Este método modifica el array original.
```javascript
const numeros = [1, 2, 3, 4, 5];
// Elimina 2 elementos desde el índice 2 y agrega el número 6 y 7
const eliminados = numeros.splice(2, 2, 6, 7);
console.log(numeros); // Resultado: [1, 2, 6, 7, 5]
console.log(eliminados); // Resultado: [3, 4]
```
## slice() 
El método ```slice()``` retorna una copia superficial de una porción de un array en un nuevo array, sin modificar el array original. Permite seleccionar elementos desde un índice inicial hasta un índice final (sin incluir este último).
```javascript
const numeros = [10, 20, 30, 40, 50];
const porcion = numeros.slice(1, 4);
console.log(porcion); // Resultado: [20, 30, 40]
console.log(numeros); // El array original sigue siendo [10, 20, 30, 40, 50]
```
## filter() 
El método ```filter()``` crea un nuevo array con todos los elementos que pasan la prueba implementada por una función proporcionada.
```javascript
const numeros = [5, 10, 15, 20, 25];
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares); // Resultado: [10, 20]
```

## find() 
El método ```find()``` retorna el valor del primer elemento en un array que cumple con la condición especificada en una función proporcionada.
```javascript
const numeros = [10, 20, 30, 40, 50];
const resultado = numeros.find(num => num > 15);
console.log(resultado); // Resultado: 20
```
## map() 
El método ```map()``` crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array original.
```javascript
const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map(num => num * 2);
console.log(duplicados); // Resultado: [2, 4, 6, 8, 10]
```











