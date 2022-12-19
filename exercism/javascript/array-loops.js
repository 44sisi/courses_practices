/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
function determineOddEvenCards(stack, type) {
  let count = 0;
  for (const s of stack) {
    if ((type && !(s % 2)) || (!type && s % 2)) {
      count += 1;
    }
  }
  return count;
}

console.log(determineOddEvenCards([2], true));
