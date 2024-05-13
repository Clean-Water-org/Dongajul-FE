import { BUTTON_TYPE } from '../constants/button';

const Button = ({
  text,
  type = BUTTON_TYPE.PRIMARY,
  disabled = false,
  onClick,
}) => {
  if (Object.values(BUTTON_TYPE).indexOf(type) === -1) {
    throw new Error('Invalid button type');
  }

  return (
    <button className={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
