import PropTypes from 'prop-types';
import { StyledNotification } from './Notifications.styled';

const Notifications = ({ message }) => (
  <StyledNotification>{message}</StyledNotification>
);

export default Notifications;

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};
