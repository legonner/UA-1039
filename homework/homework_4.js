'use strict';

// task 1 | Array Index Sum

const sumSliceArray = (arr, first, second) => {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error('The first argument must be a non-empty array.');
    }
    if (first === second) {
        throw new Error('The provided indices must be different.');
    }
    if (!Number.isInteger(first) || !Number.isInteger(second)) {
      throw new Error('The second and third arguments must be integers.');
    }
    if (first < 0 || first >= arr.length || second < 0 || second >= arr.length) {
      throw new Error('The provided indices are outside the array bounds.');
    }
  
    return arr[first] + arr[second];
  };
  
  try {
    const arrOfNum = [1, 2, 3, 4, 5];
    const result = sumSliceArray(arrOfNum, 2, 4);
    console.log(result);
  } catch (error) {
    console.error(`${error.name} - ${error.message}`);
  }
  
  // task 2 | Movie Access Control
  
  const validateAgeInput = (name, age, status) => {
    if (!name.trim()) {
      throw new Error('The field is empty! Please enter your name.');
    }
    if (!Number.isFinite(age)) {
      throw new Error('Invalid age value. Please enter a valid numeric age.');
    }
    if (age < 18 || age > 70) {
      throw new RangeError('You are not within the allowed age range to watch the movie.');
    }
    if (!status || !['admin', 'moderator', 'user'].includes(status.trim().toLowerCase())) {
      throw new EvalError('Invalid status. Please enter either "admin", "moderator" or "user".');
    }
  };
  
  const checkAge = async () => {
    const name = prompt('Please enter your name:');
    const age = +prompt('Please enter your age:');
    const status = prompt('Please enter your status (admin, moderator or user):');
  
    validateAgeInput(name, age, status);
    return { name, age, status };
  };
  
  checkAge()
    .then((userData) => {
      alert(`Hello ${userData.name.trim()}! Enjoy watching movies!`);
    })
    .catch((error) => {
      alert(`Error: ${error.name} - ${error.message}`);
    });
  
  // task 3 | Rectangle Area Calculator
  
  const isRectangleValid = (width, height) => {
    if (!Number.isFinite(width) || !Number.isFinite(height)) {
        throw new Error('Both width and height must be numbers.');
    }
    if (width <= 0 || height <= 0) {
      throw new RangeError('Invalid input value. Please enter a numeric value bigger than zero.');
    }
  };
  
  const calcRectangleArea = (width, height) => {
    isRectangleValid(width, height);
    return width * height;
  };
  
  try {
    const area = calcRectangleArea(5, 10);
    console.log('Area of the rectangle:', area);
  } catch (error) {
    console.error(`${error.name} - ${error.message}`);
  }
  
  // task 4 | Month Name Converter
  
  class MonthException {
    constructor(message) {
      this.name = 'MonthException';
      this.message = message;
    }
  }
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const validateMonthInput = (month) => {
    if (!Number.isInteger(month) || month < 1 || month > 12) {
      throw new MonthException('Incorrect month number');
    }
  };
  
  const showMonthName = (month) => {
    validateMonthInput(month);
    return months[month - 1];
  };
  
  try {
    console.log(showMonthName(5));
    console.log(showMonthName(14));
  } catch (error) {
    console.error(`${error.name} ${error.message}`);
  }
  
  // task 5 | Validate and Retrieve User IDs
  
  const showUser = (id) => {
    if (id < 0) throw new Error(`ID must not be negative: ${id}`);
    return { id };
  }
  
  const showUsers = (ids) => {
    const validUsers = [];
    ids.forEach(id => {
      try {
        validUsers.push(showUser(id));
      } catch (error) {
        console.log(error.message);
      }
    });
    return validUsers;
  }