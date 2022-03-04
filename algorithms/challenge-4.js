// An ATM only has 100, 50, 20 Naira bills(NGN) available to be dispensed.
// Given an amount between 40 and 10000 Naira(inclusive) rounded to the nearest 10 and assuming that the ATM wants to use as few bills as possible.

// Implement the function withdraw(amount) that returns the minimal number of 100, 50 and 20 Naira bills the ATM needs to dispense(in that order) in an array.

// ## Examples

// withdraw(250) to return [2, 1, 0]
// withdraw(370) to return [3, 1, 1]

function withdraw(amount) { 
    let amountLess100 = amount % 100;
    let hundred = (amount - amountLess100) / 100;
    let amountLess50 = amountLess100 % 50;
    let fifty = (amountLess100 - amountLess50) / 50;
    let twenty = amountLess50 / 20;
    return [hundred, fifty, twenty];

}
console.log(withdraw(250));
console.log(withdraw(590));
module.exports = withdraw