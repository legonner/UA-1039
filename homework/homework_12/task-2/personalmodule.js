// personalmodule.js
const getGreeting = (userName) => {
    const currentHour = new Date().getHours();
    let greeting = '';
  
    if (currentHour >= 0 && currentHour < 12) {
      greeting = `Good morning, ${userName}!`;
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = `Good afternoon, ${userName}!`;
    } else {
      greeting = `Good evening, ${userName}!`;
    }
  
    return greeting;
  };
  
  module.exports = { getGreeting };
  