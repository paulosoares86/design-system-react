import React from 'react';
import PropTypes from 'prop-types';

const style = {
  width: '40px',
  height: '40px',
  lineHeight: '40px',
  textAlign: 'center',
  fontFamily: 'NucleoIcons',
  display: 'inline-block',
  transform: 'translateY(50%)',
  borderRadius: '50%',
  fontSize: '20px',
  opacity: '1',
  color: 'black',
};

export default function Icon({ content }) {
  return (
    <p style={style}>{content}</p>
  );
}

Icon.propTypes = {
  content: PropTypes.string.isRequired,
};
