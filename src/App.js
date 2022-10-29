import { Container, Row, Col } from 'react-bootstrap';
import { AccountList } from './components/AccountList';
import { Form } from './components/Form';
import './App.css';

function App() {
  return (
    <Container>
      <h1>FACL Locker Room</h1>
      <Row>
        <Col xm={12} md={8}>
          <h2>Account List</h2>
          <AccountList />
        </Col>
        <Col xm={12} md={4}>
          <h2>Add Account</h2>
          <Form />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
