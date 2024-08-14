// src/components/ContactList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../Event/Slice';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <span>{contact.name} - {contact.email}</span>
            <button onClick={() => dispatch(removeContact(contact.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
