# this

La palabra clave `this` de una función se comporta un poco diferente en Javascript en comparación con otros lenguajes. Además tiene algunas diferencias entre el modo estricto y el modo no estricto.

En general, el valor de this está determinado por cómo se invoca a la función. No puede ser establecida mediante una asignación en tiempo de ejecución, y puede ser diferente cada vez que la función es invocada. ES5 introdujo el método `bind()` para establecer el valor de la función this independientemente de como es llamada, y ES2015 introdujo las **funciones flecha** que no proporcionan su propio "binding" de this (se mantiene el valor de this del contexto léxico que envuelve a la función)

```javascript
console.log(this); // window

this.name = "Global context";
console.log(this.name); // Global context

function print() {
  console.log(this.name);
}
print(); // Global context

const obj = {
  name: "Object context",
  print: function () {
    console.log(this.name);
  }
};

obj.print(); // Object context

const obj2 = {
  name: "Object context 2",
  print: () => {
    console.log(this.name);
  }
};

obj2.print(); // Global context

//En el caso de las arrow functions (() => {}), a diferencia de las funciones normales, no tienen su propio contexto this.
//En su lugar, toman prestado el contexto this del ámbito en el que fueron creadas (el ámbito léxico).
```

```javascript
// Funcion constructora
//Función como constructora Persona
function Person(name) {
  this.name = name;

  //la diferencia radica en el donde se llama a la función. Es el lugar en donde se hace la instancia
  return function () {
    // return global context
    console.log(this.nombre);
  };

  //return marco
  return () => console.log(this.name);
}
let marco = new Person("marco");
marco();
```

## ... en la cadena de prototipo

El mismo concepto es válido para los métodos definidos en alguna parte de la cadena de prototipo del objeto. Si el método esta sobre una cadena de prototipo del objeto, this se referirá al objeto donde está el método de donde fue llamado. Como si ese método estuviera dentro del objeto.

```javascript
var o = {
  f: function () {
    return this.a + this.b;
  }
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

En este ejemplo, el objeto asignado a la variable `p` no tiene su propia propiedad `f`, esto lo hereda de su prototipo. Pero no importa que la búsqueda de `f` eventualmente encuentre un elemento con ese nombre en `o`; la búsqueda comenzó como una referencia a `p.f`, asi `this` dentro de la funcion toma el valor del objeto referido como `p`. Es decir, desde que `f` es llamado como método de `p`, su `this` refiere a `p`. Esto es una interesante característica de la herencia de prototipo de JavaScript.

---

# call, apply y bind

### call

Se utiliza para invocar una función y establecer el valor de this junto con los argumentos proporcionados.

```javascript
const person = {
  fullName: function (city, country) {
    return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
  }
};

const john = {
  firstName: "John",
  lastName: "Doe"
};

const result = person.fullName.call(john, "New York", "USA");
console.log(result); // Output: John Doe, New York, USA
```

### apply

Similar a call, pero acepta un array como argumento.

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = function () {
  return Array.from(arguments).reduce((acc, num) => acc + num, 0);
};

const total = sum.apply(null, numbers);
console.log(total); // Output: 15
```

### bind

Crea una nueva función enlazada a un objeto específico, lo que permite fijar el valor de this cuando la función es llamada más adelante.

```javascript
const greeting = function () {
  console.log(`Hello, ${this.name}!`);
};

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

const greetPerson1 = greeting.bind(person1);
const greetPerson2 = greeting.bind(person2);

greetPerson1(); // Output: Hello, Alice!
greetPerson2(); // Output: Hello, Bob!

// otro ejemplo bind
const person = {
  name: "jon",
  greet: function () {
    console.log(`Hola ${this.name}`);
  }
};

person.greet();

const otherPerson = {
  //devuelve undefined
  //saludar: persona.saludar

  //enlaza el contexto de persona
  greet: person.greet.bind(person)
};

otherPerson.greet();
```
