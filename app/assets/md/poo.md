# poo

JavaScript introdujo la palabra clave class en ECMAScript 2015. Hace que JavaScript parezca un lenguaje POO. Pero solo es azúcar sintáctico sobre la técnica de creación de prototipos existente. Continúa con la creación de prototipos en segundo plano, pero hace que el cuerpo exterior parezca POO. Ahora veremos cómo es posible.

````javascript
class Animales {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    canta() {
        return `${this.nombre} puede cantar`;
    }

    baila() {
        return `${this.nombre} puede bailar`;
    }
}

class Gatos extends Animales {
    constructor(nombre, edad, colorBigotes) {
        super(nombre, edad);
        this.colorBigotes = colorBigotes;
    }

    bigotes() {
        return `Tengo bigotes color ${this.colorBigotes}`;
    }

}

let clara = new Gatos("Clara", 33, "índigo");```
console.log(clara.canta());
console.log(clara.bigotes());
// Resultado esperado
// "Clara puede cantar"
// "Tengo bigotes color índigo"

console.log(clara);
//   Gatos {nombre: 'Clara', edad: 33, colorBigotes: 'índigo'}
//     colorBigotes: "índigo"
//     edad: 33
//     nombre: "Clara"
//     [[Prototype]]: Animales
//       bigotes: ƒ bigotes()
//       constructor: class Gatos
//       [[Prototype]]: Object
````

### Otros métodos importantes

**Object.create()**: Este método crea un nuevo objeto con el objeto especificado como prototipo. Es una forma de establecer la herencia entre objetos.

```javascript
var padre = {
  saludar: function () {
    console.log("Hola, soy el padre.");
  }
};

var hijo = Object.create(padre);
hijo.saludar(); // Salida: Hola, soy el padre.
```

**prototype**: La propiedad prototype se utiliza para establecer el prototipo de un objeto constructor. Puedes agregar propiedades y métodos al prototipo para que estén disponibles para todas las instancias creadas por ese constructor.

```javascript
function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.saludar = function () {
  console.log("Hola, soy " + this.nombre);
};

var persona1 = new Persona("Alice");
persona1.saludar(); // Salida: Hola, soy Alice.
```

**hasOwnProperty()**: Este método comprueba si una propiedad pertenece al propio objeto, y no a su cadena de prototipo.

```javascript
var obj = {
  prop1: "valor1"
};

console.log(obj.hasOwnProperty("prop1")); // true
console.log(obj.hasOwnProperty("toString")); // false
```

**isPrototypeOf()**: Este método verifica si un objeto es el prototipo de otro objeto.

```javascript
var padre = {
  saludar: function () {
    console.log("Hola, soy el padre.");
  }
};

var hijo = Object.create(padre);

console.log(padre.isPrototypeOf(hijo)); // true
```

**Object.getPrototypeOf()**: Este método devuelve el prototipo del objeto especificado.

```javascript
var padre = {
  saludar: function () {
    console.log("Hola, soy el padre.");
  }
};

var hijo = Object.create(padre);

console.log(Object.getPrototypeOf(hijo) === padre); // true
```
