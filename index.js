'use strict'

const fs = require('fs')
const path = require('path')
const load_koa_middlewares = require('load_koa_middlewares')

const config = path.join(__dirname, './conf.js')

module.exports = (path) => {
    console.log(config)
  
  if (path && fs.existsSync(path)) {
    config = path
  }
  
  console.log(config)
  
  return load_koa_middlewares(config)
}
