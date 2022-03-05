// Implement the function missingNumber(numArr) which returns the missing number in a given integer array between 1 and 9. If there is no missing number, the function should return false.If there is more than one missing number, the function should return the result in an array sorted in ascending order.

// ## Examples

// missingNumber([1, 2, 3, 4, 6, 7, 8, 9]) to return 5
// missingNumber([1, 2, 3, 4, 5, 6, 8]) to return [7, 9]
// missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]) to return false 


function missingNumber(numArr) {


    let result = [];
    for (let i = 1; i <= 9; i++) {
        if (numArr.indexOf(i) === -1) {
            result.push(i);
        }

    }
    if (result.length === 0) {
        return "false"

    }
    else if (result.length === 1) {
        return result[0];
    }
    else {
        let sorted = result.sort(
            function (a, b) {
                return a - b
            }
        )
        return sorted
    }

}

console.log(missingNumber([1, 2, 3, 4, 6, 7, 8, 9]));
console.log(missingNumber([1, 2, 3, 4, 5, 6, 8]));
console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
module.exports = missingNumber
