import React from 'react';
import PropTypes from 'prop-types';

export default function Component(props) {
  const { children } = props;
  return (
    <div className="container">
      {children}
    </div>
  );
}

Component.propTypes = {
  children: PropTypes.element.isRequired,
};
