import { useId } from 'react';
import { CHECKBOX_SIZE } from '@/constants/checkbox';
import classNames from 'classnames';
import './Checkbox.scss';

const Checkbox = ({
  label,
  checked = false,
  disabled = false,
  size = CHECKBOX_SIZE.DEFAULT,
  onChange = () => {},
}) => {
  const id = useId();
  const inputId = `checkbox-${id}`;

  const className = classNames('checkbox-label', size);

  return (
    <div className='checkbox'>
      <label htmlFor={inputId} className={className}>
        <input
          className='checkbox-input'
          id={inputId}
          type='checkbox'
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        {label && <span>{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
