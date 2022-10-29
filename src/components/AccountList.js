import React from 'react';
import Table from 'react-bootstrap/Table';

export const AccountList = ({accounts}) => {
  console.log('AccountList Component: ', accounts);
  return (
    <div>
      <h2>List of accounts</h2>
      <Table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Email Address</th>
            <th>Mobile Number</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>

          {accounts.map((account, index) => (
            <tr key={index}>
              <td>{account.firstName} {account.lastName}</td>
              <td>{account.gender === "M" ? "Male" : "Female"}</td>
              <td>{account.emailAddress}</td>
              <td>{account.mobileNumber}</td>
              <td>{account.nationality}</td>
            </tr>
          ))}
          
        </tbody>
      </Table>
    </div>
  )
}
