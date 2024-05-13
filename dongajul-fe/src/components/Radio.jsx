import { useId } from 'react';

const Radio = ({ label, name, value = false, onChange }) => {
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
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Radio;
