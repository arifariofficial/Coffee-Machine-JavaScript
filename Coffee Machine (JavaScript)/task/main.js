const input = require("sync-input");

const coffeeMachine = {
  water: 400,
  milk: 540,
  coffeeBeans: 120,
  disposableCups: 9,
  money: 550,
};

function printState() {
  console.log("\nThe coffee machine has:");
  console.log(`${coffeeMachine.water} ml of water`);
  console.log(`${coffeeMachine.milk} ml of milk`);
  console.log(`${coffeeMachine.coffeeBeans} g of coffee beans`);
  console.log(`${coffeeMachine.disposableCups} disposable cups`);
  console.log(`$${coffeeMachine.money} of money`);
}

function buy() {
  const choice = input(
    "What do you want to buy? " +
      "1 - espresso, 2 - latte, 3 - cappuccino, 4 - black:\n",
  );
  switch (choice) {
    case "1": // Espresso
      if (coffeeMachine.water < 250) {
        console.log("Sorry, there is not enough water.");
      } else if (coffeeMachine.coffeeBeans < 16) {
        console.log("Sorry, there is not enough coffee beans.");
      } else if (coffeeMachine.disposableCups < 1) {
        console.log("Sorry, there is not enough disposable cups.");
      } else {
        coffeeMachine.water -= 250;
        coffeeMachine.coffeeBeans -= 16;
        coffeeMachine.money += 4;
        coffeeMachine.disposableCups -= 1;
        console.log("I have enough resources, making you a coffee!");
        mainMenu();
      }
      mainMenu();
      break;
    case "2": // Latte
      if (coffeeMachine.water < 350) {
        console.log("Sorry, there is not enough water.");
      } else if (coffeeMachine.milk < 75) {
        console.log("Sorry, there is not enough milk.");
      } else if (coffeeMachine.coffeeBeans < 16) {
        console.log("Sorry, there is not enough coffee beans.");
      } else if (coffeeMachine.disposableCups < 1) {
        console.log("Sorry, there is not enough disposable cups.");
      } else {
        coffeeMachine.water -= 350;
        coffeeMachine.milk -= 75;
        coffeeMachine.coffeeBeans -= 20;
        coffeeMachine.money += 7;
        coffeeMachine.disposableCups -= 1;
        console.log("I have enough resources, making you a coffee!");
        mainMenu();
      }
      mainMenu();
      break;
    case "3": // Cappuccino
      if (coffeeMachine.water < 200) {
        console.log("Sorry, there is not enough water.");
      } else if (coffeeMachine.milk < 100) {
        console.log("Sorry, there is not enough milk.");
      } else if (coffeeMachine.coffeeBeans < 12) {
        console.log("Sorry, there is not enough coffee beans.");
      } else if (coffeeMachine.disposableCups < 1) {
        console.log("Sorry, there is not enough disposable cups.");
      } else {
        coffeeMachine.water -= 200;
        coffeeMachine.milk -= 100;
        coffeeMachine.coffeeBeans -= 12;
        coffeeMachine.money += 6;
        coffeeMachine.disposableCups -= 1;
        console.log("I have enough resources, making you a coffee!");
        mainMenu();
      }
      mainMenu();
      break;
    case 4:
      if (coffeeMachine.water < 200) {
        console.log("Sorry, there is not enough water.");
      } else if (coffeeMachine.coffeeBeans < 20) {
        console.log("Sorry, there is not enough coffee beans.");
      } else if (coffeeMachine.disposableCups < 1) {
        console.log("Sorry, there is not enough disposable cups.");
      } else {
        coffeeMachine.water -= 200;
        coffeeMachine.coffeeBeans -= 20;
        coffeeMachine.disposableCups -= 1;
        console.log("I have enough resources, making you a coffee!");
        mainMenu();
      }
      mainMenu();
      break;
    default:
      console.log("Wrong choice");
      mainMenu();
      break;
  }
}
function fill() {
  coffeeMachine.water += Number(
    input("Write how many ml of water you want to add: "),
  );
  coffeeMachine.milk += Number(
    input("Write how many ml of milk you want to add: "),
  );
  coffeeMachine.coffeeBeans += Number(
    input("Write how many grams of coffee beans you want to add:"),
  );
  coffeeMachine.disposableCups += Number(
    input("Write how many disposable cups you want to add: "),
  );
  mainMenu();
}
function take() {
  console.log(`I gave you $${coffeeMachine.money}`);
  coffeeMachine.money = 0;
  mainMenu();
}

function mainMenu() {
  const selection = input(
    "\nWrite action (buy, fill, take, remaining, exit): \n",
  );
  switch (selection) {
    case "buy":
      buy();
      break;
    case "fill":
      fill();
      break;
    case "take":
      take();
      break;
    case "remaining":
      printState();
      mainMenu();
      break;
    case "exit":
      break;
    default:
      console.log("Unknown error");
      mainMenu();
  }
}

mainMenu();
