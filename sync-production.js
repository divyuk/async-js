let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");
  }, 0);

  setTimeout(() => {
    console.log("The fruit has been chopped");
  }, 2000);

  setTimeout(() => {
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
  }, 4000);

  setTimeout(() => {
    console.log("start the machine");
  }, 6000);

  setTimeout(() => {
    console.log(`Ice cream placed on ${stocks.holder[1]}`);
  }, 8000);

  setTimeout(() => {
    console.log(`${stocks.toppings[0]} as toppings`);
  }, 11000);

  setTimeout(() => {
    console.log("serve Ice cream");
  }, 14000);
};

let order = (fruit_name, call_production) => {
  setTimeout(function () {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);

    // Order placed. Call production to start
    call_production();
  }, 2000);
};
order(0, production);

//The effect of this change would be that each step in the production process would still occur, but they would all be scheduled to run after their respective delays from the beginning. The output would not reflect the step-by-step progression of the production process as intended in the original code.

//By using nested setTimeout functions, you ensure that each step of the production process is executed with the specified delays, creating a sequential and more organized output that reflects the actual progression of the production process. This is a common approach for managing asynchronous operations that need to occur in a specific order.
