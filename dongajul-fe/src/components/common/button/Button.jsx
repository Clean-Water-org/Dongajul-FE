import PropTypes from 'prop-types';
import { BUTTON_SIZE, BUTTON_TYPE } from '@/constants/button';
import classNames from 'classnames';
import './Button.scss';

const Button = ({
  text,
  type = BUTTON_TYPE.PRIMARY,
  size = BUTTON_SIZE.MEDIUM,
  disabled = false,
  onClick = () => {},
}) => {
  if (Object.values(BUTTON_TYPE).indexOf(type) === -1) {
    throw new Error('Invalid button type');
  }

  return (
    <button
      className={classNames('button', type, size)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(BUTTON_TYPE)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZE)),
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
