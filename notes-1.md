# UP & GOING

## Chapter 1
Into programming is a quick overview of a programing introduction to JavaScript based on the famous "You don't know JS" book series. I don't 
intend to commit plagiarism, and the purpose is the share my learning process from previous years for people interested in the language.

---
### Code
The **program**, also referred as *source code* or just *code*, is a set of instructions to tell the computer what tasks to perform. 
The **computer language** is the rules for valid format and combinations, also known as *syntax*.

#### Statements
In the **computer language** *(also known as syntax)* the statements are groups of words, numbers, and operators to perform specific tasks.
````javascript
    a = b * 2;
    // The letters "a" and "b" are variables. Variables are empty boxes or symbolic placeholders for values of any type.
    // The symbols "=" and "*" are some of the avilable mathematical operators.
    // The number "2" is just a literal value because it stands alone.
    // The semicolon ";" is used at the end of statements.
````
The previous statement tells the computer to retrieve the value of `b`, multiply it by `2`, and store the result inside `a`. In other words, 
**programs** are collections of **statements** to perform tasks.

#### Expressions
Statements are made of one or more expressions, which are variables or numbers combined with operators.
````javascript
    a = b * 2;
    // The number "2" is literal value expression.
    // The letter "b" is a variable expression.
    // The "b * 2" is an arithmenticaal expression (multiplication).
    // The "a = b * 2;" is an assignment expression becuase the value of "b * 2" will be assigned to "a".
````
When a statement is not stored inside a variable then it's called ***expression statement***.
````javascript
    b * 2;
    // The result of "b * 2" will not be stored in a new variable.
    // The expression statement is not useful.
````

#### Executing a Program
Everytime the program is executed, the collection of statements are interpreted or compiled by the computer to understand the code. 
- Interpreting the code: The language is translated from top to bottom, line by line, everytime the program is run.
- Compiling the code: The language is translated ahead of time so when the program runs later, then the code is ready to go.

#### Output
The output is the value you print to the user interface.
```javascript
    var a = 40;
    b = a * 2;
    console.log(b);
    // The output in the browser's consoles is "80".
```
#### Input
The input is the value typed by the user to the console.
````javascript
    age = prompt("Tell me you age:");
    console.log(age);
    // The prompt function is a pop-up message that will retieve the value typed by the user.
````
---

### Operators
To perform actions between variables and values it's necessary to use operators. 

- Assignment `=` is used to retrieve the values.
- Compound assignment `+=`, `-=`, `*=`, and `/=` are used to shorten mathematical expressions like `a+=1;` is similar to `a=a+1;` 
- Mathematical operators are `+`, `-`, `*`, and `/`.
- Comparison operators are `<` for "less than", `>` for "greater than", `<=` for "less than or loose equal", and `>=` for "more than or loose equal".
- Equality operator are `==` for "loose equal", `===` for "strict equal", `!=` for "loose not equal", and `!==` for "strict not equal".
- Increment operator `++` and decrement operator `--`.
- Logical operators are `||` for "or", and `&&` for "and".
- Object property is `.` and it's used to access properties inside object values like `obj.a` or `obj["a"]`.
---

### Values & Types
There are different type of values in programming terminology, and JavaScript has some built-in types for these *primitive values*.

- For mathematical expressions, then you'll need `number` values.
- For word, characters, or sentences, then you'll need `string` values.
- For decisions, then you'll need the `boolean` values of `true` and `false`.
````javascript
    a = "I am a string";    // String
    b = 42;                 // Number
    false;                  // Boolean
    true;                   // Boolean
````

#### Coercion
In JavaScript there's an option for values *conversion* know as ***coercion***, and it has built-in functions for different scenarios like 
`Number(...)`. This built-in function is helpful for converting `strings` values into `number` values when the situation allows it.
````javascript
    a = "42";
    b = Number(a);
    console.log(a);
    console.log(b);
    
````
However, JavaScript can coerce values automatically if values are loose equal `==` and it's important to understand the rules to avoid 
mistakes in the future.
````javascript
    "99.99" == 99.99    // True
    "99.99" != 99.99    // False
    "99.99" !== 99.99   // True
    "99.99" === 99.99   // False
````
---

