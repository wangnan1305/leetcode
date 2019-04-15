var l1 = [2,4,3], l2 = [5,6,4];
/**
 * 
 * @param {*} l1 
 * @param {*} l2 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
   输出：7 -> 0 -> 8
   原因：342 + 465 = 807
   function ListNode(val) {
     this.val = val;
     this.next = null;
   }
 */
var addTwoNumbers = function(l1, l2) {
  if(!l1 && !l2) return;
  if(!l1 || !l2) return l1 || l2;
  var l3 = new ListNode();
  if((l1.val + l2.val) < 10) {
    l3 = new ListNode(l1.val + l2.val);
    l3.next = addTwoNumbers(l1.next, l2.next);
  } else {
    l3 = new ListNode(l1.val+l2.val - 10);
    l3.next = addTwoNumbers(new ListNode(1),addTwoNumbers(l1.next, l2.next))
  }
  return l3;
};
