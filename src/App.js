import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AccountList } from './components/AccountList';
import { FormComponent } from './components/FormComponent';
import './App.css';

function App() {
  const [accounts, setAccounts] = useState([]);

  // fetch accounts data from API
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/OtegaOvie/StaticDataset/main/accounts.json')
      .then((response) => response.json())
      .then((data) => setAccounts(data));
  }, []);

  return (
    <div class="container">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <AccountList accounts={accounts} />
          </Col>

          <Col xs={12} md={4}>
            <FormComponent accountsProps={{accounts, setAccounts}}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
