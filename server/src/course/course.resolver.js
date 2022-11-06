const CourseRepository = require("./course.repository.")

const courseResolvers = {
    Query: {
        course: (_, params) => {
            return new CourseRepository().getAll(params)
        }

    },
    Mutation: {
        createCourse: (_, params) => {
            return new CourseRepository().create(params)
        }
    }
}
module.exports = courseResolvers