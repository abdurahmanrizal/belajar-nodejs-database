function TagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test("tag function", () => {
  const name = 'Abdurahman';
  TagFunction`Hello ${name}!, How are you?`;
  TagFunction`Bye ${name}, see you later!`;
})
test("tag function sql", () => {
  const name = 'Abdurahman; DROP TABLE users';
  const age = 27;
  TagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
})