import '../App.css';
import ContactForm from './ContactForm.jsx';
import SearchBox from './SearchBox.jsx';
import ContactList from './ContactList.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../redux/contactsSlice'; // Redux eylemleri

import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items); // Redux store'dan `contacts` alın
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact)); // Redux eylemini tetikle
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId)); // Redux eylemini tetikle
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} /> {/* Redux'a bağlandı */}
      <SearchBox inputValue={searchValue} handleChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} /> {/* Redux'a bağlandı */}
    </div>
  );
}

export default App;
