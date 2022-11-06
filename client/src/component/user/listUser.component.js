import Table from "react-bootstrap/esm/Table"
import { useQuery } from '@apollo/client';

import { ListUserQuery } from './user.query.js'
const ListUserComponent = () => {
    const { loading, error, data } = useQuery(ListUserQuery);
    if (loading) return (<div>Loading users</div>)

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>username</th>

                </tr>
            </thead>
            <tbody>

                {data.user.data.map(item =>
                (
                    <tr key={item.userId}>
                        <td>#</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                    </tr>
                )
                )}


            </tbody>
        </Table>
    )
}
export default ListUserComponent