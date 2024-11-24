import '../App.css';
import ContactForm from './ContactForm.jsx';
import SearchBox from './SearchBox.jsx';
import ContactList from './ContactList.jsx';

import { useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../redux/contactsSlice'; // Redux eylemleri


function App() {
  const dispatch = useDispatch();

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
      <SearchBox/>
      <ContactList onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
