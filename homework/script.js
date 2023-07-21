// task 1 | Unique Elements in Array

const compact = (arr) => [...new Set(arr)];

// task 2 | Create Array with Range

const createArray = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

// task 3 | Print Range with Repetition

const printRange = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => Array(i + 1).fill(start + i)).flat(1);

// task 4 | Generate Random Array

const randArray = (k) => Array.from({ length: k }, () => Math.floor(Math.random() * 500) + 1);

// task 5 | Filter Arrays by Data Type

const groupDataTypes = (arr) => {
    return arr.flat(Infinity).reduce((obj, e) => {
      const type = typeof e;
      obj[type] = obj[type] ? [...obj[type], e] : [e];
      return obj;
    }, {});
  };
    
// task 6 | Arithmetic Operator

const calc = (a, b, op) => {
    return op === 1 ? a - b :
           op === 2 ? a * b :
           op === 3 ? (b !== 0 ? a / b : 'Error: Division by zero') :
           a + b;
  };
  
// task 7 | Check Uniqueness

const findUnique = (arr) => arr.length === new Set(arr).size;

// Additional task | Check Password

const create = (expectedPassword) => (inputPassword) => inputPassword === expectedPassword;
