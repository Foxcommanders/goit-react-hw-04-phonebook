import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import Filter from './Filter/Filter';

export function App () {

  const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem('contacts')) ?? [ ] );
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])
  
  const onDeleteContact = id => {
    setContacts(PrevState => PrevState.filter(contact => contact.id !== id));
  };

  const onAddContact = contactData => {
    const checkedContact = contacts.find(
      contact => contactData.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (checkedContact) {
      alert(`${contactData.name} is already in contacts`);
      return;
    } else {
      const newContact = { id: nanoid(), ...contactData };
      setContacts(PrevState => [newContact, ...PrevState]);
    }
  };

  const onFilter = filterData => {
    setFilterValue( filterData );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name
      .toLowerCase()
      .includes(filterValue.toLowerCase().trim()));

    return (
      <Section>
        <h1>
          <span>☎︎ </span>Phonebook
        </h1>
        <Form onAddContact={onAddContact} />
        <h2>Contacts</h2>
        <Filter onFilter={onFilter} filter={filterValue} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        />
      </Section>
    );
  }
