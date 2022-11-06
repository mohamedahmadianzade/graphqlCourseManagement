const UserCourseRepository = require("./userCourse.repository")

const UserCourseResolver = {
    Query: {
        addCourseMember: (_, params) => {
            return new UserCourseRepository().addCourseMember(params)
        },
        removeCourseMemeber: (_, params) => {
            return new UserCourseRepository().removeCourseMemeber(params)
        },
        courseMembers: (_, { courseId }) => {
            return new UserCourseRepository().courseMembers(courseId)
        },
        userCourses: (_, { userId }) => {
            return new UserCourseRepository().userCourses(userId)
        },
        courseStatus: (_, params) => {
            return new UserCourseRepository().courseStatus()
        },

    }
}
module.exports = UserCourseResolver