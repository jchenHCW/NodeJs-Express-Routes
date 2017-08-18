var express=require('express');
var router=express.Router();


/*get admin home page */
router.get('/',require('./admin/admin'));

/*get user page */
router.get('/user',require('./admin/user'));

/*get category page */
router.get('/category',require('./admin/category/category'));

/*get category add page */
router.get('/category/add',require('./admin/category/add'));

/*get category edit page */
router.get('/category/edit',require('./admin/category/edit'));

/*get category delete page */
router.get('/category/delete',require('./admin/category/delete'));

/*get article page */
router.get('/article',require('./admin/article/article'));

/*get article add page */
router.get('/article/add',require('./admin/article/add'));

/*get article edit page */
router.get('/article/edit',require('./admin/article/edit'));

/*get article delete page */
router.get('/article/delete',require('./admin/article/delete'));

/*get comment page */
router.get('/comment',require('./admin/comment/comment'));

/*get comment delete page */
router.get('/comment/delete',require('./admin/comment/delete'));


module.exports=router;
