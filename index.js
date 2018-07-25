
const returnFirstTwoDrivers = function (array) { 
  let newArray=[array[0], array[1]];
  
  return newArray;}
  
  
  const returnLastTwoDrivers = function (array) {
    let newArray = [array[(array.length-2)], array[(array.length-1)]]
    return newArray;
  }
  
  const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
  
  function createFareMultiplier(num) {
    return function (num) {return num*num;}
  }
  
  function fareDoubler (){} 