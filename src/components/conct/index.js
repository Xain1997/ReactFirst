import React from 'react';
import { Head } from '../head';
const Contacts = ({ contacts }) => {
  return (
    <div>
      <Head />
      <center><h1>Contact List</h1></center>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <span><b>Name: </b>{contact.name}</span><br/>
          <span><b>Email: </b>{contact.email}</span><br/>
          <span><b>City: </b>{contact.address.city}</span>
        </div>
      ))}
    </div>
  )
};
export default Contacts;