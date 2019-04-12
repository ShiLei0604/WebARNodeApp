var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ar', function(req, res) {
  // index.ejsの拡張子は省略可能
  console.log('a-frame')
  res.render('index');
});
module.exports = router;
