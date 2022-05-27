const mongoose = require('mongoose');


const KutuSchema=new mongoose.Schema({
height:{type:Number ,require:true},
weight:{type:Number ,require:true},
bust_size:{type:Number,require:true},
waist_size:{type:Number,require:true},
hip_size:{type:Number,require:true},
high_hip_size:{type:Number,require:true},


})
module.exports=mongoose.model('Kutu',KutuSchema)

