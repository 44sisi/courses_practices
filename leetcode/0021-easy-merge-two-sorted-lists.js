// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]
 
// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 || !list2) return list1 ? list1 : list2;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let list3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, undefined))));
let list4 = new ListNode(1, new ListNode(4, new ListNode(6, undefined)));
console.log(JSON.stringify(mergeTwoLists(list3, list4)));


var mergeTwoListsVer1 = function (list1, list2) {
  if (!list1.length || !list2.length) {
    return list1.length ? list1 : list2;
  }

  if (list1[0] < list2[0]) {
    return list1.slice(0, 1).concat(mergeTwoListsVer1(list1.slice(1), list2));
  } else {
    return list2.slice(0, 1).concat(mergeTwoListsVer1(list1, list2.slice(1)));
  }
};

let list1 = [1, 2, 3, 5];
let list2 = [1, 4, 6];
console.log(mergeTwoListsVer1(list1, list2));
