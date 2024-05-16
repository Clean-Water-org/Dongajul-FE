import PropTypes from 'prop-types';
import { useId } from 'react';

const Checkbox = ({ label, checked = false, onChange, disabled }) => {
  const id = useId();
  const inputId = `checkbox-${id}`;

  return (
    <div className='checkbox-wrap'>
      <label htmlFor={inputId}>
        <input
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
