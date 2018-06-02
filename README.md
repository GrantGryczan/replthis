# replthis
Spend one line of code to run a Node REPL in the console under the scope of a function on that line.

First, enter this into the command line to install this package.
```bash
npm install replthis
```

Now here's that line I was talking about.
```js
require("replthis")(v => eval(v));
```
You can put this line anywhere in your code. It will start the JavaScript REPL once it runs, and under the scope of that arrow function. Then you should be able to enter JavaScript code into the console, pressing `enter` to evaluate it.

That's it!

This uses the built-in Node [`repl` module](https://nodejs.org/api/repl.html). Other than that, there are no dependencies and this package is super lightweight.
