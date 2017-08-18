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
![我的图像]()


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

![我的图像]()

![我的图像]()



#### 更多语法参考：[流程图语法参考](http://adrai.github.io/flowchart.js/)

### 8. 序列图

#### 示例 1

```seq
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```

#### 示例 2

```seq
Title: Here is a title
A->B: Normal line
B-->C: Dashed line
C->>D: Open arrow
D-->>A: Dashed open arrow
```

#### 更多语法参考：[序列图语法参考](http://bramp.github.io/js-sequence-diagrams/)

### 9. 甘特图

甘特图内在思想简单。基本是一条线条图，横轴表示时间，纵轴表示活动（项目），线条表示在整个期间上计划和实际的活动完成情况。它直观地表明任务计划在什么时候进行，及实际进展与计划要求的对比。

```gantt
    title 项目开发流程
    section 项目确定
        需求分析       :a1, 2016-06-22, 3d
        可行性报告     :after a1, 5d
        概念验证       : 5d
    section 项目实施
        概要设计      :2016-07-05  , 5d
        详细设计      :2016-07-08, 10d
        编码          :2016-07-15, 10d
        测试          :2016-07-22, 5d
    section 发布验收
        发布: 2d
        验收: 3d
```

#### 更多语法参考：[甘特图语法参考](https://knsv.github.io/mermaid/#gant-diagrams)

### 10. Mermaid 流程图

```graphLR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
```

#### 更多语法参考：[Mermaid 流程图语法参考](https://knsv.github.io/mermaid/#flowcharts-basic-syntax)

### 11. Mermaid 序列图

```sequence
    Alice->John: Hello John, how are you?
    loop every minute
        John-->Alice: Great!
    end
```

#### 更多语法参考：[Mermaid 序列图语法参考](https://knsv.github.io/mermaid/#sequence-diagrams)

### 12. 表格支持

| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机     | \$1600 |   5     |
| 手机        |   \$12   |   12   |
| 管线        |    \$1    |  234  |


### 13. 定义型列表

名词 1
:   定义 1（左侧有一个可见的冒号和四个不可见的空格）

代码块 2
:   这是代码块的定义（左侧有一个可见的冒号和四个不可见的空格）

        代码块（左侧有八个不可见的空格）

### 14. Html 标签

本站支持在 Markdown 语法中嵌套 Html 标签，譬如，你可以用 Html 写一个纵跨两行的表格：

    <table>
        <tr>
            <th rowspan="2">值班人员</th>
            <th>星期一</th>
            <th>星期二</th>
            <th>星期三</th>
        </tr>
        <tr>
            <td>李强</td>
            <td>张明</td>
            <td>王平</td>
        </tr>
    </table>


<table>
    <tr>
        <th rowspan="2">值班人员</th>
        <th>星期一</th>
        <th>星期二</th>
        <th>星期三</th>
    </tr>
    <tr>
        <td>李强</td>
        <td>张明</td>
        <td>王平</td>
    </tr>
</table>

### 15. 内嵌图标

本站的图标系统对外开放，在文档中输入

    <i class="icon-weibo"></i>

即显示微博的图标： <i class="icon-weibo icon-2x"></i>

替换 上述 `i 标签` 内的 `icon-weibo` 以显示不同的图标，例如：

    <i class="icon-renren"></i>

即显示人人的图标： <i class="icon-renren icon-2x"></i>

更多的图标和玩法可以参看 [font-awesome](http://fortawesome.github.io/Font-Awesome/3.2.1/icons/) 官方网站。

### 16. 待办事宜 Todo 列表

使用带有 [ ] 或 [x] （未完成或已完成）项的列表语法撰写一个待办事宜列表，并且支持子列表嵌套以及混用Markdown语法，例如：

    - [ ] **Cmd Markdown 开发**
        - [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
        - [ ] 支持以 PDF 格式导出文稿
        - [x] 新增Todo列表功能 [语法参考](https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments)
        - [x] 改进 LaTex 功能
            - [x] 修复 LaTex 公式渲染问题
            - [x] 新增 LaTex 公式编号功能 [语法参考](http://docs.mathjax.org/en/latest/tex.html#tex-eq-numbers)
    - [ ] **七月旅行准备**
        - [ ] 准备邮轮上需要携带的物品
        - [ ] 浏览日本免税店的物品
        - [x] 购买蓝宝石公主号七月一日的船票
        
对应显示如下待办事宜 Todo 列表：
        
- [ ] **Cmd Markdown 开发**
    - [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
    - [ ] 支持以 PDF 格式导出文稿
    - [x] 新增Todo列表功能 [语法参考](https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments)
    - [x] 改进 LaTex 功能
        - [x] 修复 LaTex 公式渲染问题
        - [x] 新增 LaTex 公式编号功能 [语法参考](http://docs.mathjax.org/en/latest/tex.html#tex-eq-numbers)
- [ ] **七月旅行准备**
    - [ ] 准备邮轮上需要携带的物品
    - [ ] 浏览日本免税店的物品
    - [x] 购买蓝宝石公主号七月一日的船票
    
```
这是一个一级标题
============================

这是一个二级标题
--------------------------------------------------

### 这是一个三级标题
```

你也可以选择在行首加井号表示不同级别的标题 (H1-H6)，例如：# H1, ## H2, ### H3，#### H4。

### 3. 外链接

使用 \[描述](链接地址) 为文字增加外链接。

示例：

这是去往 [本人博客](http://ghosertblog.github.com) 的链接。

### 4. 无序列表

使用 *，+，- 表示无序列表。

示例：

- 无序列表项 一
- 无序列表项 二
- 无序列表项 三

### 5. 有序列表

使用数字和点表示有序列表。

示例：

1. 有序列表项 一
2. 有序列表项 二
3. 有序列表项 三

### 6. 文字引用

使用 > 表示文字引用。

示例：

> 野火烧不尽，春风吹又生。

### 7. 行内代码块

使用 \`代码` 表示行内代码块。

示例：

让我们聊聊 `html`。

### 8.  代码块

使用 四个缩进空格 表示代码块。

示例：



### 9.  插入图像

使用 \!\[描述](图片链接地址) 插入图像。

示例：

![我的头像](https://www.zybuluo.com/static/img/my_head.jpg)

# Cmd Markdown 高阶语法手册

### 1. 内容目录

在段落中填写 `[TOC]` 以显示全文内容的目录结构。

[TOC]

### 2. 标签分类

在编辑区任意行的列首位置输入以下代码给文稿标签：

标签： 数学 英语 Markdown

或者

Tags： 数学 英语 Markdown

### 3. 删除线

使用 ~~ 表示删除线。

~~这是一段错误的文本。~~

### 4. 注脚

使用 [^keyword] 表示注脚。

这是一个注脚[^footnote]的样例。

这是第二个注脚[^footnote2]的样例。

### 5. LaTeX 公式

$ 表示行内公式： 

质能守恒方程可以用一个很简洁的方程式 $E=mc^2$ 来表达。

$$ 表示整行公式：

$$\sum_{i=1}^n a_i=0$$

$$f(x_1,x_x,\ldots,x_n) = x_1^2 + x_2^2 + \cdots + x_n^2 $$

$$\sum^{j-1}_{k=0}{\widehat{\gamma}_{kj} z_k}$$

访问 [MathJax](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference) 参考更多使用方法。

### 6. 加强的代码块

支持四十一种编程语言的语法高亮的显示，行号显示。

        
        
[^footnote]: 这是一个 *注脚* 的 **文本**。

[^footnote2]: 这是另一个 *注脚* 的 **文本**。

