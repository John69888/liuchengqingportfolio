//File Name: index.js Student Name: Liu Chenqging   Student ID: 301250073  Date: Oct 6, 2022

var express = require('express');
var router = express.Router();

// For index, about, projects, services pages use the same template, but pass differernt title to generate 4 pages 
// But for contact page, I use different template. 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET Contact me page. */
/*Please note that contact is different from other pages, here it use different view template*/
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

module.exports = router;
