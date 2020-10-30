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
    finalChain.push($("#NaN").text());
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
      finalChain.push($("#robo3").text());
    } else if (/2/.test(input) === true) {
      finalChain.push($("#robo2").text());
    } else if (/1/.test(input) === true) {
      finalChain.push($("#robo1").text());
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
    $("#neighbor").text("");
    const userNumber = parseInt($("input#number").val());
    chainTheseFunctions(userNumber);
    finalChain.forEach(function(link) {
      $("#neighbor").append("<li>" + link + "</li>");
    });
    $("#output").show();
  });
});