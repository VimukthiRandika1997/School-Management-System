const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required: [true, 'please add your name'],
        unique:false,
        maxLength:[20,"Characters can't more than 20"]

    },

    LastName:{
        type:String,
        required: [true, 'please add your name'],
        unique:false,
        maxLength:[20,"Characters can't more than 20"]
    }
})


module.exports = mongoose.models.StudentSchema