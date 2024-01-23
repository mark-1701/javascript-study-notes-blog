# weakset y weakmap
Los WeakMap y WeakSet son estructuras de datos en JavaScript introducidas en ECMAScript 2015 (también conocido como ES6) que proporcionan colecciones de datos débiles, lo que significa que no impiden que los objetos que contienen sean eliminados por el recolector de basura si no hay otras referencias a esos objetos en el programa. Aquí hay una breve descripción de cada uno:

## weakset
Similar a un Set, pero solo acepta objetos y mantiene referencias débiles a esos objetos. Al igual que con WeakMap, si no hay otras referencias al objeto en el programa, puede ser eliminado por el recolector de basura.
Útil cuando necesitas almacenar un conjunto de objetos sin prevenir su recolección de basura.

### Métodos principales
```add(value):``` Agrega un nuevo elemento al conjunto.
```has(value): ```Verifica si el conjunto contiene un elemento dado.
```delete(value): ```Elimina un elemento del conjunto.

## weakmap
Similar a un Map, pero solo acepta objetos como claves y mantiene referencias débiles a esas claves. Esto significa que si no hay otras referencias al objeto utilizado como clave, el objeto puede ser eliminado por el recolector de basura.
Útil cuando deseas asociar datos adicionales con objetos sin impedir que esos objetos sean eliminados si no hay otras referencias a ellos.

### Métodos principales
````set(key, value)````: Establece el valor asociado con la clave.
```get(key)```: Obtiene el valor asociado con la clave.
```has(key)```: Verifica si hay una entrada para la clave dada.
```delete(key)```: Elimina la entrada correspondiente a la clave.

## Características comunes de WeakMap y WeakSet
- **No son iterables:** A diferencia de ```Map``` y ```Set```, no proporcionan métodos como ```keys()```, ```values()```, o ```entries()```. No se puede iterar directamente sobre los elementos almacenados.
- **No exponen métodos para obtener tamaño:** No tienen un método ```size``` como ```Map``` y ```Set``` para obtener la cantidad de elementos almacenados.
- **No tienen métodos claros para limpiar todos los elementos:** No proporcionan métodos integrados para eliminar todos los elementos, ya que se espera que el recolector de basura se encargue de la eliminación de los objetos.

## Ejemplo weakset
```javascript
let weakSet = new WeakSet();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

// agregar objetos al WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

// verificar la existencia de objetos en el WeakSet
console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

// eliminar un objeto del WeakSet
weakSet.delete(obj1);

console.log(weakSet.has(obj1)); // false
console.log(weakSet.has(obj2)); // true
```
## Ejemplo weakmap
```javascript
let weakMap = new WeakMap();

let key1 = { id: 1 };
let key2 = { id: 2 };

// asociar valores con objetos en el WeakMap
weakMap.set(key1, "Valor asociado con key1");
weakMap.set(key2, "Valor asociado con key2");

// obtener valores asociados con objetos
console.log(weakMap.get(key1)); // "Valor asociado con key1"
console.log(weakMap.get(key2)); // "Valor asociado con key2"

// verificar la existencia de objetos en el WeakMap
console.log(weakMap.has(key1)); // true
console.log(weakMap.has(key2)); // true

// eliminar una entrada del WeakMap
weakMap.delete(key1);

console.log(weakMap.has(key1)); // false
console.log(weakMap.has(key2)); // true
```
