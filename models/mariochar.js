//集合collections 数据模型 model

const mongoose=require('mongoose');

//获取规范类
const Schema=mongoose.Schema;

//规范数据格式
const MarioCharSchema=new Schema({
    name:String,
    weight:Number
});

//创建数据模型
const MarioChar=mongoose.model('Mario',MarioCharSchema);

module.exports=MarioChar;