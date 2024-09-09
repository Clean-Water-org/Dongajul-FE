import { useId } from 'react';
import './Radio.scss';
import classNames from 'classnames';

const Radio = ({
  label,
  name,
  value = false,
  onChange,
  disabled = false,
  image = { useImage: false, src: '', alt: '' },
}) => {
  const id = useId();
  const radioId = `radio-${id}`;

  const className = classNames(
    'radio-input',
    image.useImage ? 'use-image' : 'no-image'
  );

  return (
    <div className='radio'>
      <label htmlFor={radioId}>
        <input
          className={className}
          id={radioId}
          type='radio'
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
        {image.useImage && (
          <div className='radio-image'>
            <img src={image.src} alt={image.alt} />
          </div>
        )}
        {label && <span>{label}</span>}
      </label>
    </div>
  );
};

export default Radio;
