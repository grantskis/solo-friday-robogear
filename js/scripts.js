// BUSINESS LOGIC
let numberArray = [];
let finalChain = [];

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
  if (isNaN(input)) {
    finalChain = ["is not a number"];
  }
  else { 
    numberArray = [0]
    if (input > 0) {
      positiveRange(input);
    } else if (input < 0) {
      negativeRange(input);
    } else if (input === 0) {
      finalChain = [0]
    } else {
      finalChain = ["is otherwise broken"]
    }
  }
};


function chainTheseFunctions(input) {
  numberArray = [];
  finalChain = [];
  buildABear(input);
    numberArray.forEach(function(input) {
    if (/3/.test(input) === true) {
      finalChain.push("Contains 3");
    } else if (/2/.test(input) === true) {
      finalChain.push("Contains 2");
    } else if (/1/.test(input) === true) {
      finalChain.push("Contains 1");
    } else if (input !== 0) {
      finalChain.push(input);
    } else {
      return "error"
    };
  });
};


// USER INTERFACE LOGIC
$(document).ready(function() {
  $("#box").submit(function(event) {
    event.preventDefault();
    const userNumber = parseInt($("input#number").val());
    chainTheseFunctions(userNumber);    
    console.log(numberArray);
    console.log(finalChain);
    $("#neighbor").text(finalChain);
    $("#output").show();
  });
});