import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const ContactBook = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const addContact = () => {

    if (name.trim() === '') {
      alert('Please enter a contact name.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim()
    };

    setContacts([...contacts, newContact]);

    setName('');
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Contact Name:</label>
        <input
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            value={name}
            onChange={handleNameChange}
        />
        <button type="button" onClick={addContact}>Add Contact</button>
      </form>

      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactBook;