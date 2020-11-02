import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({
  message = 'You forgot to include an error message',
}) => <p>ERROR: {message}</p>;

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
