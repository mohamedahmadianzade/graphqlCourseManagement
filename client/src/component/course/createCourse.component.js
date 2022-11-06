import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default class CreateCourseComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '1', teacher: '2', price: '3' }

        this.handleChange = this.handleChange.bind(this);
        this.createUser = this.createUser.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }


    createUser() {
        alert(JSON.stringify(this.state))
    }
    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Course name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter course name" value={this.state.name} onChange={this.handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="teacher">
                    <Form.Label>Teacher:</Form.Label>
                    <Form.Control type="email" placeholder="Enter teacher name" value={this.state.teacher} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>price</Form.Label>
                    <Form.Control type="password" placeholder="price" value={this.state.price} onChange={this.handleChange} />
                </Form.Group>

                <Button variant="primary" type="button" onClick={this.createUser}>
                    Create User
                </Button>
            </Form>
        )
    }
}
