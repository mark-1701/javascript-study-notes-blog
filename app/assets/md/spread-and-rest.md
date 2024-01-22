## Spread 
La sintaxis extendida o spread syntax permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos (para llamadas de función) o elementos (para **Array literales**) son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave (para **literales Tipo Objeto**) son esperados.

```javascript
// Sitaxis basica
myFunction(...iterableObj);

// Ejemplo
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6
console.log(sum.apply(null, numbers)); // 6
```

## Rest
La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un array.

```javascript
// Sintaxis basica
function(a, b, ...theArgs) {
  // ...
}

// Ejemplo
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]
```
## Ejemplo Spread y Rest
```javascript
const originalObject = {
  prop1: 'valor1',
  prop2: 'valor2',
  prop3: 'valor3',
};

// Uso del operador spread para crear una copia del objeto (spread: inicio)
const copiedObject = { ...originalObject }; 

// Uso del operador rest para obtener las propiedades restantes (rest: inicio)
const { prop1, ...restProps } = copiedObject;

// Modificación de la copia con el operador spread (spread: en el medio)
const modifiedObject = {
  ...restProps,
  prop2: 'nuevoValor2',
};

console.log('Original:', originalObject);
// Original: { prop1: 'valor1', prop2: 'valor2', prop3: 'valor3' }
console.log('Copia:', copiedObject);
// Copia: { prop1: 'valor1', prop2: 'valor2', prop3: 'valor3' }
console.log('Prop1 extraído:', prop1);
// Prop1 extraído: valor1
console.log('Propiedades restantes:', restProps);
// Propiedades restantes: { prop2: 'valor2', prop3: 'valor3' }
console.log('Objeto modificado:', modifiedObject);
// Objeto modificado: { prop2: 'nuevoValor2', prop3: 'valor3' }
```