### Comments
It's possible to code comment a program with *single line code comments* and *multiple line comments*.
````javascript
    42; // This is a single line comment
    "JavaScript is fun"; /* This is
                                a multiple line
                                        comment */
````
---

### Variables
Variables are also known as *symbolic placeholders* or *symbolic containers* to store values. The term of ***variable*** implies the value 
can vary over time as needed. Some programming languages prevent unintended value conversions also known as ***static programming*** or 
***type enforcement*** by defining ***the type of variable***.

However, JavaScript emphasize the type of value which means the value can change at any time. This is known as ***weak typing*** or 
***dynamic typing***, where the same variable can store different values. It's a flexible language and chaotic if used irresponsible.
````javascript
    var amount = 42;
    amount /= 2;
    console.log(amount);
    
    amount = "$" + String(amount);
    console.log(amount);
    
````

There is an option to centralize the variable's value with ***constants*** for avoiding different values. This type of variable must be 
declared with capital letters and underscores `_` for blank spaces.
````javascript
    const TAX_RATE = .15;
    var amount = 42;
    amount /= 2;
    amount = amount * TAX_RATE;
    console.log(amount);
    
    amount = "$" + String(amount);
    console.log(amount.toFixed(2));
````
---

### Blocks
A block is defined by one or more statements inside curly braces `{...}` attached to control ***Conditional*** statements as `if/else` 
and ***Loops***.
````javascript
    const SHIPPING_COST = 15;
    var amount = 42;
    amount *= 2;
    if (amount < 100) {
        amount += SHIPPING_COST;
        console.log("$" + amount.toFixed(2));
    } else {
        console.log("$" + amount.toFixed(2));
    }
````
Standalone blocks are valid but not commonly seen in JavaScript programs. The best practice is to attach blocks to control statements.

---

### Conditionals
The `if` and `else` conditional statements hold blocks with expressions. The `if` condition must be followed by a parenthesis `(...)` which 
stores expressions that could return `true` or `false` values. The `else` alternative is a backup clause for execution when the result doesn't 
meet the expectations.
````javascript
    const TAX_RATE = .15;
    var laptop = 5000;
    var bank_account = 5100;
    var cart = (laptop * TAX_RATE) + laptop;
    if (cart <= bank_account) {
        console.log("Thank you for your purchase.");
    } else {
        console.log("Insufficient credits.");
    }
````

### Loops
Repeating an expression until the condition fails, or in other words, repeating only while the condition holds.

#### `while`
This type of loop follows up the principle of *"repeating an expression until the condition fails"*. It's also valid to say *"repeating 
the block with expression(s) until the result is no longer `true`"*. In here the conditional is tested before the first iteration.
````javascript
    var cart = 0;                           // The cart items are "0".
    while (true) {                          // While the condition is true,
        if ((cart <= 5) === false) {        // If the cart value is greater than "5",
            break;                          // Then stop the iteration.
        }
        console.log(cart);                  
        cart+=1;                            // Otherwise, keep counting, and print the valur in the console.
    }
````

#### `do ... while`
This type of loop also follows up the principle of *"repeating an expression until the condition fails"*. It's also valid to say *"repeating 
the block with expression(s) until the result is no longer `true`"*. In here the conditional is tested after the first iteration.
````javascript
    var cart = 0;                           // The cart items are "0".
    do {
        if ((cart <= 5) === false){         // If the cart items are greater than "5",
            break;                          // Then stop the iteration.
        }
        console.log(cart);
        cart+=1;                            // Otherwise, keep counting, and print the value in the console.
    } while (true);                         // While the condition is true.
````

A more readable alternative for both `while` and `do ... while` examples is:
````javascript
    var cart = 0;                           // The cart items are "0".
    while (true) {                          // While the condition is true,
        if (cart > 5) {                     // If the cart is greater than "5".
            break;                          // Then stop the iteration.
        }
        console.log(cart);
        cart+=1;                            // Otherwise, keep counting, and print the value in the console.
    }
````

#### `for`
This type of loop also follows the same principle as before, but the charm with this variant is how compact it is and easier to understand.
````javascript
    for (var cart = 0;cart < 6;cart+=1) {
        console.log(cart);
    }
````
---

