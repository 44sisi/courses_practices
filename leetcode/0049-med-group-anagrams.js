// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const sorted = strs.map((x) => x.split('').sort().join(''));

  const mapOfAnagrams = {};
  sorted.forEach((element, index) => {
    if (mapOfAnagrams[element]) {
      mapOfAnagrams[element].push(strs[index]);
    } else {
      mapOfAnagrams[element] = [strs[index]];
    }
  });

  return Object.values(mapOfAnagrams);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

var groupAnagramsRecursion = function (strs) {
  if (!strs.length) return [];

  let grouped = groupAnagramsRecursion(strs.slice(1));
  const first = strs[0];

  if (!grouped.length) {
    grouped = [[first]];
    return grouped;
  }

  let anagramExists = false;
  for (let i = 0; i < grouped.length; i++) {
    if (
      first.split('').sort().join('') ===
      grouped[i][0].split('').sort().join('')
    ) {
      anagramExists = true;
      grouped[i].push(first);
    }
  }
  if (!anagramExists) {
    grouped = [...grouped, [first]];
  }

  return grouped;
};

console.log(groupAnagramsRecursion(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
