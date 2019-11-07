const fooBarQuix=r=>r&&[r,...Array.from(String(r),Number)].reduce((r,o,a,e)=>r+(0===a?o%3==0?"Foo":o%5==0?"Bar":o%7==0?"Quix":",":3===o?"Foo":5===o?"Bar":7===o?"Quix":","),"").replace(/,/g,"")||r;

console.log(fooBarQuix(11));
export default fooBarQuix;
