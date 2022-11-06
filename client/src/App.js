import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/navbar';
import { Outlet } from "react-router-dom";
function App() {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <NavBar />
          <Card body>
            <Outlet></Outlet>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
