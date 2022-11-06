const mongoose = require('mongoose');
const { v4 } = require('uuid');
const CourseEntity = mongoose.model('course', {
    courseId: {
        type: String, default: () => v4()
    },
    name: String,
    price: Number,
    teacher: String
})
module.exports = CourseEntity