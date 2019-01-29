import React from 'react';
import PropTypes from 'prop-types';

export default function Link(props) {
  const { to, color, children } = props;
  const textColor = color ? `text-${color}` : 'text-white';
  return (
    <a href={to} className={`btn btn-link ${textColor}`}>{children}</a>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Link.defaultProps = {
  color: '',
};
