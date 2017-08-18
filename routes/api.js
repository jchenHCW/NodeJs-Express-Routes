var express=require('express');
var router=express.Router();


/*get api home page */
router.get('/',function (req,res,next) {
    res.send('api首页');
});

/*get register page */
router.get('/register',function (req,res,next) {
    res.send('用户注册页');
});

/*get login page */
router.get('/login',function (req,res,next) {
    res.send('用户登录页');
});

/*get comment page */
router.get('/comment',function (req,res,next) {
    res.send('评论获取页面');
});

/*get comment post page */
router.get('/comment/post',function (req,res,next) {
    res.send('评论提交');
});

module.exports=router;
