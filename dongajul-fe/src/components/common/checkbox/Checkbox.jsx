import PropTypes from 'prop-types';
import { useId } from 'react';
import './Checkbox.scss';

const Checkbox = ({
  label,
  checked = false,
  onChange = () => {},
  disabled,
}) => {
  const id = useId();
  const inputId = `checkbox-${id}`;

  return (
    <div className='Checkbox'>
      <label htmlFor={inputId} className='checkbox-label'>
        <input
          className='checkbox-input'
          id={inputId}
          type='checkbox'
          defaultChecked={checked ? true : false}
          onChange={onChange}
          disabled={disabled}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
