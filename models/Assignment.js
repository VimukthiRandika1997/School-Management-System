const mongoose = require('mongoose')

const AssignmentSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true, 'Please add Your Title'],
        unique: true,
        trim: true,
        maxlength:[40,'Title cannot be more than 40']
    },

    desription:{
        type:String,
        required: [true, 'Please add Your Description'],
        unique: true,
        trim: true,
        maxlength:[60,'Description cannot more than 60']
    }
})


module.exports = mongoose.models.Assignment || mongoose.model('Assignment', AssignmentSchema)