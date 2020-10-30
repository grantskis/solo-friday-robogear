function inputGood(input) {
  if (isNaN(input)) {
    return "is not a number" 
  } else {
    return "is a number"
  };
};
let apple = "7";
let testerApple = parseInt(apple);
inputGood(testerApple);

function containsThree(input) {
  if (/3/.test(input) === true) {
    return "contains 3" 
  } else if (/2/.test(input) === true) {
    return "contains 2"
  } else if (/1/.test(input) === true) {
    return "contains 1" 
  } else {
    return "does not contain any of these"
  };
};
let banana = "7";
let testerBanana = parseInt(banana);
containsThree(testerBanana);

function createRange(input) {
  while (input > cantalope.length - 1) {
    cantalope.push(cantalope.length);
  };
};
let cantalope = [0]
createRange()

function negativeRange(input) {
  while ((input * -1) > (dragonfruit.length - 1)) {
    dragonfruit.push(dragonfruit.length * -1)
  };
};
let dragonfruit = [0]
negativeRange()

function positiveOrNot(input) {
  if (input > 0) {
    return "positive number"
  } else if (input < 0) {
    return "negative number"
  } else {
    return "is zero"
  };
};
let eggplant = ""
positiveOrNot(eggplant)







// nesting functions to get NaN, Positive, Negative ranges.
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
let numberArray = [0]
function buildABear(input) {
  let inputAsNumber = parseInt(input);
  // NaN: Y/N section
  if 
    (isNaN(inputAsNumber)) {
    return "is not a number"
  }
  else { 
    // IS A NUMBER:
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