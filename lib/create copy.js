require('colors')
const path = require('path')
const fs = require('fs')
const { getAllFiles } = require('./utils')

let i18nFile = ''
let messages = ''
let rootPath = ''
let generate = 0
let messagesHash = {}
let config = {}

const create = function (src, options) {
  let config = Object.assign(this.config, options)
  let rootPath = path.join(process.cwd(), src)
  let files = getAllFiles(rootPath)
  let i18nPath = path.join(process.cwd(), config.path || '')
  let i18nFile =  path.join(i18nPath, `${config.filename}.js`)
  Object.assign(this, { config, rootPath, i18nFile })
  this.initMessage()
  files.forEach(filePath => {
    const flag = filePath !== i18nFile
  })
}

module.exports = {
  create
}