const fooBarQuix = n =>
  (n &&
    [n, ...Array.from(String(n), Number)]
      .reduce((acc, cur, idx, arr) =>
          acc + (idx === 0
            ? cur % 3 === 0 ? "Foo" : "," && cur % 5 === 0 ? "Bar" : "," && cur % 7 === 0 ? "Quix" : ","
            : cur === 3 ? "Foo" : "," && cur === 5 ? "Bar" : "," && cur === 7 ? "Quix" : ","), "")
        .replace(/,/g, "")) || n;

console.log(fooBarQuix(11));
export default fooBarQuix;
