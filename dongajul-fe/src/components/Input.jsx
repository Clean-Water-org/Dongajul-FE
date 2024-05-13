import { forwardRef, useId } from 'react';
import { INPUT_TYPE } from '../constants/input';

const Input = forwardRef(function Input(
  {
    label,
    value,
    name,
    placeholder,
    type = INPUT_TYPE.TEXT,
    onChange,
    readOnly,
    disabled,
  },
  ref
) {
  const id = useId();
  const inputId = `input-${id}`;

  return (
    <div className='input-wrap'>
      <label htmlFor={inputId}>
        {label}
        <input
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
    </div>
  );
});

export default Input;
