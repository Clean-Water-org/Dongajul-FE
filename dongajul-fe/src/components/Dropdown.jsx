import PropTypes from 'prop-types';
import { useId } from 'react';

const Dropdown = ({ label, items, onChange, value }) => {
  const id = useId();
  const dropdownId = `dropdown-${id}`;

  return (
    <div className='dropdown-wrap'>
      {label && <label htmlFor={dropdownId}>{label}</label>}
      <select id={dropdownId} onChange={onChange} value={value}>
        {items.map((item, index) => (
          <option key={`${dropdownId}-${index}`} value={item.value}>
            {item.text}
          </option>
        ))}
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
