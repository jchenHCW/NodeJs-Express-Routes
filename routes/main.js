var express=require('express');
var router=express.Router();


/*get home page */
router.get('/',function (req,res,next) {
    res.send('首页');
});

/*get view page */
router.get('/view',function (req,res,next) {
    res.send('内容页');
});

module.exports=router;
