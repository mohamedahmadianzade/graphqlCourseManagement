import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Outlet } from 'react-router-dom';

const UserComponent = () => {
    return (
        <div>
            <Row className="justify-content-md-center">
                <Col lg="3">
                    <div class="float-sm-left">
                        <Link to={"/user/create"}>   <Button variant="outline-primary">
                            create
                        </Button>{' '}
                        </Link>
                        <Link to={'/user/list'}>   <Button variant="outline-success">
                            All users
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
export default UserComponent