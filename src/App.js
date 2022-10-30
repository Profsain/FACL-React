import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AccountList } from './components/accounts/AccountList';
import { FormComponent } from './components/form/FormComponent';
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
    <div className="App">
      <div class="container-fluid">
        <Row>
          <Col xs={12} md={8}>
            <AccountList accounts={accounts} />
          </Col>

          <Col xs={12} md={4}>
            <FormComponent accountsProps={{accounts, setAccounts}}/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
