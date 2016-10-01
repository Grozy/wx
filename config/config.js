'use strict'

var path = require('path');
var util = require('../lib/utils');
var wechat_file = path.join(__dirname, './wechat_file.txt');
var counter_file = path.join(__dirname, './counter_file.txt');

var config = {
  wechat: {
    appID: 'wxf9e806c16993ccc7',//app id
    appSecret: '5998a2f2a0a85e1b44a16af835b91865', //app secret
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
