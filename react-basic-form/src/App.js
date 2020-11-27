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
      </form>
    </div>
  );
}

export default App;
