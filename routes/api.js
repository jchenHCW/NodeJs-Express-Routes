var express=require('express');
var router=express.Router();


/*get api home page */
router.get('/',require('./api/api'));

/*get register page */
router.get('/register',require('./api/register'));

/*get login page */
router.get('/login',require('./api/login'));

/*get comment page */
router.get('/comment',require('./api/comment'));

/*get comment post page */
router.get('/comment/post',require('./api/post'));

module.exports=router;
