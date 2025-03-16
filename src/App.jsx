import { useState, useEffect } from 'react';
import ContactList from './components/contactList/ContactList';
import ContactForm from './components/contactForm/ContactForm';
import { nanoid } from 'nanoid';
import SearchBox from './components/searchBox/SearchBox';
import { contactsInitialState } from './constants';

const App = () => {
  const getContactInitialState = () => {
    const localData = localStorage.getItem('contacts');
    if (localData) {
      return JSON.parse(localData);
    }
    return contactsInitialState;
  };

  const [contacts, setContacts] = useState(getContactInitialState);

  const [filter, setFilter] = useState('');

  console.log(contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const saveContact = contact => {
    setContacts(contacts => [...contacts, { ...contact, id: nanoid() }]);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className='container'>
        <h1>Phonebook</h1>
      </div>
      <ContactForm save={saveContact} />
      <SearchBox onChange={setFilter} inputValue={filter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
};

export default App;
