_This project is not currently in presentation format. Please come back later._  

## _"Mister Robogear's Neighborhood"_  

### _An HTML website using jQuery, bootstrap, and custom JavaScript and CSS, October 30th, 2020_  

#### Description  

This project should produce webpage able to allow the user to submit one number and be returned a range of numbers from zero to their selection. Additionally, numbers containing certain integers will be completely replaced with a set of phrases.  

#### Project Criteria:  

As abbreviated from [Epicodus](https://epicodus.com) program's cirriculum:  

> Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"  
> 
> Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"  
> 
> Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"  
> 
> \[...\]
> 
>  Example: If a user inputs a `5`, the program should display a list of values: `"0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5`  

#### Project Specs:  
- _This project is not currently in presentation format. Please come back later._

Describe: inputGood()
Test: "Verify that the user has submitted a number for the range calcultion."
Code: `{ if (isNaN(input)) {return false} else {return true} }`
Expect(7).toEqual(true); Expect("turkey").toEqual(false).

Describe: containsThree(), containsTwo(), containsOne
Test: "Check if a given number contains the specified integer."
Code: `{ if (/3/.test(input) === true) {return true} else {return false}; }`
Expect(13).toEqual(true) and Expect(20).toEqual(false) for containsThree()
Expect(13).toEqual(false) and Expect(20).toEqual(true) for containsTwo() 

Describe: createRange();
Test: "Create an array with each element a number, starting at zero and ending at the user's input"
Code: `{ while (input > array.length - 1) {array.push(array.length); }`
Expect:createRange(7).toEqual[0, 1, 2, 3, 4, 5, 6, 7]

Describe: negativeRange();
Test: "Create an array with each element a number, starting at zero and ending at the user's input, when the user's input is negative."
Code: `{ while ((input * -1) > (array.length - 1)) {array.push(array.length * -1)} `
Expect(-4).toEqual[0, -1, -2, -3, -4]

Describe: positiveOrNot();
Test: "Determine whether a user-input number is positive or negative."
Code:
Expect(4).toEqual(positive); Expect(-4).toEqual(negative);
<!-->




















</--> 
#### Known Issues / Bugs:    
- _This project is not currently in presentation format. Please come back later._

#### Setup:  
###### To view live on the web:  
please wait for futher updates.  
<!-- To view live on the web, please visit [this GitHub.io page](https://grantskis.github.io/) -->

###### To view locally on your machine:  
please wait for further updates.  
<!-- To view locally on your machine, please:
1. Find the green **Code** button above the file list on this project's [main GitHub repository page](https://grantskis.github.io/ [CHANGE THIS LINK] ).
2. Select the button to open a drop-down menu. Select "Open with GitHub Desktop" or, if you do not have this program installed, download the compressed .zip file.
3. Extract the .zip file to your local machine.
4. Use your browser of choice to launch _index.html_.
5. Directions were accurate as of Oct. 30, 2020. If GitHub has since changed their web UI, please see [the GitHub help docs](https://docs.github.com/en) for up-to-date information. -->

###### To clone this project to your machine:  
please wait for further updates.  

<!-- To clone this project to your machine, please:  
1. Launch your terminal of choice. 

> The following directions are based on Git Bash for a Windows machine; you may have to adjust terminology based on your local specs.

2. Navigate to the containing directory you would like to clone this project.
3. Input:
`$ git clone https://github.com/grantskis/[ CHANGE THIS PART ]`
4. This will clone the project to a folder called "roman-numerals." If you wish to clone it into a directory of a different name, append the new folder name to the end of the string, like so:
`$ git clone https://github.com/grantskis/[ CHANGE THIS PART ] NEW-FOLDER` -->

#### Technologies Used:  
- Website, CSS, and JavaScript coded in Visual Studio Code.  
- JavaScript testing, breaking, and retesting conducted in [jsconsole](https://jsconsole.com/).  

##### License
- _GNU AGPLv3_  
- Project copyright (c) 2020 **_Shannon Grantski_**  
- Project criteria quoted text copyright (c) 2020 Epicodus, Inc  