const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        min: 1
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    students_number: {
        type: Number,
        required: true,
        unique: true,
        min: 1
    },
    year_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Year',
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
