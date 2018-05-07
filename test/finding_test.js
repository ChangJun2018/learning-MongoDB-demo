//查询数据
const MarioChar=require('../models/mariochar');
const mocha=require('mocha');
const assert=require('assert');
//测试时对当前测试的一个描述
describe('查找数据',function () {
    //创建需要测试的任务
    it('finding data',function (done) {
       MarioChar.findOne({name:'Mario'}).then(function (result) {
           console.log(result.name);
           done();
       })
    })
});