### Functions
A function is a named section of code to invoke every time it's called by name. In other words, a function is a named block statement holding 
expressions.
````javascript
    function printAmount() {                        // The statement is function named as "printAmount" with no parameters,
        console.log("$" + amount.toFixed(2));       // It contains an expression for printing a value in the console.
    }
    var amount = 99.99;                             // The variable's value is set after the function,
    amount *= 2;                                    // The value will change,
    printAmount();                                  // And the function is executed by it name.
````
````javascript
    function cart(cost) {
        console.log("$" + cost);
    }
    var price = 499.00;
    price *= 2;
    cart(price);
````

### Scope
The access level you can have to variables in a function or block. The inner code of the block can access to outer variables, however, 
the outer expressions of the code cannot access to inner variables in the block.

---

## Chapter 2

### Variables & Types
Since ES6 (ECMA 6), Javascript has 6 type of variable's values such as `string`, `number`, `null`, `undefined`, 
`object`, `boolean`, and `symbol`. 
````javascript
    var a;              
    typeof a;           // -> Undefined

    var b = undefined;
    typeof b;           // -> Undefined

    var c =  42
    typeof c;           // -> Number

    var d = true
    typeof d;           // -> Boolean

    var e = false
    typeof e;           // -> Boolean

    var f = "Hello"
    typeof f;           // -> String

    var g = null
    typeof g;           // -> Object (bug!)

    var h = {j:"k"}
    typeof h;           // -> Object
````

### Objects
The object is a compound value to set properties (named locations) with their own values of any type.
````javascript
    var obj = {                 // The variable has block with a compound value
        a: "Hello world!",      // String value
        b: 1986,                // Number value
        c: true                 // Boolean value and store any type of value
    }   
    
    obj.a                       // Join the name of the objetc to name of the property with a dot.
    obj["b"]                    // Join the name of the object with brackets and double quotes to access the property.
````

#### Arrays
They are objects holding multiple values of any type in a numerically indexed position. It means the properties are not considered in 
this syntax.
````javascript
    var arr = [              // It starts with square brackets
        "Hello world!",      // String value
        1986,                // Number value
        true                 // Boolean value and store any type of value     
    ]   
    
    arr[0]                   // "Hello world!"
    arr[1]                   // 1986
    arr[2]                   // true
    arr.length               // 3 
    typeof arr               // Object
````

#### Functions
The functions are another type of object in limited cases. In the following example, the `counter.message` is an example of an object 
because the function name and the property are joined by one dot.
````javascript
    function counter() {
        return 1986;
    }
    
    counter.message = "Type a new year"
    
    typeof counter              // Function
    typeof counter()            // Number
    typeof counter.message      // String -> However, the variable structure relates to an Object.
````

### Built-In Type Methods
They are exposed as properties and methods that are powerful. 
````javascript
    var a = "Mass Effect"
    var b = 29.79458

    a.length                // 11
    a.toUpperCase()         // MASS EFFECT
    b.toFixed(3)            // 29.795
````

### Comparing Values
The two type of main comparisons in JS are **equality** and **inequality**. Both results will be boolean, between `true` and `false` 
values.

#### Coercion
The coercion of values could be explicit or implicit when the values are loose equal. 
````javascript
    // Explicit Coercion
    var a = "1986"
    var b = Number(a)   // The `Number()` method is an explicit instruction to convert the string value into a number.

    console.log(a)      // "1986"  -> String value
    console.log(b)      // 1986    -> Number value corced explicitly by the `Number()` method
````
````javascript
    // Implicit Coercion
    var a = "1986"
    var b = a * 1       // The mathematical operation is an implicit coercion of variable "a"

    console.log(a)      // "1986"  -> String value
    console.log(b)      // 1986    -> Number value coerced into number without methods
````

#### Truthy & Falsy

The ***truthy*** and ***falsy*** concept is allowed when a non-boolean values is coerced to a boolean value. The falsy values are 
`""`, `0`, `-0`, `NaN`, `null`,`undefined`, and `false`. Anything else is truthy.

#### Equality
The loose equal `==` and loose not equal `!=` operators relies on the coercion to return `true` of `false`. The strict equal `===` 
and strict not equal operator `!==` will be true only if the value and type are the same. In other words, if the value must be 
`true` or `false`, `0`, `""`, or `[]` then use strict equal `===`. For anything else use loose equal `==`.

#### Inequality
The concept relates to the `<`, `>`, `<=`, and `>=` operators to compare between numbers to obtain `true` and `false` values.

