// модуль 2 зад 8/32
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];


// модуль 2 зад 9/32
function getExtremeElements(array) {
    // Change code below this line
  array = [array[0], array[array.length - 1]];
    return array;
  }


  // модуль 2 зад 10/32
  function splitMessage(message, delimeter) {
    let words;
    // Change code below this line
  words = message.split(delimeter);
    // Change code above this line
    return words;
  }
  

  // модуль 2 зад 11/32
  function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
   let price = message.split(' ');
 return price.length * pricePerWord;
 }


 // модуль 2 зад 12/32
 function makeStringFromArray(array, delimeter) {
    let string;
    // Change code below this line
  string = array.join(delimeter);
  
  
    // Change code above this line
    return string;
  }


