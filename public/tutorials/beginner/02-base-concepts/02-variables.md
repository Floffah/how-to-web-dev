# Variables

Variables are one of the most common features used in JavaScript.

There are 3 different types of variables I will mention: `var`, `let`, `const`.

The syntax of declaring a variable is usually `type name = value` and updating a <!-- WORD(mutable) -->[mutable](../../reference/glossary.md#mutable)<!-- WORD:END --> variable is just `name = value`

## `var`

Variables declared with `var` can either be global or local. If they are declared at the root of the file (e.g. not in an if statement or a function) then they can be accessed anywhere **in that file** after they are declared. If they are declared in a function, they can only be used from within that function.

If you are new to programming and don't recognise some of those worlds. global means everywhere, local means just where it is, declare means to explicitly say a named variable has this value, root of the file just means right at the left and not inside any if or function.

Examples:

```js
var hello = "world";

function foo() { // more on functions next
    var bar = "baz"
}

console.log(hello) // -> world
console.log(bar) // -> bar is not defined
```

## Problems with `var`

As freecodecamp.org puts it:
> There's a weakness that comes with  var. I'll use the example below to explain:
>
> ```js
> var greeter = "hey hi";
> var times = 4;
>
> if (times > 3) {
>     var greeter = "say Hello instead"; 
> }
> 
> console.log(greeter); // "say Hello instead"
> ```
>
>So, since `times > 3` returns true, `greeter` is redefined  to `"say Hello instead"`. While this is not a problem if you knowingly want `greeter` to be redefined, it becomes a problem when you do not realize that a variable `greeter` has already been defined before.
>
>If you have used `greeter` in other parts of your code, you might be surprised at the output you might get. This will likely cause a lot of bugs in your code. This is why `let` and `const` are necessary.

## `let`

Declaring variables with `let` should be preferred over `var`.

In case you are new to programming, a block of code is code surrounded by curly braces ({}) or in some languages indents (tabs) but in javascript it is curly braces.

The `let` variable is local which means it can only be used within the same block it was declared in. Think of the root of the file as its own code block with the normal code blocks within it.

A difference between `var` and `let` is that it can only be declared once in that code block. This doesn't mean you can't update its value, you can update a `let` variable, just not redeclare it.

```js
let foo = "bar";
foo = "baz"; //works

let qux = "quux";
let qux = "corge"; // -> Identifier "qux" has already been declared.
```

## `const`

There isn't much to say about const other than its pretty much the same as `let` except it is readonly.

The only time you can assign a value to it is when you are defining it.

Example:
```js
const hello = "world";

hello = "foo"; // -> error
```

## When to use each

You should always avoid using `var`. Use `const` anywhere that you **will not** change its value and only read it. You should use `let` when you will change the value.

## Variable "hoisting"

Variable hoisting is a thing every major JavaScript implementation has. It is when a <!-- WORD(mutable) -->[mutable](../../reference/glossary.md#mutable)<!-- WORD:END --> or <!-- WORD(immutable) -->[immutable](../../reference/glossary.md#immutable)<!-- WORD:END --> variable is declared after it is queried.

An example of this is the following (example from [w3schools.com](https://www.w3schools.com/js/js_hoisting.asp))

```js
x = 5; // Assign 5 to x

console.log(x) // Log x

var x; // Declare x
```

Is the same as

```js
var x; // Declare x
x = 5; // Assign 5 to x

console.log(x) // Log x
```

Both of these examples work and will have the exact same output.
