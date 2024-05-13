import { forwardRef, useId } from 'react';

const Textarea = forwardRef(function Textarea(
  { value, label, placeholder, readonly = false, disabled = false, onChange },
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
        readOnly={readonly}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
});

export default Textarea;
