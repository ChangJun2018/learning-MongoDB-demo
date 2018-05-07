//连接数据库

//1.引入mogonese
var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
//2.连接MongoDB
mongoose.connect('mongodb://localhost/test');
//3.测试数据库是否连接成功
mongoose.connection.once('open',function () {
    console.log('数据库连接成功')
}).on('error',function (error) {
    console.log('连接失败:',error);
});