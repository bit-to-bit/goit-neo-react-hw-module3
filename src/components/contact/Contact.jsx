import css from './Contact.module.css';
import { BiSolidPhone, BiSolidUser } from 'react-icons/bi';

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={css.card}>
      <div className={css.info}>
        <p className={css.name}>
          <BiSolidUser /> {contact.name}
        </p>
        <p className={css.phone}>
          <BiSolidPhone /> {contact.number}
        </p>
      </div>
      <div className={css.actions}>
        <button
          onClick={() => {
            onDelete(contact.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
