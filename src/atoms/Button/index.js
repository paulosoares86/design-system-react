import React from 'react';
import PropTypes from 'prop-types';

const sizeClasses = {
  sm: 'btn-sm',
  lg: 'btn-lg',
};

export default function Button(props) {
  const {
    title,
    icon,
    size,
    color,
    outline,
  } = props;
  const titleSpan = title ? <span className="btn-inner--text">{title}</span> : null;
  const btnSizeClass = sizeClasses[size] || 'btn-3';
  const btnColor = color ? `btn-${color}` : 'btn-primary';
  const btnOutline = outline ? 'btn-outline' : '';
  const btnIcon = icon ? 'btn-icon' : '';
  return (
    <button className={`btn ${btnIcon} ${btnSizeClass} ${btnColor} ${btnOutline}`} type="button">
      <span className="btn-inner--icon">{icon}</span>
      {titleSpan}
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  icon: null,
  title: 'Button',
  size: 'md',
  color: 'primary',
  outline: false,
};
