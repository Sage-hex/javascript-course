Question 1,
what is a variable?
A data container where the data can change during program execution

2. What is a constant?
It's a data container where the value cannot be altereed after is has been declared

3. In the following example - what's the variable and what's the data of the variable?

let userAge = 30;

userAge is the variable, 30 is the data

4. Could you replace this snippet

let age = 30;
alert(age);
with this one

alert(30);
and still get the same result?
yes

5. Question 5:
Why do we need variables if

let age = 30;
alert(age);
can be re-written as

alert(30);
?
(In general, not just in this snippet)

Variables can store data  that may change during program exeution. So hard-coding (as in the second snippet) isn't always an option. Additionally, the same value might be needed in multiple places. Using a variable allows you to refer to that variable and only change the value in one place(=> the variable) instead of multiple places in  code.

6. Which kind of operator is the = operator?

it's an assignment operator used to asign values



Functions

"Indirect" vs "Direct" Function Execution - Summary
It can be confusing to see that there seem to be two ways of executing a function:

function add() {
  something = someNum + someOtherNum;
}
add() vs add

It's important to understand why we have these "two ways"!

In general, you call a function that you defined by using its name (e.g. add) and adding parentheses (with any parameters the function might need - or empty parentheses if no parameters are required like in the above example).

=> add()

This is how you execute a function from your code. Whenever JavaScript encounters this statement, it goes ahead and runs the code in the function. Period!

Sometimes however, you don't want to execute the function immediately. You rather want to "tell JavaScript" that it should execute a certain function at some point in the future (e.g. when some event occurs).

That's when you don't directly call the function but when you instead just provide JavaScript with the name of the function.

=> someButton.addEventListener('click', add);

This snippet would tell JavaScript: "Hey, when the button is clicked, go ahead and execute add.".

someButton.addEventListener('click', add()); would be wrong.

Why? Because JavaScript would encounter that line when it parses/ executes your script and register the event listener AND immediately execute add - because you added parentheses => That means (see above): "Please execute that function!".

Just writing add somewhere in your code would do nothing by the way:

let someVar = 5;
add
alert('Do something else...');
Why?

Because you just throw the name of the function in there but you don't give any other information to JavaScript. It basically doesn't know what to do with that name ("Should I run that when a click occurs? After a certain amount of time? I don't know...") and hence JavaScript kind of ignores this statement.




