const mongoose = require('mongoose');
const Schema = mongoose.Schema

const paymentSchema = mongoose.Schema({
    
   user: {
       type: Array,
       default: []
   },
   product: {
       type: Array,
       default: []
   },
   data: {
       type: Array,
       default:[]
   }

}, {timestamp: true})


productSchema.index({
    title: 'text',
    description: 'text'
},{weights:{
    title:5,
    desctiption:1
}})

const Payment = mongoose.model('Payment', paymenttSchema);

module.exports = { Payment }