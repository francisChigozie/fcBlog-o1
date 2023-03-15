const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Blog = require('../models/Blog.js')
//const sendmail = require('./sendmail.js')


//@desc  About Blogs
//@route  GET /blogAbout
//@access  Public
 exports.blogAbout = asyncHandler(async (req, res) => {
 res.render('about', { title: 'About' })
})

//@desc  Craete A Blog
//@route  POST /blogs
//@access  Public
exports.createBlog = asyncHandler(async (req, res, next) => {
    //const {email} = req.body;
        // sendmail(email)
    const blog = await Blog.create(req.body)

          blog.save()
          .then((result) => {
            res.redirect('/getBlogs')
            console.log(result)
          })
          .catch((err) => {
            console.log(err)
          })
})

//@desc  Post A Blog
//@route  POST /blogs
//@access  Public
 exports.postBlog = asyncHandler(async (req, res, next) => {
    //const {email} = req.body;
        // sendmail(email)
    const blog = new Blog(req.body)

          blog.save()
          .then((result) => {
            //res.redirect('/blogs')
            console.log(result)
          })
          .catch((err) => {
            console.log(err)
          })
}) 

//@desc  Find A Blog
//@route  GET /blogs
//@access  Public
 exports.getBlogs = asyncHandler(async (req, res, next) => {
    //const {email} = req.body;
        // sendmail(email)
     await Blog.find().sort({ createdAT: -1 })
          .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
          })
          .catch((err) => {
            console.log(err)
          })
}) 