import PropTypes from 'prop-types';
import { ContactItem, DeleteButton } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ name, id, number }) => (
      <ContactItem key={id}>
        {name}: {number}
        <DeleteButton type="button" onClick={() => onDelete(id)}>
          Delete
        </DeleteButton>
      </ContactItem>
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
