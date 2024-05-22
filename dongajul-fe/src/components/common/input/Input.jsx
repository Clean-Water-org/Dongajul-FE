import PropTypes from 'prop-types';
import { forwardRef, useId } from 'react';
import { INPUT_TYPE } from '../../../constants/input';
import './Input.scss';

const Input = forwardRef(function Input(
  {
    label,
    value,
    name,
    placeholder,
    type = INPUT_TYPE.TEXT,
    onChange = () => {},
    readOnly,
    disabled,
  },
  ref
) {
  const id = useId();
  const inputId = `input-${id}`;

  return (
    <div className='Input'>
      {label && (
        <label htmlFor={inputId} className='input-label'>
          {label}
          <input
            className='input-with-label'
            ref={ref}
            id={inputId}
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            readOnly={readOnly}
            disabled={disabled}
          />
        </label>
      )}
      {!label && (
        <input
          className='input-without-label'
          ref={ref}
          id={inputId}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
        />
      )}
    </div>
  );
});

export default Input;

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(Object.values(INPUT_TYPE)),
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};
