import ContactListItem from './ContactListItem.jsx';
import styles from './component.module.css';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice"; // contactsSlice'tan eylemi al

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const nameFilter = useSelector(state => state.filters.nameFilter);

    const filteredContacts =contacts.filter(contact => 
        contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

    // Silme fonksiyonu belki delete işe yaramz
    const handleDelete = (id) => {
        dispatch(deleteContact(id)); 
    };

    return (
        <ul className={styles.list}>
            {filteredContacts.map((contact) => (
                <ContactListItem
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={handleDelete}
              />
            ))}
        </ul>
    );
};

export default ContactList;
