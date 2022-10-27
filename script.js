// CLOSURES :  A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

/* A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

For Example:
function makeFunc() {
  const name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

Here, the displayName() inner function is returned from the outer function before being executed. In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to console.log.

ANOTHER EXAMPLE:

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

In this example, we have defined a function makeAdder(x), that takes a single argument x, and returns a new function. The function it returns takes a single argument y, and returns the sum of x and y.

In essence, makeAdder is a function factory. It creates functions that can add a specific value to their argument. In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.

add5 and add10 are both closures. They share the same function body definition, but store different lexical environments. In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.
*/

// Closures : A closure gives a function access to all variables of its parent function, even after that function has returned.

function refrigerator() {
  let coke = 6;

  return function () {
    coke--;
    console.log(`${coke} Coke`);
  };
}

const miniref = refrigerator(); // miniref create a closure(take reference from its parent) at its birthplace

console.log(miniref); // shows anonymous function

miniref(); // 5 coke
miniref(); // 4 coke
miniref(); // 3 coke
miniref(); // 2 coke
miniref(); // 1 coke

const drink = refrigerator(); // refrigerator function again reset to drink

console.log(drink);

drink(); // 5 coke
drink(); // 4 coke
drink(); // 3 coke
drink(); // 2 coke
drink(); // 1 coke

// ANOTHER EXAMPLE

function computer() {
  let ramCount = 4;

  return function () {
    ramCount--;
    console.log(ramCount);
  };
}

const service1 = computer();
console.log(service1);
service1();

const service2 = computer();
console.log(service2);
service2();
