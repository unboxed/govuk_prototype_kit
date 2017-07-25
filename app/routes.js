var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Router loader page
router.get('/components/loader', function(req, res) {
  res.render('components/loader')
})

// Router loader with generic message page
router.get('/components/loader-message', function(req, res) {
  res.render('components/loader_message')
})

// Router loader with updating message page
router.get('/components/loader-progress', function(req, res) {
  res.render('components/loader_progress')
})

// Router loader on different backgrounds page
router.get('/components/loader-inverted', function(req, res) {
  res.render('components/loader_inverted')
})

// add your routes here

module.exports = router
