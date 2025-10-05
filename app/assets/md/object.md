# Object

La clase `Object` representa uno de lso tipos de datos en Javascript. Es usado para guardar una colección de datos definidos y entidades más completas. Los objetoos pueden ser creados utilizando el constructor `Object()` o la sintaxis literal / inicializador de objeto.

Casi todos los objetos en JavasScript son instancias de `Object`; un objeto típico hereda propiedades (incluyendo los métodos) de `Object.prototypes`, a pesar de que estas propiedades pueden ser sobreescritas. Aun así, un `Object` puede ser `Object.create(null)`, o puede alterarse para que esto no sea más verdad (por ejemplo con `Object.setPrototypeOf`).

Los cambios realizados en el `Object` prototipo son vistos por todos los objetos de la cadena de prototipos, a no ser que las propiedades y métodos sujetos a esos cambios hayan sido sobreescritos más abajo en la cadena. Sobreescribir o extender el comportamiento de un objeto es un mecanismo muy poderoso, aunque potencialmente peligroso.

El constructor `Object` crea un envoltorio de objeto para el valor dado.

- Si el valor es `null` o `undefined`, se creará un objeto y se retornará un objeto vacío.
- Si el valor ya es un objeto, entonces se retornará el valor.
- En cualquier otro caso, se retornará un objeto del Tipo que corresponda el valor dado.

Cuando lo llamamos en un contexto no-constructivo, `Object` se comporta igual que `new Object()`.

## Borrando una propiedad de un objetoo

No hay ningún método en el Objeto que sirva para borrar sus propiedades (como `Map.prototype.delete()`). Para hacerlo, es necesario el uso del _operador delete_.

## Constructor

| Método     | Información                                                              |
| ---------- | ------------------------------------------------------------------------ |
| `Object()` | Crea un nuevo objeto `Object`. Este es un envoltorio para el valor dado. |

## Métodos estáticos

| Método                               | Información                                                                                                                                                                  |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Object.assign()`                    | Copia los valores de todas las propiedades enumerables propias de uno o más objetos fuente en el objeto asignado.                                                            |
| `Object.create()`                    | Crea un nuevo objeto con el objeto principal especificado y sus propiedades.                                                                                                 |
| `Object.defineProperty()`            | Agrega la propiedad nombrada descrita por el descriptoor dado a un objeto.                                                                                                   |
| `Object.defineProperties()`          | Añade las propiedades nombradas a un objeto.                                                                                                                                 |
| `Object.entries()`                   | Devuelve un array que contiene todos los pares `[key, value]` de las propiedades enumerables en formato cadena de texto que le pertenecen a un objeto dado.                  |
| `Object.freeze()`                    | Congela un objeto. Otro código no puede borrar ni cambiar sus propiedades.                                                                                                   |
| `Object.fromEntries()`               | Devuelve un nuevo objeto de los pares iterables `[key, value]`. (Este métoodo hace lo contrario a `Object.entries`).                                                         |
| `Object.getOwnPropertyDescriptor()`  | Devuelve un descriptor de propiedad para una propiedad nombrada en un objeto                                                                                                 |
| `Object.getOwnPropertyDescriptors()` | Devuelve un objeto con todos los descriptores de propiedad pertenecientes a un objeto.                                                                                       |
| `Object.getOwnPropertyNames()`       | Devuelve un arreglo que contiene todos los nombres de las propiedades enumerables y no enumerables que le pertenecen a un objeto dado.                                       |
| `Object.getPrototypeOf()`            | Devuelve el prototipo (la propiedad interna `[[Prototype]]`) del objeto especificado.                                                                                        |
| `Object.is()`                        | Compara si dos valores son el mismo valor. Iguala todos los valores `NaN` (lo que difiere de la Comparación Abstracta de Igualdad y de la Comparación Estricta de Igualdad). |
| `Object.isExtensible()`              | Determina si está permitido extender un objeto                                                                                                                               |
| `Object.isFrozen()`                  | Determina si un objeto está congelado                                                                                                                                        |
| `Object.isSealed()`                  | Determines si un objeto está sellado.                                                                                                                                        |
| `Object.keys()`                      | Devuelve un arreglo con contiene todos los nombres de las propiedades enumerables de tipo cadena de texto **pertenecientes** al objeto dado                                  |
| `Object.preventExtensions()`         | Previene que un objeto pueda extenderse.                                                                                                                                     |
| `Object.seal()`                      | Previene que otro código pueda borrar propiedades de un objeto                                                                                                               |
| `Object.setPrototypeOf()`            | Estipula el prototipo de un objeto (su propiedad interna `[[Prototype]]`).                                                                                                   |
| `Object.values()`                    | Devuelve un arreglo que contiene todos los valores correspondientes a las propiedades enumerables de tipo cadena de texto pertenecientes a un objeto dado.                   |

## Propiedades de instancia

| Método                         | Información                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------- |
| `Object.prototype.constructor` | Especifica la función que crea el prototipo de un objeto.                       |
| `Object.prototype.__proto__`   | Apunta el objeto que fue usado como prototipo cuando el objeto fue instanciado. |

## Métodos de instancia

| Método                                    | Información                                                                                                                                                                           |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Object.prototype.__defineGetter__()`     | Asocia una función a una propiedad que, cuando es accedida, ejecuta la función y retorna su valor de retorno                                                                          |
| `Object.prototype.__defineSetter__()`     | Asocia una función a una propiedad que, cuando es estipuada, ejecuta la función que modificá dicha propiedad.                                                                         |
| `Object.prototype.__lookupGetter__()`     | Devuelve la función asociada a la propiedad establecida por el método `Object.prototype.__defineGetter__()`.                                                                          |
| `Object.prototype.hasOwnProperty()`       | Devuelve un booleano que indica si el objeto contiene una propiedad determinada como una propiedad directa del objeto y que no haya sido heredad a través de la cadena de prototipos. |
| `Object.prototype.isPrototypeOf()`        | Devuelve un booleano que indica si el objeto por el cual este método está siendo llamado está en la cadena de prototipos del objeto específicado.                                     |
| `Object.prototype.propertyIsEnumerable()` | Devuelve un booleano indicando si el [atributo ECMAScript [Enumrable]] interno está establecido.                                                                                      |
| `Object.prototype.toLocaleString()`       | Llama a `toString()`                                                                                                                                                                  |
| `Object.prototype.toString()`             | Devuelve una representación del objeto en formato cadena de texto.                                                                                                                    |
| `Object.prototype.valueOf()`              | Devuelve el valor primitivo del objeto especificado.                                                                                                                                  |

