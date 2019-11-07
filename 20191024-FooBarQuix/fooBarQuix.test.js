
import fooBarQuix from './rodrigo2.fooBarQuix';

describe('FooBarQuix test case', () => {
  test("output only the number", () => {
    expect(fooBarQuix(1))
        .toEqual(1);
    expect(fooBarQuix(0))
        .toEqual(0);
    expect(fooBarQuix(8))
        .toEqual(8);
    expect(fooBarQuix(94))
        .toEqual(94);
  });
  test("output Foo", () => {
    expect(fooBarQuix(3))
        .toEqual('FooFoo');
    expect(fooBarQuix(6))
        .toEqual('Foo');
    expect(fooBarQuix(13))
        .toEqual('Foo');
    expect(fooBarQuix(23))
        .toEqual('Foo');
    expect(fooBarQuix(33))
        .toEqual('FooFooFoo');
  });

  test("output Bar", () => {
    expect(fooBarQuix(5))
        .toEqual('BarBar');
    expect(fooBarQuix(10))
        .toEqual('Bar');
    expect(fooBarQuix(25))
        .toEqual('BarBar');
    expect(fooBarQuix(55))
        .toEqual('BarBarBar');
  });
  test("output Quix", () => {
    expect(fooBarQuix(7))
        .toEqual('QuixQuix');
    expect(fooBarQuix(17))
        .toEqual('Quix');
    expect(fooBarQuix(77))
        .toEqual('QuixQuixQuix');
  });

  test("edge cases", () => {
    expect(fooBarQuix(72))
        .toEqual('FooQuix');
    expect(fooBarQuix(51))
        .toEqual('FooBar');
    expect(fooBarQuix(53))
        .toEqual('BarFoo');
    expect(fooBarQuix(75))
        .toEqual('FooBarQuixBar');
  });
});


