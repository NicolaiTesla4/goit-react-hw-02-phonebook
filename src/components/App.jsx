/* export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
}; */

import React, { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({
    contacts: [],
    name: '',
    number: ''
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.name.trim() === '' || state.number.trim() === '') return;
    const newContact = {
      id: Math.random().toString(36).substr(2, 9),
      name: state.name,
      number: state.number
    };
    setState({ ...state, contacts: [...state.contacts, newContact], name: '', number: '' });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          autocomplete="username"
          value={state.name}
          onChange={handleChange}
          placeholder="Enter name"
          required
        />
        <input
          type="tel"
          name="number"
          value={state.number}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />
        <button type="submit">Add Contact</button>
      </form>
      <h2>Contacts</h2>
      <ul>
        {state.contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;