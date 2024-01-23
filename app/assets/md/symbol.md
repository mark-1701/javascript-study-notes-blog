# Symbol

Symbol es un objeto incorporado cuyo constructor devuelve un symbol primitivo — también llamado Symbol value o simplemente Symbol — que está garantizado que sea único. Los Symbols se utilizan a menudo para añadir claves de propiedades únicas a un objeto que no sean iguales a las claves que cualquier otro código pueda añadir al objeto, y que están ocultas de cualquier mecanismo que otro código utilice normalmente para acceder al objeto. Esto permite una forma de **encapsulation** débil, o una forma débil de **ocultación de información**.

```javascript
let id = Symbol("id");
let id2 = Symbol("id");

console.log(id === id2); // false
console.log(id, id2); // Symbol(id) Symbol(id)
console.log(typeof id, typeof id2); // symbol symbol

const NOMBRE = Symbol("nombre");
const APELLIDO = Symbol("apellido");
const SALUDAR = Symbol("saludar"); //solo son nombres de referencia7

const persona = {
  [NOMBRE]: "Jon"
};
console.log(persona);
// Symbol(nombre): "Jon"

// nuevo atributo no Symbol
persona.NOMBRE = "Jonathan MirCha";
console.log(persona);
// NOMBRE: "Jonathan MirCha"
// Symbol(nombre): "Jon"

console.log(persona.NOMBRE); // Jonathan MirCha
console.log(persona[NOMBRE]); // Jon

// ASIGNAR UNA FUNCION
// ****************************************
persona[SALUDAR] = () => {
  console.log("Hola");
};
// ejecutar funcion symbol
persona[SALUDAR]();

persona[APELLIDO] = "Muralles";
console.warn(persona);
// NOMBRE: "Jonathan MirCha"
// Symbol(apellido): "Muralles"
// Symbol(nombre): "Jon"
// Symbol(saludar): () => { console.log("Hola")

// FOR IN PARA LOS SIMBOLOS
// ****************************************
// solo detecta la propiedad NOMBRE
// los simbolos se mantienen privados
for (const propiedad in persona) {
  console.log(propiedad); // NOMBRE
  console.log(persona[propiedad]); // Jonathan MirCha
}

//imprime los simbolos
console.log(Object.getOwnPropertySymbols(persona));
// [Symbol(nombre), Symbol(saludar), Symbol(apellido)]
```
## Otro ejemplo

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let id = Symbol("id");
person[id] = 140353;
// Now person[id] = 140353
// but person.id is still undefined
```