## Ejemplo

```javascript
// Crear un objeto vacío

let o = new Object();

let o = new Object(undefined);

let o = new Object(null);
```

```javascript
// Usando Object para crear objetos Boolean

// equivalente a o = new Boolean(true)
let o = new Object(true);

// equivalente a o = new Boolean(false)
let o = new Object(Boolean());
```

## Prototipos del objeto

Cuando altere el comportamiento de los métodos existentes en `Object.prototype`, considere inyectar el código envolviendo la extensión antes o después de la lógica existente. Por ejemplo, esté código (no testeado) ejecutará precondicionalmente la lógica modificada antes que la lógica predefinida o la ejecución de cualquier otra extensión.

Cuando una función es llamada, los argumentos de la llamada son retenidos por la "variable" pseudo-arreglo _arguments_. Por ejemplo en la llamada `myFn(a, b, c)`, los argumentos dentro del cuerpo de `myFn` contendrán tres elementos pseudo-arreglo correspondientes a `(a, b, c)`.

Cuando modificamos prototipos con hooks, pase `this` y sus argumentos (el estado durante el llamado) al actual comportamiento llamado a `apply()` en la función. Este patrón puede ser usado por cualquier prototipo, como `Node.prototype`, `Function.prototype`, etc.

```javascript
var current = Object.prototype.valueOf;

// Ya que mi propiedad "-prop-value" es transversal y no siempre está
// en la misma cadena protipal, yo quiero cambiar el Object.prototype:
Object.prototype.valueOf = function () {
  if (this.hasOwnProperty("-prop-value")) {
    return this["-prop-value"];
  } else {
    // Si no parece uno de mis objetos, debo caer en
    // el comportamiento predeterminado reproduciendo el comportamiento actual lo mejor que podamos.
    // Apply se comporta como lo hace "super" en otros lenguajes.
    // A pesar de que valueOf() no tome ningún argumento, puede hacerlo.
    return current.apply(this, arguments);
  }
};
```

Ya que JavaScript no tiene exactamente objetos sub-clase, el prototipo sirve para crear objetos que actúen como "clase base" para ciertas funciones que actúan como objetos y así mitigar esta limitación. Por ejemplo:

```javascript
var Person = function (name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function () {
  if (this.canTalk) {
    console.log("Hola, yo soy " + this.name);
  }
};

var Employee = function (name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
//Si no aplicas Object.prototype.constructor a Employee,
//tomará prototype.constructor de Person (padre).
//Para evitarlo, aplicamos prototype.constructor a Employee (hijo).

Employee.prototype.greet = function () {
  if (this.canTalk) {
    console.log("Hola, yo soy " + this.name + ", el " + this.title);
  }
};

var Customer = function (name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;
//Si no aplicas Object.prototype.constructor a Customer,
//tomará prototype.constructor de Person (padre).
//Para evitarlo, aplicamos prototype.constructor a Customer (hijo).

var Mime = function (name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime;
//Si no aplicas Object.prototype.constructor a Mime,
//tomará prototype.constructor de Person (padre).
//Para evitarlo, aplicamos prototype.constructor a Mime (hijo).

var bob = new Employee("Bob", "Constructor");
var joe = new Customer("Joe");
var rg = new Employee("Red Green", "Reparador");
var mike = new Customer("Mike");
var mime = new Mime("Mime");

bob.greet();
// Hola, yo soy Bob, el Constructor

joe.greet();
// Hola, yo soy Joe

rg.greet();
// Hola, yo soy Red Green, el Reparador

mike.greet();
// Hola, yo soy Mike

mime.greet();
```
