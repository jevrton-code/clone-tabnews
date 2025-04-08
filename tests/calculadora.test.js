const calculadora = require("../models/calculadora.js");

/* SOMA */
test("somar 2 + 2 deve retornar 4", () => {
  expect(calculadora.somar(2, 2)).toBe(4);
});

test("somar 2 + 3 deve retornar 5", () => {
  expect(calculadora.somar(2, 3)).toBe(5);
});

/* SUBTRACAO */
test("subtrair 5 - 2 deve retornar 3", () => {
  expect(calculadora.subtrair(5, 2)).toBe(3);
});

test("subtrair 5 - 3 deve retornar 2", () => {
  expect(calculadora.subtrair(5, 3)).toBe(2);
});

/* MULTIPLICACAO */
test("multiplicar 2 * 3 deve retornar 6", () => {
  expect(calculadora.multiplicar(2, 3)).toBe(6);
});

test("multiplicar 2 * 4 deve retornar 8", () => {
  expect(calculadora.multiplicar(2, 4)).toBe(8);
});

/* DIVISAO */
test("dividir 6 / 2 deve retornar 3", () => {
  expect(calculadora.dividir(6, 2)).toBe(3);
});

test("dividir 6 / 3 deve retornar 2", () => {
  expect(calculadora.dividir(6, 3)).toBe(2);
});

test("dividir 6 / 0 deve retornar Infinity", () => {
  expect(calculadora.dividir(6, 0)).toBe(Infinity);
});

test("dividir 0 / 6 deve retornar 0", () => {
  expect(calculadora.dividir(0, 6)).toBe(0);
});
