const Controller = require('egg').Controller

class UserController extends Controller {
  constructor(ctx) {
    super(ctx)
  }
  async create() {
    const {
      ctx
    } = this
    ctx.body = 'user ctrl'
  }
}

module.exports = UserController

// app/contract/index.js
module.exports = {
  baseRequest: {
    id: {
      type: 'string',
      description: 'id 唯一键',
      required: true,
      example: '1'
    }
  },
  baseResponse: {
    code: {
      type: 'integer',
      required: true,
      example: 0
    },
    data: {
      type: 'string',
      example: '请求成功'
    },
    errorMessage: {
      type: 'string',
      example: '请求成功'
    }
  }
}

// app/contract/user.js
module.exports = {
  createUserRequest: {
    mobile: {
      type: 'string',
      required: true,
      description: '手机号',
      example: '13593434',
      format: /^1[34578]\d{9}$/
    },
    password: {
      type: 'string',
      required: true,
      description: '密码',
      example: '123213'
    },
    realName: {
      type: 'string',
      required: true,
      description: '姓名',
      example: 'Tom'
    }
  }
}

config.onerror = {
  all(err, ctx) {
    ctx.app.emit('error', err, this)
    const status = err.status || 500
    const error = status === 500 && ctx.app.config.env === 'prod' ? 'Internal Server Error' : err.message
    ctx.body = {
      code: status,
      error: error
    }
    if (status === 422) {
      ctx.body.detail = err.errors
    }
    ctx.status = 200
  }
}


// controller/user.js
const res = {
  abc: 123
}
// 设置响应内容和响应状态码
ctx.helper.success({
  ctx,
  res
})

// extend/helper.js
const moment = require('moment')
// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss')
// 处理成功响应
exports.success = ({
  ctx,
  res = null,
  msg = '请求成功'
}) => {
  ctx.body = {
    code: 0,
    data: res,
    msg
  }
  ctx.status = 200
}












// app/controller/upload.js
const fs = require('fs')
const path = require('path')
const Controller = require('egg').Controller
const awaitWriteStream = require('await-stream-ready').write
const sendToWormhole = require('stream-wormhole')
/**
 * @Controller 上传
 */
class UploadController extends Controller {
  constructor(ctx) {
    super(ctx)
  }
  // 上传单个⽂件
  /**
   * @summary 上传单个⽂件
   * @description 上传单个⽂件
   * @router post /api/upload/single
   */
  async create() {
    const {
      ctx
    } = this
    // 要通过 ctx.getFileStream 便捷的获取到⽤户上传的⽂件，需要满⾜两个条件：
    // 只⽀持上传⼀个⽂件。
    // 上传⽂件必须在所有其他的 fields 后⾯，否则在拿到⽂件流时可能还获取不到 fields。
    const stream = await ctx.getFileStream()
    // 所有表单字段都能通过 `stream.fields` 获取到
    const filename = path.basename(stream.filename) // ⽂件名称
    const extname = path.extname(stream.filename).toLowerCase() // ⽂件扩展
    名称
    const uuid = (Math.random() * 999999).toFixed()
    // 组装参数 stream
    const target = path.join(this.config.baseDir, 'app/public/uploads',
      `${uuid}${extname}`)
    const writeStream = fs.createWriteStream(target)
    // ⽂件处理，上传到云存储等等
    try {
      await awaitWriteStream(stream.pipe(writeStream))
    } catch (err) {
      // 必须将上传的⽂件流消费掉，要不然浏览器响应会卡死
      await sendToWormhole(stream)
      throw err
    }
    // 调⽤ Service 进⾏业务处理
    // 设置响应内容和响应状态码
    ctx.helper.success({
      ctx
    })
  }
}
module.exports = UploadController