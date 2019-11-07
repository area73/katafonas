const isdivisbleBy = divisor => dividend => dividend % divisor === 0;
const isDivisibleByTree = n => isdivisbleBy(3)(n);
const isDivisibleByFive = n => isdivisbleBy(5)(n);
const isDivisibleBySeven = n => isdivisbleBy(7)(n);
const decomposeNum2Arr = n => Array.from(String(n),Number);

const modTreeIsFoo = n => isDivisibleByTree(n) ? 'Foo' : '';
const modFiveIsBar = n => isDivisibleByFive(n) ? 'Bar' : '';
const modSevenIsQuix = n => isDivisibleBySeven(n) ? 'Quix' : '';

const treeIsFoo = n => n === 3 ? 'Foo':'';
const fiveIsBar = n => n === 5 ? 'Bar':'';
const sevenIsQuix = n => n === 7 ? 'Quix':'';
const tryNumber = (...fn) => n => fn.reduce((acc,curr) => [...acc, curr(n)],[]);
const pipe = (...fn) => n  => fn.reduce((acc,cur) => cur(acc),n);
// f :: n -> []
const translateNumToText = n => tryNumber(
    treeIsFoo,
    fiveIsBar,
    sevenIsQuix,
)(n);

const translateDvisibleNumToText = n => tryNumber(
    modTreeIsFoo,
    modFiveIsBar,
    modSevenIsQuix,
)(n);

const flattenArray = arr => arr.reduce((acc,cur) => [...acc, ...cur],[]);
const removeBlank = arr => arr.filter(item => item !== '');
const arr2String = arr => arr.join('');
const mapTo = fn => arr => arr.map(fn);
const flattenResult = pipe(flattenArray, removeBlank, arr2String);
const modulosText = pipe(
    translateDvisibleNumToText,
    flattenResult
);
const numbersText = pipe(
    decomposeNum2Arr,
    mapTo(translateNumToText),
    flattenResult
)

const fooBarQuix = n => n && modulosText(n) + numbersText(n) || n;

// console.log(fooBarQuix(77))

export default fooBarQuix;
