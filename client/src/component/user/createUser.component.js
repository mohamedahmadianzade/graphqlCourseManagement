import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'
import { useMutation } from '@apollo/client';
import { CreateUserQuery } from './user.query';
import { useNavigate } from "react-router-dom";
export default function CreateUserComponent() {
    const [userInfo, setUserInfo] = useState({
        name: '1', username: '1', password: '1'
    })
    const [createUser, { data, loading }] = useMutation(CreateUserQuery)

    const [error, setError] = useState("")
    const navigate = useNavigate();


    function handleChange(event) {
        setUserInfo({
            ...userInfo,
            [event.target.id]: event.target.value
        })
    }

    const submitButton = async () => {
        try {
            let result = await createUser({
                variables: {
                    name: userInfo.name,
                    username: userInfo.username,
                    password: userInfo.password,
                }
            })
            navigate("/user/list")
        } catch (err) {
            setError(err.message)
        }

    }

    return (
        <Form>
            {
                error != "" &&
                <Alert variant='danger'>
                    {error}
                </Alert>}
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Full name:</Form.Label>
                <Form.Control type="text" placeholder="Enter fullnamessssss" value={userInfo.name} onChange={handleChange} />

            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="email" placeholder="Enter username" value={userInfo.username} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={userInfo.password} onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="button" onClick={submitButton}>
                Create User
            </Button>
        </Form>
    )
}


// export default class CreateUserComponent extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { fullname: '1', username: '2', password: '3' }

//         this.handleChange = this.handleChange.bind(this);
//         this.createUser = this.createUser.bind(this);
//     }
//     handleChange(event) {
//         this.setState({
//             [event.target.id]: event.target.value
//         })
//     }


//     createUser() {
//     }
//     render() {


//         return (
//             <Form>
//                 <Form.Group className="mb-3" controlId="fullname">
//                     <Form.Label>Full name:</Form.Label>
//                     <Form.Control type="text" placeholder="Enter fullname" value={this.state.fullname} onChange={this.handleChange} />

//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="username">
//                     <Form.Label>Username:</Form.Label>
//                     <Form.Control type="email" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="password">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
//                 </Form.Group>

//                 <Button variant="primary" type="button" onClick={this.createUser}>
//                     Create User
//                 </Button>
//             </Form>
//         )
//     }
// }
