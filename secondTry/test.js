const mongoose = require('mongoose');
const post = require('./models/post');


 mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db'/*,{
     useNewUrlParser:true,
     useUnifiedTopology:true
 }*/)
/* post.findByIdAndUpdate('628375d938dfe7f63661eea7', {
title:'ilk postum'
},(error,post)=>{console.log(error,post)}) */

//findbyidanddelete


 //post.find({},(error,post)=>{console.log(error,post)}) 

 
/*post.create({
    title:'ikinci post baslıgım',
    content:'post icerigi lorem'
}, (error,post)=>{
    console.log(error,post)
})*/