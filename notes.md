# JavaScript - The Hard Parts

## Principles of JavaScript

### What happens when JavaScript executes (runs) my code?

```javascript
const num = 3;
function multiplyBy2 (inputNumber) {
    const result = inputNumber*2;
    return result;
}
const name = "Danny"
```

* When we first start running our code, we create a *global execution context*

* Thread of execution (parsing and executing the code line after line)
  * Single threaded (one at a time)
  * Synchronous execution (one after another in order)

* Live memory of variables with data (known as Global Variable Environment)

### Running/calling/invoking a function

* You can define a function by using the keyword function

* You can execute a function by adding parenthesis

* This is not the same as defining a function

```javascript
const num = 3;

function multiplyBy2 (inputNumber) {
    const result = inputNumber*2;
    return result;
}

const output = multiplyBy2(4);
const newOutput = multiplyBy2(10);
```

* When you execute a function, you create a new execution context comprising:
  1. The thread of execution (we go through the code **in the function** line by line)
  2. A local memory (Variable environment) where anything defined in the function is stored

* When you run a function, you create a local execution context
  * Inside the local execution context, it has a local thread (pauses doing code in global scope and starts doing code inside function / local scope) and local memory (variable environment)

1. In the above code, we take the parameter, inputNumber and assign it the value of 4
2. We store the evaluated result of inputNumber inside of the variable constant called result
3. Return result and store the value in the variable called output