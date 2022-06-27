# Balanced Brackets

Given the string **[()]{}{\[()()\]()}**, write a function that takes a string parameter containing brackets, determine if all brackets have a matching counterpart.

---

## Description

The code is structured as several functions with a primary controller exported to the application.

### Reset Display

A function that resets critical components of the display to ensure correct viewing by hiding the error and results elements.

### Get Values

A function that gets the value of 'userString' from the user interface. Returns the value and whether it is valid input.

### Display Error

A function that reveals an error message hidden from view. The message indicates that user must enter a string.

### Check Bracket

A function that takes an array and a string as input and checks if the string matches the last item in the array. Returns true on a match and false otherwise.

### Check Balanced

Loops over the user provided string. Pushes open-brackets to an array. Checks for a match to close-brackets. Pops the match off the stack if found, returns false if not found.

### Display Result

A function that takes a boolean value indicating whether the string contains balanced brackets. If the boolean is true a message is displayed indicating that the brackets are balanced, if false the message indicates the brackets are not balanced.

### Brackets

The main application function. Calls getValues to get and validate user input. Then displays an error if getValues finds an error in input. Otherwise, calls checkBalanced followed by displayResult to generate and display a message to the user.
