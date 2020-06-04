/* 下一个排列
实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length < 2) return nums // 长度小于2，返回
  let len = nums.length 
  let i = len - 2
  let j = len - 1
  let k = len - 1
  while (i >= 0 && nums[i] >= nums[j]) {
    i--
    j--
  }
  if (i < 0) return nums.sort((a, b) => a - b)
  while (k > i && nums[i] >= nums[k]) {
    k--
  }
  [nums[i], nums[k]] = [nums[k], nums[i]]
  while (len > j) {
    [nums[j], nums[len - 1]] = [nums[len - 1], nums[j]]
    len--
    j++
  }
  return nums
};