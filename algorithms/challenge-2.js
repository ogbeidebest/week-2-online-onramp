
// Implement the function numSwap(number) which takes a number of even length, swaps pairs of its adjacent digits and returns the swapped number.

// ## Examples

// numSwap(1234) to return 2143
// numSwap(432156) to return 341265

function numSwap(number) { 
    let num = number.toString().split('')

    if (num.length % 2 !==0) {
        console.log("The array is not of even length");
    }
    for (let i = 0; i < num.length; i+=2) {
        var result = num[i];
        num[i] = num[i + 1];
        num[i + 1] = result;
        
    }
    return Number(num.join(''))
}
console.log(numSwap(432156));
console.log(numSwap(1234));
module.exports = numSwap