### Variables
Variables should be named with valid identifiers and avoiding *reserved words* of JS syntax. The use of letters from `a-z`, `A-Z`, 
`0-9`, `_`, and `$` are allowed.

#### Function scopes
The `var` keyword is used to declare a variable inside a function scope.

##### Hoisting
This concept is when a variable is declared inside a function and make it accessible only through the function.
````javascript
    var a = 1
    function foo() {
        var b = 2
        function bar() {
            var c = 3
            function baz() {
                var d = 4
                console.log(a, b, c, d)     // 1,2,3,4
            }
            baz()
            console.log(a, b, c)    // 1,2,3
        }
        bar()
        console.log(a, b)   // 1,2
    }
    foo()
    console.log(a)  // 1
````

It's possible to declare variables to belong to individual blocks with the `let` keyword.
````javascript
    function foo() {
        var a = 1   // The variable "a" belongs to the complete "function".
        if (a >= 1) {
            let b = 2   // The variable "b" belongs only to the "if" condition.
            while (b < 5) {
                let c = b * 2   // The variable "c" belongs only to the "while" loop.
                b++
                console.log(a + c)
            }
        }
    }
    foo()
````

### Conditionals
Another conditional mechanism is the `if`, `else if`, and `else` statement.
````javascript
    if (a == 2) {
        // Do something if...    
    } else if (a == 10) {
        // Do something else if...
    } else {
        // Otherwirse do else.
    }   
````
Another simpler solution is the `switch` condition where the execution stops until the match is true.
````javascript
    switch (a) {
        case 2:     // If the match is "2" then stop at break, otherwise continue. 
            break; 
        case 10:    // If the match is "10" then stop at break, otherwise continue. 
            break;
        case 100:   // If the match is "100" then stop at break, otherwise continue.
            break;
        default:    // Otherwirse do else.
    }
````
The **"ternary operator"** or **"conditional operator"** is a concise form of conditional similar to de `if`/`else` condition.
````javascript
    var a = 2
    var b = (a > 1986) ? "Hello" : "World"
    /** Similar to...
    if (a > 1986) {
            var b = "Hello"
        } else {
            var b = "World"
    }
    **/
````

### Functions as values
It's possible to attach functions as variable's values. They could be anonymous functions or named functions, both are very common 
but the best practice is to assign a name.
````javascript
    var foo = function (){}     // Anonymous function
    var bar = function baz(){}  // Named function
````

#### Immediately Invoked Functions (IFFEs)
This type of function will be executed right away. IFFEs should be used to declare variables that won't affect the 
surrounding code outside.
````javascript
    function bar(){
        console.log("Regular function")
    }
    bar()

    (function baz(){
        console.log("IFFE function")
    })()
````
IFFEs can also have `return` values.
````javascript
    var x = (function bar(){
        return 1986    
    })()
    console.log(x)  // 1986
````
#### Closure
It's a way of remembering and access a function's scope even after the execution of the function.
````javascript
    function mathOperation(x){      // You set the function and the parameter to pass in
       function addValues(y) {      // You set a second function and the second parameter to pass in
           return x + y             // Return an operation between both arguments
       }
       return addValues             // Return the results of both arguments to each variable
    }
    var add10 = mathOperation(10)   // 10 is the "x" value
    var add20 = mathOperation(20)   // 20 is the "x" value  
    var add30 = mathOperation(30)   // 30 is the "x" value
    
    add10(100)  // The "y" value              
    add20(200)  // The "y" value
    add30(300)  // The "y" value
````

### This
When a function includes the identifier is usually as a reference that points to an object.
````javascript
    function foo() {
        console.log(this.bar)
    }
    var bar = "Retrieved by 'this' identifier."
    foo()
````

### Prototypes
It's an alternative for adding more properties and values inside an object. For example:
````javascript
    var starcraft = {
        race_1: "Terran",
        race_2: "Zerg"
    }
    var add_more = Object.create(starcraft)
    add_more.race_3 = "Protoss"
    
    starcraft.race_1    //  Terran
    starcraft.race_2    //  Zerg
    starcraft.race_3    //  Protoss
````


### Map Arrays
The `map()` method is an ES5 feature that allows to update an array without modifying the original array. The syntax is attached to arrow 
functions as callback functions.