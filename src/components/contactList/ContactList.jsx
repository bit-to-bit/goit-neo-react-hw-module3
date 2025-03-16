import Contact from '../contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className='container'>
      <ul className={css.list}>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
