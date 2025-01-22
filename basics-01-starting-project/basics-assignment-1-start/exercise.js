// Exercise: Functions
// Time to practice functions!

// Your task is to define two new functions:

// A function called subtract which takes two numbers as inputs and returns the difference.

// A second function, called stringify, which takes a number as an input and returns a string that includes the number (e.g., "Result: 10" for the input 10).

// The first function (subtract) should be callable like this:

// subtract(12, 10);
// and then return 2 (for this example, where 12 and 10 are passed as values).

// The second function (stringify) should be callable like this:

// stringify(10);
// and then return a string that includes the number - for example "Result: 10".



// Todo: Your solution code goes here
function substract(a,b) {
    const result = a - b;
    return result;
}

substract(12,10)
function stringnify(num) {
    let result = `Result: ${num}`;
    
}

stringnify(10)



// Exercise: Executing Functions Directly & Indirectly
// For this exercise, you should create two new functions:

// A double function that takes a single value and returns the doubled value (e.g., returns 4 for input 2)

// A transform function that takes two inputs:

// A number as a first argument

// Another function (!) as the second argument

// For the function that should be passed to transform, the goal is to call that received function inside of transform and pass the number argument into it. The result produced by calling that received function (b) with the received number (a) inside of transform should then be returned by transform.

// I.e., transform should be callable like this:

// transform(10, double);
// And this should return 20 as a value (because double should be executed inside of transform and receive 10 as an input there).