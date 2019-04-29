/**
 * @param {string} s
 * @return {string}
 * 5
 * 当i==j时，P[i][j]=true
  当i+1==j时，P[i][j]=str[i]==str[j]
  其他，P[i][j]=P[i+1][j-1]&&(str[i]==str[j])
 */
// var longestPalindrome = function(s) {
//     var i, j, len;
//     var isPalindrom = new Array(s.length);
//     for(i = 0;i < s.length;i++) {
//       isPalindrom[i] = new Array(s.length).fill(false)
//     }
//     var maxStr = '';
//     for(var len = 1;len <= s.length;len++) {
//       for(var start = 0; start < s.length; start++){
//         var end = start + len - 1;
//         if(end >= s.length) break;
//         isPalindrom[start][end] = (len == 1 || len == 2 || isPalindrom[start+1][end-1]) && s[start] === s[end];
//         if(isPalindrom[start][end]) {
//           maxStr = s.substring(start, end + 1)
//         }
//       }
//     }
//     console.log(maxStr)
//     return maxStr;
// };
// var longestPalindrome = function(s) {
//     var len = s.length;
//     var max = 0;
//     var result = '';
//     for(var i = 0;i < len;i++) {
//       for(var j = i + 1;j <= len;j++){
//         var str = s.substring(i,j);
//         if(isPalindromic(str) && str.length >= max) {        
//           max = str.length;
//           result = str;
//         }
//       }
//     }
//     return result;
// };
// function isPalindromic(str) {
//   var len = str.length;
//   for(var i = 0;i < len / 2;i++) {
//     if(str[i] !== str[len - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }

longestPalindrome('abcc')