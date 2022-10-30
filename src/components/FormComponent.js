import React, { useEffect, useState } from 'react';

export const FormComponent = ({accountsProps}) => {
 
  const [nationalityList, setNationalityList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [nationality, setNationality] = useState('');

  const {accounts , setAccounts} = accountsProps

  // fetch nationality list from api
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setNationalityList(data))
      .catch((error) => error);
  }, []);

  // update form input values
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'emailAddress':
        setEmailAddress(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'phoneNumber':
        setMobileNumber(value);
        break;
      case 'nationality':
        setNationality(value);
        break;
      default:
        break;
    }
  }

  // clear input field after submit
  const clearInputField = () => {
    setFirstName('');
    setLastName('');
    setEmailAddress('');
    setGender('');
    setMobileNumber('');
    setNationality('');
  }

  // Submit form data and update accounts list
  const submitHandler = (event) => {
    event.preventDefault();
    
    const newAccount = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      gender: gender,
      mobileNumber: mobileNumber,
      nationality: nationality,
    }
    // update accounts list
    setAccounts([...accounts, newAccount])
    clearInputField();
    
  }
  return (
    <div class="container">
      <h2>Create account</h2>
      <form onSubmit={submitHandler}>
        <div class="form-group mb-3">
          <input
            type="text"
            class="form-control"
            name="firstName"
            placeholder="First name"
            value={firstName}
            onChange={onChangeHandler}
          />
        </div>
        <div class="form-group mb-3">
          <input
            type="text"
            class="form-control"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={onChangeHandler}
          />
        </div>
        <div class="form-group mb-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="M"
              onChange={onChangeHandler}
            />
            <label class="form-check-label" for="male">
              Male
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="F"
              onChange={onChangeHandler}
            />
            <label class="form-check-label" for="female">
              Female
            </label>
          </div>
        </div>

        <div class="form-group mb-3">
          <input
            type="email"
            class="form-control"
            name="emailAddress"
            placeholder="Email Address"
            value={emailAddress}
            onChange={onChangeHandler}
          />
        </div>
        <div class="form-group mb-3">
          <input
            type="tel"
            class="form-control"
            name="phoneNumber"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={onChangeHandler}
          />
        </div>
        <div class="form-group mb-3">
          <select class="custom-select" name="nationality" onChange={onChangeHandler}>
            <option>Nationality </option>
            {nationalityList.map((national = {}) => (
              <option 
                key={national.cca2}
                value={national.name.common}
              >
                {national.name.common}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
