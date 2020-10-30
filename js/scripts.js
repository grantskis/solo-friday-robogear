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
