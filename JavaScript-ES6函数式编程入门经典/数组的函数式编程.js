/*
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: 林慕
 * @Date: 2020-09-16 09:29:43
 * @LastEditors: 林慕
 * @LastEditTime: 2020-09-16 19:54:49
 */



let url = 'http://www.domain.com/order?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

const parse = function (url) {
  let res = {
    protocol: '',
    domain: '',
    param: {}
  }
  let arr = url.split('?')
  let proAndDomin = arr[0].split('://')
  res.protocol = proAndDomin[0]
  res.domain = proAndDomin[1]
  let urlArr = arr[1].split('&')
  for (let item of urlArr) {
    let _arr = item.split('=')
    res.param[_arr[0]] = _arr[1]
  }
  return res
}

console.log(parse(url))


// 16 个人， C端， 小红书APP—— RN做的，