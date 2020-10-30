function redeactedCode() {
// function inputGood(input) {
//   if (isNaN(input)) {
//     return "is not a number" 
//   } else {
//     return "is a number"
//   };
// };
// let apple = "7";
// let testerApple = parseInt(apple);
// inputGood(testerApple);
// function createRange(input) {
//   while (input > cantalope.length - 1) {
//     cantalope.push(cantalope.length);
//   };
// };
// let cantalope = [0]
// createRange()
// function negativeRange(input) {
//   while ((input * -1) > (dragonfruit.length - 1)) {
//     dragonfruit.push(dragonfruit.length * -1)
//   };
// };
// let dragonfruit = [0]
// negativeRange()
// 
// function positiveOrNot(input) {
//   if (input > 0) {
//     return "positive number"
//   } else if (input < 0) {
//     return "negative number"
//   } else {
//     return "is zero"
//   };
// };
// let eggplant = ""
// positiveOrNot(eggplant)
};


numberArray.forEach(function(input) {
  if (/3/.test(input) === true) {
    return "contains 3" 
  } else if (/2/.test(input) === true) {
    return "contains 2"
  } else if (/1/.test(input) === true) {
    return "contains 1" 
  } else {
    return "does not contain any of these"
  };
});
let banana = numberArray
containsThree(banana);





//////////////////////////////////////////////

let numberArray = [];
function positiveRange(rangeInput) {
  while (rangeInput > numberArray.length - 1) {
    numberArray.push(numberArray.length);
  };
};
function negativeRange(rangeInput) {
  while ((rangeInput * -1) > (numberArray.length - 1)) {
    numberArray.push(numberArray.length * -1);
  };
};

function buildABear(input) {
  const inputAsNumber = parseInt(input);
  if (isNaN(inputAsNumber)) {
    numberArray = ["is not a number"];
  }
  else { 
    numberArray = [0]
    if (inputAsNumber > 0) {
      positiveRange(inputAsNumber);
    } else if (inputAsNumber < 0) {
      negativeRange(inputAsNumber);
    } else if (inputAsNumber === 0) {
      return numberArray
    } else {
      return "is otherwise broken"
    }
  }
};
buildABear();
let mixedArray = [];
numberArray.forEach(function(input) {
  if (/3/.test(input) === true) {
    mixedArray.push("Contains 3");
  } else if (/2/.test(input) === true) {
    mixedArray.push("Contains 2");
  } else if (/1/.test(input) === true) {
    mixedArray.push("Contains 1");
  } else {
    mixedArray.push(input);
  };
});
console.log(mixedArray)

