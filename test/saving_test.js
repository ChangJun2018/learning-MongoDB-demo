//存储数据
const MarioChar=require('../models/mariochar');
const mocha=require('mocha');
const assert=require('assert');
//测试时对当前测试的一个描述
describe('存储数据',function () {
    //创建需要测试的任务
    it('saving data',function () {
        //准备需要存储的数据
        var char=new MarioChar({
          name:'Mario'
        });
        //存储数据
        char.save().then(function (result) {
            console.log(result.name);
            assert(result.isNew===false);
        })
    })
});