import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = props => <p>ERROR: {props.message}</p>;

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage;
