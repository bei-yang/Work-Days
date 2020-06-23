/* 整数转换英文表示
将非负整数转换为其对应的英文表示。可以保证给定输入小于 231 - 1 。

示例 1:

输入: 123
输出: "One Hundred Twenty Three"
示例 2:

输入: 12345
输出: "Twelve Thousand Three Hundred Forty Five"
示例 3:

输入: 1234567
输出: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
示例 4:

输入: 1234567891
输出: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"  */
var numberToWords = function(num) {
  if(num===0) return 'Zero'
  const unitObj={
    1:'One',
    2:'Two',
    3:'Three',
    4:'Four',
    5:'Five',
    6:'Six',
    7:'Seven',
    8:'Eight',
    9:'Nine',
    10:'Ten',
    11:'Eleven',
    12:'Twelve',
    13:'Thirteen',
    14:'Fourteen',
    15:'Fifteen',
    16:'Sixteen',
    17:'Seventeen',
    18:'Eightteen',
    19:'Nineteen'
  }
  const tenObj={
    2:'Twenty',
    3:'T'
  }
};