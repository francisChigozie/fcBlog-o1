var express = require('express')
var router = express.Router()
const path = require('path')
//const sendmail = require('./sendmail.js')
const Blog = require('../models/Blog')
//const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
//const advancedResults = require('../middleware/advancedResult')


//Blogs
 router.get('/', function (req, res) {
    res.redirect('/blogs')
}); 

router.get('/about', function (req, res) {
    res.render("about", {title:'About'});
}); 

router.get('/createblog', function (req, res) {
    res.render("createblog", {title:'Create'});
});   

router.post('/blogs', asyncHandler(async(req, res) => {

     const blog = await new Blog(req.body)
    //const blog = await Blog.create(req.body)

    blog.save()
    .then((result) => {
       res.redirect('/blogs')
        console.log(blog)
    })
    .catch((err) => {
        console.log(err)
    })
}))

router.get('/blogs',asyncHandler(async(req, res) => {

    await Blog.find().sort({ createdAt: -1 })
      .then((result) => {
          res.render('index', { title: 'All Blogs', blogs: result  })
      })
      .catch((err) => {
          console.log(err)
      })
  }))

router.get('/blogs/:id', asyncHandler(async(req, res) => {
    const id = req.params.id.trim(); 

    await Blog.findById(id)
    .then((result) => {
        //res.redirect('/blogDteails')
         res.render('blogdetails', { blog: result, title: 'Blog Details' })
    })
    .catch((err) => {
        console.log(err)
    })
}))

router.delete('/blogs/:id', asyncHandler(async(req, res) => {
    const id = req.params.id.trim()

    await Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect: '/blogs' })
    })
    .catch((err) => {
        console.log(err)
    })
}))

////////////////////////////////////////////////////////////////////////
//Sass Portfolio (Dist Folder)

router.get('/sass', function (req, res) {
    res.render("dist/index", {title:'Full Stack Developer'});
}); 

router.get('/sass/about', function (req, res) {
    res.render("dist/about", {title:'About'});
}); 

router.get('/sass/resume', function (req, res) {
    res.render("dist/resume", {title:'Resume'});
}); 

router.get('/sass/work', function (req, res) {
    res.render("dist/work", {title:'My Work'});
}); 

router.get('/sass/contact', function (req, res) {
    res.render("dist/contact", {title:'Contact'});
}); 

/******** FRENCH LANGUAGE  ******************/ 

router.get('/french', function (req, res) {
    res.render("dist/french/index", {title:'Accueil'});
}); 

router.get('/french/about', function (req, res) {
    res.render("dist/french/about", {title:'À propos de mon'});
}); 

router.get('/french/resume', function (req, res) {
    res.render("dist/french/resume", {title:'CV'});
}); 

router.get('/french/work', function (req, res) {
    res.render("dist/french/work", {title:'Travail'});
}); 

/******** GERMAN LANGUAGE  ******************/ 

router.get('/deutsch', function (req, res) {
    res.render("dist/deutsch/index", {title:'Hiem'});
}); 

router.get('/deutsch/about', function (req, res) {
    res.render("dist/deutsch/about", {title:'Über Mir'});
}); 

router.get('/deutsch/resume', function (req, res) {
    res.render("dist/deutsch/resume", {title:'Lebenslauf'});
}); 

router.get('/deutsch/work', function (req, res) {
    res.render("dist/french/work", {title:'Meine Arbeit'});
}); 

////////////////////////////////////////////////////////////////////////
//404 PAGE
router.get(/*default*/ (req, res) => {
    res.status(404).render('404',{title: '404'})
})

module.exports = router;