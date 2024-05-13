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
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
