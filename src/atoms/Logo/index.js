import React from 'react';

export default function Logo(props) {
  const { color } = props;
  const logoColor = color || 'white';
  const logoUrl = `https://s3.amazonaws.com/scubrasil-design/images/logo/${logoColor}.png`;
  return <img src={logoUrl} alt="logo" {...props} />;
}
