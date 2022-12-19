// reduce (pure)
// Reduces the array to a single value using a function that takes an accumulator and the current element of the array as parameters.
// This function instructs how the current element must be merged into the accumulator and returns the accumulator that will be used on the next iteration.

let arr = [1, 2, 3, 4];

// Get the sum of elements
arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// => 10

// Classify the numbers by whether they are odd or not
arr.reduce(
  (accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      accumulator.even.push(currentValue);
    } else {
      accumulator.odd.push(currentValue);
    }

    return accumulator; // need to return
  },
  { even: [], odd: [] }
);
// => { even: [2, 4], odd: [1, 3] }

function middleTwo(deck) {
  return deck.slice(4, 2);
}

console.log(middleTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
function threeOfEachThree(deck) {
  return deck.reduce((accumulator, currentVal) => {
    if (currentVal === 3) {
      return [...accumulator, 3, 3, 3];
    } else {
      return [...accumulator, currentVal];
    }
  }, []);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

function sandwichTrick(deck) {
  const toInsert = [deck.pop(), deck.shift()];
  deck.splice(deck.length / 2, 0, ...toInsert);
  return deck;
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
function perfectlyOrdered(deck) {
  return deck.sort((x, y) => x - y);
}
