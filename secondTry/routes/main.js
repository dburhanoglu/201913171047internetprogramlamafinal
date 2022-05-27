const express=require('express')
const Post = require('../models/Post')
const router=express.Router()
const Category=require('../models/Category')
const Kutu = require('../models/Kutu')

router.get(`/`,(req,res)=>{ //ana sayfanın handlebarsına yönlendiriyor
    console.log(req.session)
    res.render(`site/index`)
})



/* router.get(`/admin`,(req,res)=>{
    res.render('admin/index')
}) */

router.get(`/blog`,(req,res)=>{
    Post.find({}).sort({$natural:-1}).lean().then(posts =>{ // postları ve  post kategorilerini bulup sıralıyor
        Category.find({}).lean().then(categories=>{// ama bu kategoriye göre post düzenleme henuz ektin degil
            res.render('site/blog',{posts:posts,categories:categories})
        })
       
    })

   
})

router.get(`/contact`,(req,res)=>{//contact kısmına yönlendiriyor
    res.render(`site/contact`)
})


router.get(`/result`,(req,res)=>{ //bu kısım henüz kullanımda değil
  console.log('burdayım')
Kutu.find({}).lean().then(kutus=>{
    res.render('site/result',{kutus:kutus})
})
        })



module.exports=router