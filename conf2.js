module.exports = { 
  "koa-compress":{
    filter: function (content_type) {
      return /text/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
  },
  "koa-favicon": {
    "path": "sss",
    "options": {
      "maxAge": 1
    }
  },
  "koa-conditional-get":{
    
  }
  
}