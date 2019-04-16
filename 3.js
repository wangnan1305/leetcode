// 求一个最长的子串，里面不带任何重复字符
/**
 * abcabcbb
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var start = 0, end = 0,
      res = 0, lookup = [];
    while (start < s.length && end < s.length) {
      if(lookup.indexOf(s[end]) === -1) {
        lookup.push(s[end]);
        res = Math.max(res, end - start + 1);
        end += 1;
      } else {
        lookup.splice(lookup.indexOf(s[start]), 1);
        start += 1;
      }
    }
    console.log(lookup)
    return res;
};
console.log(lengthOfLongestSubstring("abcddddabcaaaa"))