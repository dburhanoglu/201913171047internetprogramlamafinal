const express=require('express')
const { parse } = require('handlebars')
const { connection } = require('mongoose')
//const Post = require('../models/Post')
const router=express.Router()
const Category=require('../models/Category')
const Kutu=require('../models/Kutu')



router.get(`/new`,(req,res)=>{
    res.render(`site/calculation`) //BU BELGEDE  ŞU AN SADECE BU KISIM KULLANILMIYOR
})


router.get(`/:id`,(req,res)=>{
    Kutu.findById(req.params.id).lean().then(kutu=>{//buralarda kutus olabilir
        res.render('site/kutu',{kutu:kutu}) 
    })
   
 
})/* 
// Kutu.instructors.find({},{height:1,weight:1}).lean().pretty()
router.get(`/:id`,(req,res)=>{
   Kutu.findById({}).lean().then(kutu=>{
       res.render('site/kutu',{kutu:kutu})
   })
}) */

router.post(`/test2`,(req,res)=>{
Kutu.create(req.body)

res.redirect('/')
})
/* hintli abi
router.get("/addkutu",(req,res)=>{
    connection.query("SELECT *FROM Kutu",(err,result)=>{
        console.log(result)
        res.render("/result",{data:result[0]})
    })
    router.post('/result',(req,res)=>{
        console.log(req.body.no1)
    })
})
 */

module.exports=router