
const modTreeIsFoo = n => n % 3 === 0 ?  'Foo' : '';
const modFiveIsBar = n => n % 5 === 0 ? 'Bar' : '';
const mosSevenIsQuix = n => n % 7 === 0 ? 'Quix' : '';

const treeIsFoo = n => n === 3 ?  'Foo' : '';
const fiveIsBar = n => n === 5 ? 'Bar' : '';
const sevenIsQuix = n => n === 7 ? 'Quix' : '';


const tryModules = arr => n => arr.map(item => item(n));
const tryNumbers = arr => inputArr => inputArr.map(tryModules(arr));
const numToDigits = n => Array.from(String(n),Number)
const merge = (...arr) => [...arr];
const  flattenDeep = arr => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
const removeBlanks = arr => arr.filter(item => item !== '');
const arrToString = arr => arr.join('');
const fooBarQuix = n => {
    const modulos = tryModules([modTreeIsFoo,modFiveIsBar,mosSevenIsQuix])(n);
    const numbers = tryNumbers([treeIsFoo,fiveIsBar,sevenIsQuix])(numToDigits(n));
    const mergedArrays = merge(modulos, numbers);
    const flattedArray = flattenDeep(mergedArrays);
    const cleanedArray =  removeBlanks(flattedArray);
    const stringArray = arrToString(cleanedArray);
    return n && stringArray ? stringArray : n;
}




console.log(fooBarQuix(11));

export default fooBarQuix;


