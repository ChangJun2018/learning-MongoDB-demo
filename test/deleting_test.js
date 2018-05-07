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
    });
    it('deleating data from db', function () {
        MarioChar.findOneAndRemove({name:'Mario'}).then(function (result) {
            assert(result===null);
        })
    });
    it('更新语句中的操作语句', function (done) {
        MarioChar.findOneAndUpdate({name:'Mario'},{$inc:{weight:1}}).then(function (result) {
            console.log(result.weight);
            done();
        })
    });
});