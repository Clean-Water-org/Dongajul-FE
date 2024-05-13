import PropTypes from 'prop-types';
import { useId } from 'react';

const Radio = ({ label, name, value = false, onChange, disabled = false }) => {
  const id = useId();
  const radioId = `radio-${id}`;

  return (
    <div className='radio-wrap'>
      <label htmlFor={radioId}>
        <input
          id={radioId}
          type='radio'
          name={name}
          value={value}
          defaultChecked={value ? true : false}
          disabled={disabled}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Radio;

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
