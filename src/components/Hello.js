import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ onClick, reset, message }) => {
  return (
    <div>
      <h1>{ message }</h1>
      <button onClick={onClick}>Click</button>
      &nbsp;
      <button onClick={reset}>Reset</button>
    </div>
  )
}


Hello.propTypes = {
  onClick: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default Hello
