# Functions

Functions are another commonly used feature of JavaScript and should always be used to make your projects more modular.

Later in this series I will talk about classes; functions are also a part of those (but in a slightly different way).

In JavaScript and a lot of other languages, functions (sometimes called methods depending on the context) are a named block of code that is only executed when called and can take parameters and return a value.

You write one like this:

```js
function name() {
    // code
}
```

This example is called a procedure in computing science.

However, to define parameters and return a value, you do this:

```js
function example(hello) {
    return hello + " world"
}

console.log(example("hello")) // -> hello world
```

This example is called a function in computer science.

(that example also included how to call them)

Something to note: code after the return keyword will not be executed no matter what.

# Scope

Functions have their own scope. This means variables declared in a function cannot be used outwith that function.
