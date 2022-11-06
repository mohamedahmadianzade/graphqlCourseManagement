import Table from "react-bootstrap/Table"
import { rewriteURIForGET, useQuery } from "@apollo/client"
import ListCourseQuery from "./course.query"
const ListCourseComponent = () => {
    const { loading, data } = useQuery(ListCourseQuery)
    if (loading) return (<div>loading ....</div>)

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>course name</th>
                    <th>teacher</th>
                    <th>price</th>

                </tr>
            </thead>
            <tbody>
                {
                    data.course.data.map(item => (
                        <tr key={item.courseId}>
                            <td>#</td>
                            <td>{item.name}</td>
                            <td>{item.teacher}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))
                }



            </tbody>
        </Table>
    )
}
export default ListCourseComponent