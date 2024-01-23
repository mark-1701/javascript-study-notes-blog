# prototypes

os prototipos son un concepto fundamental en JavaScript y comprendelos te ayudará a entender mejor cómo funciona la herencia en este lenguaje. En JavaScript, cada objeto tiene un prototipo, que es otro objeto al cual se le delega la búsqueda de propiedades que no se encuentran en el objeto actual. Los prototipos forman una cadena llamada "cadena de prototipos" o "prototype chain".

```javascript
function Person(name, lastName, age, gender, interests) {
  // definiendo de propiedades y métodos
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  //...
}

let person1 = new Person("Bob", "Smith", 32, "hombre", ["music", "skiing"]);

console.log(person1); // {name: 'Bob', lastName: 'Smith', age: 32, gender: 'hombre', interests: Array(2)}
console.log(person1.valueOf()); // {name: 'Bob', lastName: 'Smith', age: 32, gender: 'hombre', interests: Array(2)}

// proto
console.log(person1.__proto__); // constructor: ƒ Person(name, lastName, age, gender, interests)

// prototype (solo disponible Person)
console.log(Person.prototype); // constructor ƒ Person(name, lastName, age, gender, interests)

console.log(Object.prototype);
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// __proto__: (...)
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()
```

## create()

Lo que hace create() es crear un nuevo objeto a partir de un objeto prototipo específico. Aquí, la person2 se crea utilizando la person1 como objeto prototipo.

```javascript
var person2 = Object.create(person1);
console.log(person2.__proto__); // {name: 'Bob', lastName: 'Smith', age: 32, gender: 'hombre', interests: Array(2)}
```

## constructor

```javascript
console.log(person1.constructor); // Person(name, lastName, age, gender, interests) {...}

let person3 = new person1.constructor("Karen", "Stephenson", 26, "female", ["playing drums", "mountain climbing"]);

console.log(person3.name, person3.age, person3.interests); // Karen 26 (2) ['playing drums', 'mountain climbing']

// nombre del constructor de instancia
console.log(person1.constructor.name); // Person
```

## Modificar prototipos

Vamos a echar un vistazo a un ejemplo para modificar la propiedad `prototype` de una función constructor (los métodos añadidos a la propiedad prototipo están disponibles en todas las instancias de los objetos creados a partir del constructor).

```javascript
Person.prototype.farewell = function () {
  console.log(this.name + " ha dejado el edificio. ¡Adiós por ahora!");
};

person1.farewell(); // Bob ha dejado el edificio. ¡Adiós por ahora!

//  Esto es realmente útil, pero lo que es más útil es que toda la cadena de herencia se ha actualizado dinámicamente; automáticamente hace que este nuevo método esté disponible en todas las instancias del objeto creadas desde el constructor
```

## Ejemplo Jon Mircha

```javascript
const animal = {
  nombre: "Snoppy",
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  }
};
const animal2 = {
  nombre: "Lola Bunny",
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  }
};

console.log(animal);
// Object
// nombre: "Snoppy"
// sonar: ƒ sonar()
console.log(animal2);
// Object
// nombre: "Lola Bunny"
// sonar: ƒ sonar()

// funcion constructora
function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;

  //Métodos
  this.sonar = function () {
    console.log("Hago sonidos porque estoy vivo");
  };
  this.saludar = function () {
    console.log(`Hola me llamno ${this.nombre}`);
  };
}

const snoppy = new Animal("Snoppy", "Masculino");
// Animal
// genero: "Masculino"
// nombre: "Snoppy"
// saludar: ƒ ()
// sonar: ƒ ()
const lolaBunny = new Animal("Lola Bunny", "Hembra");
// Animal
// genero: "Hembra"
// nombre: "Lola Bunny"
// saludar: ƒ ()
// sonar: ƒ ()

// Podemos asignar los metodos posteriormente
function Animal2(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
}

Animal2.prototype.saludar = function () {
  console.log(`Hola me llano ${this.nombre}`);
};
const hachiko = new Animal2("hachiko", "Masculino");
// Animal
// genero: "Masculino"
// nombre: "hachiko"
// [[Prototype]]: Object
//   saludar: ƒ ()
//   constructor: ƒ Animal2(nombre, genero)
//   [[Prototype]]: Object
hachiko.saludar(); // Hola me llamno Snoppy
```

## Ejemplo herencia prototipica

```javascript
function Animal2(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
}

function Perro(nombre, genero, tamanio) {
  this.super = Animal2;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

// Perro está heredando de Animal
Perro.prototype = new Animal2();
// Le asignamos su propio constructor
Perro.prototype.constructor = Perro;

// sobreescritura metodos pabre en hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
};
Perro.prototype.ladrar = function () {
  console.log("Guauuuuu Guauuuuu!");
};

const laika = new Perro("laika", "Masculino", "Mediano");
console.log(laika);
// Perro
//   genero: "Masculino"
//   nombre: "laika"
//   super: ƒ Animal2(nombre, genero)
//   tamanio: "Mediano"
//     [[Prototype]]: Animal2
//       constructor: ƒ Perro(nombre, genero, tamanio)

laika.ladrar(); // Guauuuuu Guauuuuu!
```
