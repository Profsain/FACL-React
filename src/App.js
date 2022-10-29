import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AccountList } from './components/AccountList';
import { Form } from './components/Form';
import './App.css';

function App() {
  const [accounts, setAccounts] = useState([]);

  // fetch accounts data from API
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/OtegaOvie/StaticDataset/main/accounts.json')
      .then((response) => response.json())
      .then((data) => setAccounts(data));
  }, []);

  console.log('Accounts Data: ', accounts);
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <h2>Account List</h2>
          <AccountList />
        </Col>
        <Col xs={12} md={4}>
          <h2>Add Account</h2>
          <Form />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
