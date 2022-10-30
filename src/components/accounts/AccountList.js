import React from 'react';
import Table from 'react-bootstrap/Table';
import './AccountList.css';

export const AccountList = ({accounts}) => {

  return (
    <>
      <h4 className='Title'>List of accounts</h4>
      <div className='Accounts-container'>
      <Table responsive bordered>
        <thead className='T-head'>
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
    </>
  )
}
