const BaseRepository = require("../baseRepository")
const UserCourseEntity = require("./userCourse.entity")

class UserCourseRepository extends BaseRepository {
    constructor(param) {
        super(param)
    }
    async addCourseMember({ courseId, userId }) {
        let exist = await UserCourseEntity.findOne({ courseId, userId })
        if (exist) this.raiseError("The selected course has this member")
        let userCourseEntity = await new UserCourseEntity({ courseId, userId })
        await userCourseEntity.save()
        return this.serviceResult(userCourseEntity)
    }
    async removeCourseMemeber({ courseId, userId }) {
        return this.serviceResult({ courseId, userId })
    }
    async courseMembers(courseId) {
        let items = await UserCourseEntity.aggregate([
            {
                $match: {
                    courseId: courseId
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "userId",
                    as: "users"
                }
            }])
        items = items.map((item) => {
            return {
                userId: item.userId,
                name: item?.users[0].name,
            }
        })
        return this.serviceResult(items)
    }
    async userCourses(userId) {

        let items = await UserCourseEntity.aggregate([{
            $match: {
                userId: userId
            }
        },
        {
            $lookup: {
                from: "courses",
                localField: "courseId",
                foreignField: "courseId",
                as: "courses"
            },

        }])
        items = items.map((item) => {
            return {
                courseId: item.courseId,
                name: item?.courses[0].name,
                teacher: item?.courses[0].teacher
            }
        })
        return this.serviceResult(items)
    }

    async courseStatus() {
        let result = await UserCourseEntity.aggregate([
            {
                $group: {
                    _id: "$courseId",
                    count: { $count: {} }
                }
            },
            {
                $lookup: {
                    from: "courses",
                    localField: "_id",
                    foreignField: "courseId",
                    as: "courses"
                },

            }
        ])
        result = result.map(item => {
            return {
                count: item.count,
                courseId: item._id,
                name: item?.courses[0].name
            }
        })


        return this.serviceResult(result)
    }
}
module.exports = UserCourseRepository