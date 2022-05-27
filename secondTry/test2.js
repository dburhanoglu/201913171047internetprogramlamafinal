const mongoose = require('mongoose');
const Kutu=require('./models/Kutu');
const Post = require('./models/Post');

mongoose.connect('mongodb://127.0.0.1/SecondTry_test2_db', {
/* height:{type:Number ,require:true},
weight:{type:Number ,require:true},
bust_size:{type:Number,require:true},
waist_size:{type:Number,require:true},
hip_size:{type:Number,require:true},
high_hip_size*/

})
/* Kutu.findByIdAndDelete('628b5817821b42dd6594d6bd',(error,kutu)=>{
    console.log(error,kutu)
}) */

/* Kutu.findByIdAndUpdate('628b5817821b42dd6594d6bd',{

    height:180
},(error,kutu)=>{
    console.log(error,kutu)
}) */
/* Kutu.find({},(error,kutu)=>{
    console.log(error,kutu)
}
) */
/* Kutu.create({
    height :10,
    weight:30,
bust_size:20,
waist_size:33,
hip_size:22,
high_hip_size:22

},(error,kutu)=>{
    console.log(error,kutu)//bu errrorların yanındaki kutulardn emin degilim yerine post da olabilir
}

) */