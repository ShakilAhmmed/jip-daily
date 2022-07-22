/**
 * We are given an array of positive integers, which represent the values of coins that we have in our possession.
 * The array could have duplicates.
 * We are asked to write a function that returns the minimum amount of change that we cannot create with our coins.
 * For instance,
 * if the input array is [1, 2, 5],
 * the minimum amount of change that we cannot create is 4, since we can create 1, 2, 3 (1 + 2) and 5
 */

const coins = [1, 2, 5];


function nonConstructiveChange(coins) {
    coins.sort((a, b) => a - b);

    let currentChangeCreated = 0;
    for (const coin of coins) {
        if (coin > currentChangeCreated + 1) {
            return currentChangeCreated + 1;
        }

        currentChangeCreated += coin;
    }

    return currentChangeCreated + 1;
}
console.log(nonConstructiveChange(coins));