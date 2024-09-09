import classNames from 'classnames';
import './Switch.scss';

const Switch = ({ checked = false, disabled = false, onChange = () => {} }) => {
  const className = classNames('switch', disabled ? 'disabled' : '');

  return (
    <label className={className}>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className='slider'></span>
    </label>
  );
};

export default Switch;
