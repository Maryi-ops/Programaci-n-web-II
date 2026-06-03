const suma = require('./suma');

test("La funcion suma debe devolver suma correcta", () => {
  expect(suma(1, 2)).toBe(3);// importa la función suma desde el archivo suma.js
});


