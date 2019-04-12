var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // index.ejsの拡張子は省略可能
  res.render('index', {title : 'タイトル'});
});
module.exports = router;
