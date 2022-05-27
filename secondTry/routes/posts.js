const express = require('express')
const router = express.Router()
const Post = require(`../models/Post`)
const path = require('path')
const Category = require('../models/Category')

/*router.get(`post/new`,(req,res)=>{
    res.render(`site/addpost`)
})

router.post(`post/test`,(req,res)=>{
 Post.create(req.body)
 res.redirect('/')
})
*/
/*eski kodumuz  
router.get('/new', (req, res) => {
    if (!req.session.userId) {
        res.redirect('users/login')
    }
    Category.find({}).lean().then(categories => {
        res.render('site/addpost', { categories: categories })
    })
}) */
router.get('/new',(req,res)=>{  
    if(req.session.userId){
        return res.render('site/addpost')//oturum acıksa
    }
    res.redirect('users/login') 
})

router.post(`/test`, (req, res) => {


    let post_image = req.files.post_image  //posta fotograf yukleme
    post_image.mv(path.resolve(__dirname, '../public/img/postimages', post_image.name))


    Post.create({ //postta fotograf eklenmesi
        ...req.body,
        post_image: `/img/postimages/${post_image.name}`
    })

    req.session.sessionFlash = {
        type: 'alert alert-success',
        message: 'postunuzz olusturuldu'
    }

    res.redirect('/blog')

})
router.get(`/:id`, (req, res) => {  //post kısmına postu yolla
    Post.findById(req.params.id).lean().then(post => {
        res.render('site/post', { post: post })
    })

})

module.exports = router