import { useState } from 'react';
import './form.css';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'name' ? setName(value) : (name === 'email' ? setEmail(value) : setMessage(value));
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${name} ${email} ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
      <form>
        <div className='form-group'>
            <label htmlFor='inputName'>Name</label>
            <input
            required
            className='form-control'
            id='inputName'
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter Name"
            />
        </div>
        <div className='form-group'>
            <label htmlFor='inputEmail'>Email Address</label>
            <input
            required
            className='form-control'
            id='inputEmail'
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Enter Email Address"
            />
        </div>
        <div className='form-group'>
            <label htmlFor='textareaMessage'>Message</label>
            <textarea
            required
            className='form-control'
            id='textareaMessage'
            onChange={handleInputChange}
            name="message"
            rows={4}
            placeholder='Enter Message'
            >
            </textarea>

        </div>
        <button 
        className='btn btn-primary'
        onSubmit={handleFormSubmit} 
        type="submit">
          Submit
        </button>
      </form>
  );
}

export default Form;