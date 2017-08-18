var express=require('express');
var router=express.Router();


/*get admin home page */
router.get('/',function (req,res,next) {
    res.send('admin首页');
});

/*get user page */
router.get('/user',function (req,res,next) {
    res.send('用户列表');
});

/*get category page */
router.get('/category',function (req,res,next) {
    res.send('分类列表');
});

/*get category add page */
router.get('/category/add',function (req,res,next) {
    res.send('分类添加');
});

/*get category edit page */
router.get('/category/edit',function (req,res,next) {
    res.send('分类修改');
});

/*get category delete page */
router.get('/category/delete',function (req,res,next) {
    res.send('分类删除');
});

/*get article page */
router.get('/article',function (req,res,next) {
    res.send('内容列表');
});

/*get article add page */
router.get('/article/add',function (req,res,next) {
    res.send('内容添加');
});

/*get article edit page */
router.get('/article/edit',function (req,res,next) {
    res.send('内容修改');
});

/*get article delete page */
router.get('/article/delete',function (req,res,next) {
    res.send('内容删除');
});

/*get article page */
router.get('/article',function (req,res,next) {
    res.send('内容列表');
});

/*get article page */
router.get('/article',function (req,res,next) {
    res.send('内容列表');
});

/*get comment page */
router.get('/comment',function (req,res,next) {
    res.send('评论列表');
});

/*get comment delete page */
router.get('/comment/delete',function (req,res,next) {
    res.send('评论删除');
});



module.exports=router;
