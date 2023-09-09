import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import LocalStorage from 'helpers/localStorage';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter/Filter';
import Notifications from './Notifications';

export default function App() {
  const LOCAL_STORAGE_KEY = 'contacts';

  const initialContacts = () => {
    const storedContacts = LocalStorage.load(LOCAL_STORAGE_KEY);
    console.log(`get contact ${storedContacts}`);
    return storedContacts ?? [];
  };

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('Saving contacts:', contacts);
    LocalStorage.save(LOCAL_STORAGE_KEY, contacts);
  }, [contacts]);

  const addContact = newContact => {
    const isNameDuplicate = contacts.some(
      contact =>
        contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );

    if (isNameDuplicate) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...newContact },
    ]);
  };

  const onButtonDeleteClick = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const onFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const normilizedFilter = filter.toLocaleLowerCase();

  const displayedContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normilizedFilter)
  );
  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm onAdd={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={onFilterChange} />
        {contacts.length > 0 ? (
          <ContactList
            contacts={displayedContacts}
            onDelete={onButtonDeleteClick}
          />
        ) : (
          <Notifications message={'There are no contacts in your phonebook.'} />
        )}
      </Section>
      <GlobalStyle />
    </>
  );
}

// class App extends Component {
//   LOCAL_STORAGE_KEY = 'contacts';

//   state = {
//     contacts: [],
//     filter: '',
//   };

// componentDidMount() {
//   const storedContacts = LocalStorage.load(this.LOCAL_STORAGE_KEY);
//   const storedContactsLength = storedContacts?.length;
//   if (storedContacts !== null && storedContactsLength > 0) {
//     this.setState({ contacts: storedContacts });
//   } else {
//     this.setState({ contacts: [] });
//   }
// }

// componentDidUpdate(_, prevState) {
//   const { contacts } = this.state;

//   if (contacts !== prevState.contacts) {
//     LocalStorage.save(this.LOCAL_STORAGE_KEY, contacts);
//   }
// }

//   addContact = newContact => {
//     const isNameDuplicate = this.state.contacts.find(
//       contact =>
//         contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
//     );

//     if (isNameDuplicate) {
//       return alert(`${newContact.name} is already in contacts.`);
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
//     }));
//   };

//   onButtonDeleteClick = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   onFilterChange = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getDisplayedContacts = () => {
//     const { contacts, filter } = this.state;
//     const normilizedFilter = filter.toLocaleLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLocaleLowerCase().includes(normilizedFilter)
//     );
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const displayedContacts = this.getDisplayedContacts();

//     return (
//       <>
//         <Section title={'Phonebook'}>
//           <ContactForm onAdd={this.addContact} />
//         </Section>
//         <Section title="Contacts">
//           <Filter value={filter} onChange={this.onFilterChange} />
//           {contacts.length > 0 ? (
//             <ContactList
//               contacts={displayedContacts}
//               onDelete={this.onButtonDeleteClick}
//             />
//           ) : (
//             <Notifications
//               message={'There are no contacts in your phonebook.'}
//             />
//           )}
//         </Section>
//         <GlobalStyle />
//       </>
//     );
//   }
// }

// export default App;
