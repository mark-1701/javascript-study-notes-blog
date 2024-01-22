# Destructuración
La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

## Sintaxis básica
```javascript
let a, b, rest;

// Destructuración de Array
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

// Destructuración con res
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

//Destructuración de objetos
({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Propuesta de etapa 4 (terminada)
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```

## Valores predeterminados
A una variable se le puede asignar un valor predeterminado, en el caso de que el valor desempacado del arreglo sea ```undefined```.
```javascript
let a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7
```
## Intercambio de vaiables
os valores de dos variables se pueden intercambiar en una expresión de desestructuración.
Sin desestructurar la asignación, intercambiar dos valores requiere una variable temporal (o, en algunos lenguajes de bajo nivel, el algoritmo del truco XOR-swap)
```javascript
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]
```
## Analizar un arreglo devuelto por una función
iempre ha sido posible devolver un arreglo desde una función. La desestructuración puede hacer que trabajar con un valor de retorno de arreglo sea más conciso.

En este ejemplo, ```f()``` devuelve los valores ```[1, 2]``` como su salida, que se puede procesar en una sola línea con desestructuración.
```javascript
function f() {
  return [1, 2];
}

let a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

## Ignorar algunos valores devueltos
Puedes ignorar los valores de retorno que no te interesan:
```javascript
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1
```
## Asignar el resto de un arreglo a una variable
Al desestructurar un arreglo, puedes desempacar y asignar la parte restante a una variable usando el patrón ```rest``` o:
```javascript
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```
## Desempacar campos de objetos pasados como parámetro de función
```javascript
const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

function userId({ id }) {
  return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} es ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user)); // "jdoe es John"
```
## Establecer el valor predeterminado de un parámetro de función
```javascript
function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // haz un dibujo de gráfico
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});
```


### Desestructuración de arreglos y objetos anidados
```javascript
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2020-08-29T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/es/docs/Tools/Scratchpad",
};

let {
  title: englishTitle, // renombrar
  translations: [
    {
      title: localeTitle, // renombrar
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
```

## Iteración "```for...of```" y desestructuración
```javascript
const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (const {
  name: n,
  family: { father: f },
} of people) {
  console.log("Nombre: " + n + ", Padre: " + f);
}

// "Nombre: Mike Smith, Padre: Harry Smith"
// "Nombre: Tom Jones, Padre: Richard Jones"
```

## Desestructuración combinada de arreglos y objetos
La desestructuración de arreglos y objetos se puede combinar. Supongamos que deseas manipular el tercer elemento del siguiente arreglo ```props```, y luego deseas la propiedad ```name``` en el objeto, puedes hacer lo siguiente:
```javascript
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
```
## Nota
Puedes aplicar la destructuración al importar módulos.
```javascript 
import { modulo1, modulo2 } from 'mi-modulo';
```

