import PropTypes from 'prop-types';
import { forwardRef, useId } from 'react';
import { INPUT_TYPE, INPUT_SIZE } from '@/constants/input';
import classNames from 'classnames';
import './Input.scss';

const Input = forwardRef(function Input(
  {
    value,
    name,
    placeholder,
    type = INPUT_TYPE.TEXT,
    onChange = () => {},
    readOnly,
    disabled,
    warning = false,
    size = INPUT_SIZE.MEDIUM,
  },
  ref
) {
  const id = useId();
  const inputId = `input-${id}`;

  return (
    <div className="Input">
      <input
        className={classNames('input', size, { error: warning })}
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
