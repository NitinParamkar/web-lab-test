function createCounter() {
  let count = 0; // This variable is enclosed

  return function () {
    count++;
    console.log(`Current count: ${count}`);
  };
}

const counter1 = createCounter();
counter1(); // Current count: 1
counter1(); // Current count: 2
counter1(); // Current count: 3

const counter2 = createCounter();
counter2(); // Current count: 1
