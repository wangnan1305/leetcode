var nums =  [3,2,4], target = 6;
var twoSum = function(nums, target) {
  for(var i = 0;i < nums.length;i++){
    for(var j = i + 1;j < nums.length;j++){
      if((nums[i] + nums[j]) === target) {
        return i ===j ? undefined : [i,j];
      }
    }
  }
}
var twoSum = function(nums, target) {
  var hash = {};
  for(var i = 0;i < nums.length;i++){
    if((target - nums[i]) in hash) {
      return [hash[target - nums[i]], i];
    } else {
      hash[nums[i]] = i;
    }
  }
}
console.log(twoSum(nums, target))