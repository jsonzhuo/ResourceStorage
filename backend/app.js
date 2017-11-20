const jsonServer = require('json-server')
const uuid = require('node-uuid');
const bodyParser = require('body-parser')
const low = require('lowdb')
const storage = require('lowdb/file-async')

var crypto = require('crypto');

//创建一个Express服务器
const server = jsonServer.create();

//使用json-server默认选择的中间件（logger，static, cors和no-cache）
server.use(jsonServer.defaults());

//使用body-parser中间件
server.use(bodyParser.json());


//数据文件
const dbfile = process.env.prod === '1' ? 'db.json' : '_db.json';

//创建一个lowdb实例
const db = low(dbfile, { storage });



var md5 = function (str) {
  return crypto
    .createHash('md5')
    .update(str.toString())
    .digest('hex');
};

//添加新问卷
server.post('/category/add', (req, res) => {
  const item = req.body;
  item.id = uuid.v1();
  item.createtime = new Date().toLocaleDateString();
  db('category').push(item).then(() => {
    res.json({ 'success': true, data: item });
  });
});

//删除已有问卷
server.get('/category/delete/:id', (req, res) => {
  db('category').remove({ id: req.params.id }).then(() => {
    res.json({ 'success': true });
  });
});

//获取所有问卷
server.get('/category', (req, res) => {
  const categorys = db('category');
  res.json({ 'success': true, data: categorys });
});

//根据id获取问卷数据
server.get('/category/:id', (req, res) => {
  const category = db('category').find({ id: req.params.id });
  res.json({ 'success': true, data: category });
});

//更新已有问卷
server.post('/category/update', (req, res) => {
  const item = req.body;
  db('category').chain().find({ id: item.id }).assign(item).value();
  res.json({ 'success': true, data: item });
});

//添加新问卷
server.post('/book/add', (req, res) => {
  const item = req.body;
  item.id = uuid.v1();
  //item.createtime = new Date().toLocaleDateString();
  db('book').push(item).then(() => {
    res.json({ 'success': true, data: item });
  });
});

//删除已有问卷
server.get('/book/delete/:id', (req, res) => {
  db('book').remove({ id: req.params.id }).then(() => {
    res.json({ 'success': true });
  });
});

//获取所有问卷
server.get('/book', (req, res) => {
  const books = db('book');
  res.json({ 'success': true, data: books });
});

//根据id获取问卷数据
server.get('/book/:id', (req, res) => {
  const book = db('book').find({ id: req.params.id });
  res.json({ 'success': true, data: book });
});

//更新已有问卷
server.post('/book/update', (req, res) => {
  const item = req.body;
  db('book').chain().find({ id: item.id }).assign(item).value();
  res.json({ 'success': true, data: item });
});

// get userinfo
server.get('/user/:username', function (req, res) {
  var user = db('user')
    .find({
      username: req.params.username
    });

  res.json({
    success: true,
    data: {
      username: user.username,
      createDate: user.createDate
    }
  });
});

// register
server.post('/user/add', function (req, res) {
  var item = req.body;
  var user = db('user')
    .find({
      username: item.username
    });
  if (user) {
    res.json({
      success: false,
      message: '"' + item.username + '" is exists'
    })
  } else {
    item.password = md5(item.password);
    item.createDate = new Date().toLocaleDateString();
    db('user')
      .push(item)
      .then(function () {
        res.json({
          success: true
        });
      });
  }
});

// login
server.post('/login', function (req, res) {
  var data = req.body || {};
  var username = data.username;
  var user = db('user')
    .find({
      username: username
    });

  if (user && user.password === md5(data.password)) {
    // todo reset session
    res.json({
      success: true
    });
  } else {
    res.json({
      success: false,
      message: 'username or password error'
    });
  }
});

//路由配置
const router = jsonServer.router(dbfile);
server.use('/api', router);

//启动服务，并监听5000端口
server.listen(5000, () => {
  console.log('server is running at ', 5000, dbfile);
});