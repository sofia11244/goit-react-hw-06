import '../App.css';
import ContactForm from './ContactForm.jsx';
import SearchBox from './SearchBox.jsx';
import ContactList from './ContactList.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, updateSearchValue } from '../redux/contactsSlice'; // Redux eylemleri

import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const searchValue = useSelector((state) => state.contacts.searchValue);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    dispatch(updateSearchValue(searchInput));
  };

  const handleSearchChange = (evt) => {
    setSearchInput(evt.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox
        inputValue={searchInput}
        handleChange={handleSearchChange}
        onSearch={handleSearch}
      />
      <button onClick={handleSearch}>Ara</button>
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
