/* 33. 搜索旋转排序数组
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

示例 1:

输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
示例 2:

输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1 */

var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = (left + right) >> 1
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] < nums[right]) {
      if (nums[mid] < target && nums[rigth] >= target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else {
      if (nums[mid] > target && nums[left] <= target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }
  return -1
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
/* 
253. 会议室 II
给定一个会议时间安排的数组，每个会议时间都会包括开始和结束的时间 [[s1,e1],[s2,e2],...] (si < ei)，为避免会议冲突，同时要考虑充分利用会议室资源，请你计算至少需要多少间会议室，才能满足这些会议安排。

示例 1:

输入: [[0, 30],[5, 10],[15, 20]]
输出: 2
示例 2:

输入: [[7,10],[2,4]]
输出: 1 */

var minMeetingRooms = function (intervals) {
  if (!intervals.length) return 0
  var rooms = intervals.sort((a, b) => a[0] - b[0])
  for (let i = 1; i < rooms.length; i++) {
    const eleI = rooms[i]
    for (let j = 0; j < i; j++) {
      const eleJ = rooms[j]
      if (eleJ[1] <= eleI[0]) {
        rooms.splice(j, 1)
        eleI[0] = 0
        i--
      }
    }
  }
  return rooms.length
};