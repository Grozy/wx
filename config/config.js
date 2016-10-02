'use strict'

var path = require('path');
var util = require('../lib/utils');
var wechat_file = path.join(__dirname, './wechat_file.txt');
var counter_file = path.join(__dirname, './counter_file.txt');

var config = {
  wechat: {
    appID: 'wxed60b65b7b8be3b4',//app id
    appSecret: '80b3dc2e8180c33e03e52a3bcaa5edc1', //app secret
    token: 'sng_sc_1991', // app token
    getAccessToken: function(data){
      return util.readFileAsync(wechat_file, 'utf-8');
    },
    saveAccessToken: function(data){
      data = JSON.stringify(data);
      return util.writeFileAsync(wechat_file, data);
    }
  },
  port: 80
}

module.exports = config;
