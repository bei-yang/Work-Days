/*
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: 林慕
 * @Date: 2020-08-08 20:26:38
 * @LastEditors: 林慕
 * @LastEditTime: 2020-09-06 15:55:34
 */
const fs = require('fs')
const path = require('path')
// 测试路径
const sourceDir = './test'
// 目标路径文件
const targetFile = './targetTest'
// 目标数
let targetNum = 1
// 目标类型
let targetType = '.txt'

function getDirFilePathArr(dir) {
  fs.readdir(dir, (err, fileArrLike) => {
    if (err) {
      console.log(err)
      return
    }
    fileArrLike.forEach((filename) => {
      fs.stat(path.join(dir, filename), (err, stats) => {
        if (err) throw err
        if (stats.isFile()) {
          if (path.extname(filename) === targetType) {
            let filePath = path.join(dir, filename)
            appendContentSync(targetFile, filePath)
          }
        } else {
          getDirFilePathArr(path.join(dir, filename))
        }
      })
    })
  })
}

function appendContentSync(targetFile, file) {
  let content = fs.readFileSync(file, 'utf-8');
  let fileName = targetFile + targetNum + targetType
  fs.stat(path.join(__dirname, fileName), (err, stats) => {
    if (err) {
      // 同步写入
      fs.appendFileSync(targetFile + targetNum + targetType, content)
    } else {
      if (stats.size / 1024 / 1024 > 2) {
        targetNum++
      }
      // 异步写入
      // fs.writeFile(fileName, content, function (err) {
      //   if (err) {
      //     console.log(err)
      //   } else {
      //     console.log('文件写入成功！')
      //   }
      // })
      // 流操作写入
      let readStream = fs.createReadStream(__dirname + fileName)
      let writeStream = fs.createWriteStream(__dirname + fileName)
      readStream.setEncoding('utf8')
      let data = ''
      readStream.on('data', function (chunk) {
        data += chunk
      })
      readStream.on('end', function () {
        writeStream.write(data)
      })
    }
  })
}

// getDirFilePathArr(sourceDir)

const http = require('http')
http.get('https://tpc.googlesyndication.com/simgad/13210648517053866893?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qkg-FjLzm12qyR2uO-XvSom7LGCxQ', function (res) {
  res.setEncoding('binary')
  console.log(7, res)
  let _data = ''
  res.on('data', function (data) {
    _data += data
  }).on('end', function () {
    fs.writeFile('./hi.img', _data, function () {
      console.log('ok')
    })
  })
})




// [1,2,5,3,10,123,124,22]  去掉任何一个子项，求有最长子序列的哪一项的数组内容