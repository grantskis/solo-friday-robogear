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

let chainArray = [0]
function createRange(input) {
  while (input > chainArray.length - 1) {
    chainArray.push(chainArray.length);
    console.log(chainArray);
  };
};
createRange()

let chainArray = [0]
function negativeRange(input) {
  while ((input * -1) > (chainArray.length - 1)) {chainArray.push(chainArray.length * -1)
  };
};
  console.log(chainArray);
  negativeRange()