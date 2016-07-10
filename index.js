'use strict'

const fs = require('fs')
const path = require('path')
const load_koa_middlewares = require('load_koa_middlewares')
const default_config = path.join(__dirname, './conf.js')
module.exports = (path) => {
  let config = default_config
  
  console.log(config)
  
  if (path && fs.existsSync(path)) {
    config = path
  }
  
  console.log(config)
  
  return load_koa_middlewares(config)
}
