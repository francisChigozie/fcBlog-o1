const express = require('express')
const { postBlog,getBlogs,blogAbout,createBlog } = require('../controller/blogs')
const Blog= require('../models/Blog') 

const router = express.Router({mergeParams: true})

router
.route('/') 
//.post(postBlog)
.post(createBlog)
.get(getBlogs)
.get(blogAbout)


module.exports = router;