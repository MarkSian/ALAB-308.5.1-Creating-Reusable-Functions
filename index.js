/* Part 1 */
// Take an array of numbers and return the sum. ###
// Take an array of numbers and return the average. ###
// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

const numbersArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersArray2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// 1. Sum of numbers
// the reduce method allows us to iterate over each element in the array and results into a single result. A call back function is required.
// the callback function is (sum, num) => sum + num, 0. The first parameter is the accumulator, the second parameter is the current value. The initial value is 0.
function sumOfArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of numbers is:")
console.log(sumOfArray(numbersArray1));
console.log(sumOfArray(numbersArray2));
//log result: Sum of numbers is: 55, 110

// 2. Average of numbers
function averageOfArray(numbers) {
    return numbers.length === 0 ? 0 : sumOfArray(numbers) / numbers.length;
}
console.log("Average of numbers is:")
console.log(averageOfArray(numbersArray1));
console.log(averageOfArray(numbersArray2));
//log result: Average of numbers is: 5.5, 11