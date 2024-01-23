# proxy

El objeto `Proxy` permite crear un intermediario para otro objeto, el cual puede interceptar y redefinir operaciones fundamentales para dicho objeto.

Proxy es un objeto que permite la creación de un "intermediario" o "agente" que controla el acceso a otro objeto (llamado "objetivo"). Este agente Proxy puede interceptar y personalizar la manera en que ciertas operaciones son realizadas en el objeto objetivo, como la lectura, escritura, entre otros.

Los Proxies se utilizan para crear un control más fino sobre el comportamiento de los objetos, permitiendo implementar lógica personalizada en las operaciones sobre estos objetos. Al utilizar un Proxy, puedes definir comportamientos específicos para ciertas operaciones sin necesidad de modificar directamente el objeto original.

Un `Proxy` se crea con dos parametros

- `target`: el objeto original que se quiere envolver.
- `handler`: un objeto que define cuáles operaciones serán interceptadas y cómo redefinir dichas operaciones.

```javascript
const target = {
  message1: "hello",
  message2: "everyone"
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);

// el manejador esta vacio, el proxy se comporta como el objeto original
console.log(proxy1.message1); // hello
console.log(proxy1.message2); // everyone
```

## Ejemplo Proxy con set

```javascript
let validator = {
  set: function (obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("La edad no es un entero");
      }
      if (value > 200) {
        throw new RangeError("La edad parece inválida");
      }
    }

    // El comportamiento por defecto es almacenar el valor
    obj[prop] = value;

    // Indica éxito
    return true;
  }
};

const person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = "young"; // Lanza una excepción
person.age = 300; // Lanza una excepción
```

## Ejemplo con validaciones

````javascript
const persona = {
  nombre: "",
  apellido: "",
  edad: 0
};

const manejador = {
  set(obj, prop, valor) {
    // busca en el objeto la listra de atributos, y busca el atributo que estamos introduciendo (si no se encuentra devuelve un -1)
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(`La propiedad "${prop}" no existe en el objeto persona.`);
    }

    if ((prop === "nombre" || prop === "apellido") && !/^[a-zA-Z\s]+$/g.test(valor)) {
      return console.error(`La propiedad ${prop} sólo acepta letras y espacios en blanco.`);
    }

    obj[prop] = valor;
  }
};

const marco = new Proxy(persona, manejador);

marco.nombre = "marco";
marco.apellido = "muralles";
marco.edad = 22;
marco.twitter = "@marco"; // La propiedad "twitter" no existe en el objeto persona.
console.log(marco); // Proxy(Object) {nombre: 'marco', apellido: 'muralles', edad: 22}```
````
