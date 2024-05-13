import PropTypes from 'prop-types';
import { forwardRef, useId } from 'react';

const Textarea = forwardRef(function Textarea(
  { value, label, placeholder, readOnly = false, disabled = false, onChange },
  ref
) {
  const id = useId();
  const textareaId = `textarea-${id}`;

  return (
    <div className='textarea-wrap'>
      {label && <label htmlFor={textareaId}>{label}</label>}
      <textarea
        id={textareaId}
        ref={ref}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
});

export default Textarea;

Textarea.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
