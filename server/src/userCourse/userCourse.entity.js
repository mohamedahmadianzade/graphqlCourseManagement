const mongoose = require('mongoose');
const { v4 } = require('uuid');
const UserCourseEntity = mongoose.model('userCourse', {
    userCourseId: { type: String, default: () => v4() },
    userId: String,
    courseId: String
})
module.exports = UserCourseEntity