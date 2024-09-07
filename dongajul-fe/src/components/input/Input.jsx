import PropTypes from 'prop-types';
import { forwardRef, useId, useState } from 'react';
import { INPUT_TYPE, INPUT_SIZE, INPUT_AUTO_FORMAT } from '@/constants/input';
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
    max = 100,
    onBlur = () => {},
    validated = false,
    autoFormat = INPUT_AUTO_FORMAT.NONE,
  },
  ref
) {
  const id = useId();
  const inputId = `input-${id}`;

  const [searchFocus, setSearchFocus] = useState(false);

  const onFocus = () => {
    if (size !== INPUT_SIZE.SEARCH) return;
    setSearchFocus(true);
  };

  const blurHandler = (e) => {
    if (size === INPUT_SIZE.SEARCH) {
      setSearchFocus(false);
    } else {
      onBlur(e);
    }
  };

  const onChangeInput = (e) => {
    let newEvent = e;
    if (autoFormat === INPUT_AUTO_FORMAT.PHONE) {
      const { value } = e.target;
      let newValue = value.replace(/[^0-9]/g, '');
      if (newValue.length > 3 && newValue.length <= 7) {
        newValue = newValue.replace(/(\d{3})(\d{1,4})/, '$1-$2');
      } else if (newValue.length > 7) {
        newValue = newValue.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
      }

      if (newValue.length > 13) {
        newValue = newValue.slice(0, 13);
      }
      newEvent = {
        ...e,
        target: { ...e.target, value: newValue, name: e.target.name },
      };
      onChange(newEvent);
    } else onChange(e);
  };

  return (
    <div
      className={classNames(
        'input-wrapper',
        { 'search-default': size === INPUT_SIZE.SEARCH && !searchFocus },
        { 'search-focus': searchFocus }
      )}
    >
      <input
        className={classNames(
          'input',
          size,
          { error: warning },
          { validated: validated }
        )}
        ref={ref}
        id={inputId}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChangeInput(e)}
        readOnly={readOnly}
        disabled={disabled}
        maxLength={max}
        onFocus={onFocus}
        onBlur={blurHandler}
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
