# Propieades dinámicas de objetos

````javascript
const objUsuarios = {
  propiedad: "valor",
  // crear propiedades dinámicas dentro del objeto
  [`id_${Math.round(Math.random() * 100 + 5)}`]: "valor aleatorio"
};
const usuarios = ["Jon", "Irma", "Miguel", "Kala"];

usuarios.forEach((usuario, index) => (objUsuarios[`id_${usuario}`] = usuario));

console.log(objUsuarios);
//{id_Jon: 'Jon', id_Irma: 'Irma', id_Miguel: 'Miguel', id_Kala: 'Kala'}```
````
