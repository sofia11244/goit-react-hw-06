import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem.jsx';
import styles from './component.module.css';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice"; // contactsSlice'tan eylemi al

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items); // Kişileri seç

    // Silme fonksiyonu belki delete işe yaramz
    const handleDelete = (id) => {
        dispatch(deleteContact(id)); 
    };

    return (
        <ul className={styles.list}>
            {contacts.map(({ id, name, number }) => (
                <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDelete={handleDelete} 
                />
            ))}
        </ul>
    );
};
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactList;
