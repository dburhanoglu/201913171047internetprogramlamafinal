const express=require('express')
const router=express.Router()
const User=require('../models/User')
router.get(`/register`,(req,res)=>{  //registera tıklandıgında ilgili sayfaya yönlendir
    res.render(`site/register`)
})
router.post(`/register`,(req,res)=>{
    User.create(req.body,(error,user)=>{    //KULLANICI OLUSTURUP BUNA DAİR MESAj GÖNDERİYOR
        req.session.sessionFlash={
            type: 'alert alert-danger',
            message:'kullanıcı  olusturuldu'
        }
        
res.redirect('/users/login') //sonra logine yonlendir
    })
   
})
 

router.get(`/login`,(req,res)=>{
   // console.log(req.session)
    res.render(`site/login`) //SİTE İÇİNDEKİ LOGİN HANDLEBARSA YÖNLENİDİRİR
})

router.post(`/login`,(req,res)=>{        // email ve password verisini req.body ye yolla
    const {email,password} = req.body;

    User.findOne({email},(error,user)=>{
        if(error){
            console.log('dhfdggv')
        }
        if(user){
            console.log(user)
            if(user.password ==password){
                console.log('ghjder')
                req.session.userId=user._id //sifre ile kullanıcı sifresi aynı ise session id de o id yi tutsun
                res.redirect('/')
            }else {
                res.redirect('/users/login') //degilse logine yonlendirir
                console.log('aha')
            }
         } else{
            res.redirect('/users/register') //giris yapılınca kullancı kayıtlı degilse registera yonlendirir
        }
    })
})
router.get(`/logout`,(req,res)=>{  //logout a girilince session sonlandırılıyor
    req.session.destroy(()=>{
res.redirect(`/`)
    })
     
 })
module.exports=router