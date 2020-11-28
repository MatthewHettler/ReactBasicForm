import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="form-container">
      <form className='register-form'>
      {/* Uncomment the next line to show the success message */}
      {/* <div className='success-message'>Success! Thank you for registering</div> */}
      <input
        id='first-name'
        className='form-field'
        type='text'
        placeholder='First Name'
        Name='firstName'
      />
      {/* Uncomment the next line to show the error message */}
      {/* <span id='success-message'>Please enter a first name</span> */}
      <input
        id='last-name'
        className='form-field'
        type='text'
        placeholder='Last Name'
        name='lastName'
      />
      {/* Uncomment the next line to show the error message */}
      {/* <span id='last-name-error'>Please enter a last name</span> */}
      <input 
        id='email'
        className='form-field'
        type='text'
        placeholder='Email'
        name='email'
      />
      {/* Uncomment the next line to show the error message */}
      {/* <span id='email-error'>Please enter an email address</span> */}
      <button className='form-field' type='submit'>
        Register
      </button>
      </form>
    </div>
  );
}