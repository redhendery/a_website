var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'A Website!' });
});

router.get('/contact', (req, res, next) => {
  res.render('contact')
})

router.get('/about', (req, res, next) => {
  res.render('about')
})

module.exports = router;
