const mongoose = require('mongoose');

const  CategorySchema=new mongoose.Schema({
    name:{type:String ,required:true ,unique:true},//require zorunlu alan olması icin



})
module.exports=mongoose.model(`Category`,CategorySchema)