import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const {
    icon,
    touched,
    valid,
    invalid,
  } = props;
  const hasSuccess = touched && valid ? 'has-success' : '';
  const hasError = touched && invalid ? 'has-danger' : '';
  const InputToShow = icon ? <BaseInputWithIcon {...props} /> : <BaseInput {...props} />;
  return (
    <div className={`form-group ${hasSuccess} ${hasError}`}>
      {InputToShow}
    </div>
  );
}

export function InputAlternative(props) {
  return <Input alternative {...props} />;
}

function BaseInput(props) {
  const {
    touched,
    valid,
    additionalClasses,
    alternative,
  } = props;
  const isAlternative = alternative ? 'form-control-alternative' : '';
  const isValid = touched && valid ? 'is-valid' : '';
  const isInvalid = touched && !valid ? 'is-invalid' : '';
  return <input type="text" className={`form-control ${isAlternative} ${isValid} ${isInvalid} ${additionalClasses}`} {...props} />;
}

function BaseInputWithIcon(props) {
  const { icon, alternative, postPendedIcon } = props;
  const isAlternative = alternative ? 'input-group-alternative' : '';
  return (
    <div className={`input-group ${isAlternative}`}>
      {!postPendedIcon && <ApendedIcon icon={icon} />}
      <BaseInput {...props} />
      {postPendedIcon && <PostPendedIcon icon={icon} />}
    </div>
  );
}

function ApendedIcon({ icon }) {
  return (
    <div className="input-group-prepend">
      <span className="input-group-text">{icon}</span>
    </div>
  );
}

function PostPendedIcon({ icon }) {
  return (
    <div className="input-group-append">
      <span className="input-group-text">{icon}</span>
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  touched: PropTypes.bool,
  valid: PropTypes.bool,
  additionalClasses: PropTypes.string,
  alternative: PropTypes.bool,
  icon: PropTypes.element,
};

Input.defaultProps = {
  placeholder: '',
  disabled: false,
  touched: false,
  valid: false,
  alternative: false,
  additionalClasses: '',
  icon: null,
};
