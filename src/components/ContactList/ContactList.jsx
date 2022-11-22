import { useSelector } from 'react-redux';
import { getContacts, getValueFilter } from '../../redux/selectors';
import { Contact } from '../Contacts/Contacts';
import { ContactsList } from './ContactList.styled';

const getVisibleContacts = (contacts, valueFilter) => {
  const normalizedFilter = valueFilter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const valueFilter = useSelector(getValueFilter);
  const visibleСontacts = getVisibleContacts(contacts, valueFilter);

  return (
    <ContactsList>
      {visibleСontacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactsList>
  );
};
