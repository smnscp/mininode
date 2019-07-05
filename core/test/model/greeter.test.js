import { Greeter } from '../../src/model/greeter';

test('Greeter instantiation', () => {
  const greeter = new Greeter();
  expect(greeter).toBeInstanceOf(Greeter);
});
