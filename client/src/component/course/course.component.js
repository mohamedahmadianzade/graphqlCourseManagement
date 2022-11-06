import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { Link, Outlet } from 'react-router-dom';

const CourseComponent = () => {
    return (
        <div>
            <Row className="justify-content-md-center">
                <Col lg="3">
                    <div class="float-sm-left">
                        <Link to={"/course/create"}>
                            <Button variant="outline-primary">
                                Create
                            </Button>{' '}
                        </Link>
                        <Link to={'/course/list'}>
                            <Button variant="outline-success">
                                All courses
                            </Button>{' '}
                        </Link>
                    </div>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </div>
    )
}
export default CourseComponent