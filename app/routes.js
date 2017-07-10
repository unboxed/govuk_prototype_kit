var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Router character count page
router.get('/components/char-count', function(req, res) {
  res.render('components/char_count')
})

// Router character count threshold page
router.get('/components/char-count-threshold', function(req, res) {
  res.render('components/char_count_threshold')
})

// Router character count highlight page
router.get('/components/char-count-highlight', function(req, res) {
  res.render('components/char_count_highlight')
})

// Router word count page
router.get('/components/word-count', function(req, res) {
  res.render('components/word_count')
})

// add your routes here

module.exports = router
