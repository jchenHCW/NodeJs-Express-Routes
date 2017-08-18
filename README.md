# Node.js+Express中routes分配




### ps:
首先我要说的是，本人定位初学者，如果有评价不对写得不对的地方请指正，此博客也是希望大家一起学习，不要￥%#……%&……&……￥%#￥%。虽然读书没啥坑，但选书真的很坑，特别是nodejs这边的书，因为本人是从一个巨坑的行业以零基础跳入这个坑，网上对node.js的学习内容过少（部分都是几年前的，互联网飞速发展的今天，有可能今天花一天时间攻破的难题，明天就会被封装了），我要讲的是，版本更新太快，好了，不啰嗦，开工。

### 1. 安装node.js

[下载地址](https://nodejs.org/en/download/ ) 选择对应的版本号进行下载，按提示安装完成就行。

### 2. 安装express 
 打开命令窗口，安装express全局环境，方便以后可以在本地各文件夹下安装express文件，输入npm install -g express 
 注意：npm是Node的模块管理器，功能极其强大，在安装node.js的时候已经顺带安装好了。

### 3. 新建一个express工程
比如这里我在E:\NodeJs目录下新建一个lesson_01的项目


示例：

```
 E:\>mkdir NodeJs
 E:\>cd NodeJs
 E:\NodeJs>express lesson_01 -ejs
 ```

生成后的lesson_01文件夹内容如下：



![我的图像](https://github.com/jchenHCW/NodeJs-Express-Routes/blob/master/public/images/main.jpg)


我们先看app.js文件夹的内容
```
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');    //引用routes文件夹里面的index.js文件赋值给变量index
//var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');   //初学对'ejs'不是很熟悉，也不想过多的花时间，我们把模板改为html

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);  //加载'/'路径的方法是调用变量index,也就是说直接调用routes文件夹里面的index.js文件来加载'/'路径的请求
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

```
代码解释我就略过了，网上一大片。咱们重点来看看以上我注释的位置，进行修改。
JavaScript 示例：

``` 
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',require('ejs').__express);
app.set('view engine', 'html'); 

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index');  //这样是不是更直观的看得到‘/’路径这个请求是通过引用routes文件夹里面的index加载的呢

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
```

### 4. 一个实例
下面我们借用妙味课堂里面的一个实例路由我们来仔细分析下。

![我的图像](https://github.com/jchenHCW/NodeJs-Express-Routes/blob/master/public/images/front.jpg)
![我的图像](https://github.com/jchenHCW/NodeJs-Express-Routes/blob/master/public/images/back.jpg)


好，那我们根据以上这个项目的前台路由模板和后台路由模板来进行规划路由。


1.咱们先把大的三个模块路由在app.js里面加载出来:
```
/*看这里,看这里,看这里,变更的位置在这里*/

app.use('/', require('./routes/main'));     //咱们待会儿在routes文件夹来创建对应的路由.js执行文件。
app.use('/api', require('./routes/api'));   
app.use('/admin', require('./routes/admin'));   

```
2.接下来就是在routes文件夹创建对应的路由规则，如下图：


![我的图像](https://github.com/jchenHCW/NodeJs-Express-Routes/blob/master/public/images/routes.jpg)


3.咱们看看routes文件件里面的3个路由文件里面的内容
main.js(网站的首页在这里面定义)
```
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

```
注:这里我只讲路由的规划，至于模块的引用和定义有时间再单独写吧。

api.js
```
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

```

admin.js
```
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

/*get comment page */
router.get('/comment',function (req,res,next) {
    res.send('评论列表');
});

/*get comment delete page */
router.get('/comment/delete',function (req,res,next) {
    res.send('评论删除');
});

module.exports=router;

```

4.接下来我们就跑一下这个程序，看看咱们的路由是不是按照图片上的运行(部分)

main模块

![我的图片](https://github.com/jchenHCW/NodeJs-Express-Routes/blob/master/public/images/homepage.jpg)

![我的图片](https://github.com/jchenHCW/NodeJs-Express-Routes/blob/master/public/images/viewpage.jpg)


api模块

![我的图片](https://github.com/jchenHCW/NodeJs-Express-Routes/blob/master/public/images/apihomepage.jpg)

![我的图片](https://github.com/jchenHCW/NodeJs-Express-Routes/blob/master/public/images/registerpage.jpg)


admin模块

![我的图片](https://github.com/jchenHCW/NodeJs-Express-Routes/blob/master/public/images/adminpage.jpg)

![我的图片](https://github.com/jchenHCW/NodeJs-Express-Routes/blob/master/public/images/adminuserpage.jpg)

![我的图片](https://github.com/jchenHCW/NodeJs-Express-Routes/blob/master/public/images/articleaddpage.jpg)

好了，我们的基本路由都实现了。但是在admin和api的模块里面路由业务过大，就违背了我们模块化的思想，那我们接下来再细分一下。(啰嗦一句,每个模块记得要导出)

5.在routes文件夹里面新建三个文件夹,admin,api,main,咱们把这三个对应的模块再细分到这三个文件夹里面(我们只是为了演示路由的规划，并不是为了多分而去多分,咱们只是阐述路由划分对业务逻辑的重要性,请谅解我)

先上图

![我的图像](https://github.com/jchenHCW/NodeJs-Express-Routes/blob/master/public/images/routes_1.jpg)


![我的图像](https://github.com/jchenHCW/NodeJs-Express-Routes/blob/master/public/images/routes_2.jpg)

6.接下来我们看看修改后的main.js

main.js
```
var express=require('express');
var router=express.Router();


/*get home page */
router.get('/',require('./main/main'));

/*get view page */
router.get('/view',require('./main/view'));

module.exports=router;

```


7.我们再看看main文件夹里面的main.js和view.js

main.js
```
module.exports=function (req,res,next) {
    res.send('首页');
};
```
view.js
```
module.exports=function (req,res,next) {
    res.send('内容页');
};
```

正如我们上面所说的，我们把路由规划和业务逻辑分开来放以便于我们在开发大型项目时思路更清晰。

注:由于代码过多就不意义列出，可下载源码一起探讨。





#### [下一篇:mongoose连接mongodb数据库。](https://github.com/jchenHCW/mongodb)

  


