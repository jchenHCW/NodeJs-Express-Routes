var express=require('express');
var router=express.Router();


/*get home page */
router.get('/',require('./main/main'));

/*get view page */
router.get('/view',require('./main/view'));

module.exports=router;
