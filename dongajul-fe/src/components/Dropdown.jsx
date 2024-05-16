import PropTypes from 'prop-types';
import { useId } from 'react';

const Dropdown = ({ label, items = [], value, disabled = false, onChange }) => {
  const id = useId();
  const dropdownId = `dropdown-${id}`;

  return (
    <div className='dropdown-wrap'>
      {label && <label htmlFor={dropdownId}>{label}</label>}
      <select
        id={dropdownId}
        onChange={onChange}
        value={value}
        disabled={disabled}
      >
        {items.length > 0 ? (
          items.map((item, index) => (
            <option key={`${dropdownId}-${index}`} value={item.value}>
              {item.text}
            </option>
          ))
        ) : (
          <option disabled>아이템이 없습니다.</option>
        )}
      </select>
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
