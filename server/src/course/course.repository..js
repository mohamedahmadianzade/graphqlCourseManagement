const BaseRepository = require('../baseRepository');
const CourseEntity = require('./course.entity');
const { v4 } = require('uuid');
class CourseRepository extends BaseRepository {
    course = [{
        courseId: "1",
        teacher: "ahmadian",
        price: 1200,
        name: "AAAAAA"
    }]
    async getAll({ name }) {
        let query = {}
        if (name) query = { name }
        let result = await CourseEntity.find(query);
        return this.serviceResult(result)
    }
    async create({ name, teacher, price }) {
        let repeatedCourseByname = await CourseEntity.findOne({ name, teacher })
        if (repeatedCourseByname) this.raiseError("course name and teacher name is exist")
        let course = new CourseEntity({ name, teacher, price })
        course.save()
        return this.serviceResult(course)
    }

}
module.exports = CourseRepository