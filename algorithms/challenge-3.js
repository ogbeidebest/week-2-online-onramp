

// Implement the function increment(arr, value) which increments the value of val key in every object inside the array by the given value and returns the new array

// ## Examples

// increment([{ val: 1 }, { val: 2 }, { val: 3 }], 2) to return [{ val: 3 }, { val: 4 }, { val: 5 }]
// increment([{ val: 10 }, { val: 20 }, { val: 30 }], 5) to return [{ val: 15 }, { val: 25 }, { val: 35 }]

function increment(arr, value) {
    var newArr = arr.map((item) => {
        return { ["val"]: item.val += value }
    })
    return newArr
}
console.log(increment([{ val: 1 }, { val: 2 }, { val: 3 }], 2));
console.log(increment([{ val: 10 }, { val: 20 }, { val: 30 }], 5));
module.exports = increment
