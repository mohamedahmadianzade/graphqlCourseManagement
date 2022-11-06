import UserComponent from './component/user/user.component';
import CourseComponent from './component/course/course.component';
import App from './App';

import {
    createBrowserRouter,
} from "react-router-dom";
import CreateUserComponent from './component/user/createUser.component';
import ListUserComponent from './component/user/listUser.component';
import ListCourseComponent from './component/course/listCourse.component';
import CreateCourseComponent from './component/course/createCourse.component';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/user",
                element: <UserComponent />,
                children: [
                    {
                        path: "/user/create",
                        element: <CreateUserComponent />
                    },
                    {
                        path: "/user/list",
                        element: <ListUserComponent />
                    }
                ]
            },
            {
                path: "/course",
                element: <CourseComponent />,
                children: [
                    {
                        path: "/course/list",
                        element: <ListCourseComponent />
                    },
                    {
                        path: "/course/create",
                        element: <CreateCourseComponent />
                    }
                ]
            },
        ]
    },

]);
export default router