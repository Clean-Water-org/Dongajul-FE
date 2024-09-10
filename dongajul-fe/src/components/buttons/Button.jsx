import PropTypes from 'prop-types';
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_ICON } from '@/constants/button';
import classNames from 'classnames';
import './Button.scss';
import iconCheckWhite from '@/assets/icons/icon_check_white.svg';
import iconCheckBlue from '@/assets/icons/icon_check_blue.svg';
import { useEffect, useState } from 'react';

const Button = ({
  text,
  type = BUTTON_TYPE.PRIMARY,
  size = BUTTON_SIZE.MEDIUM,
  disabled = false,
  onClick = () => {},
  useIcon = BUTTON_ICON.NONE,
}) => {
  if (Object.values(BUTTON_TYPE).indexOf(type) === -1) {
    throw new Error('Invalid button type');
  }

  const [selectedIcon, setSelectedIcon] = useState(null);

  // TODO 동적으로 아이콘 꽂는 방법 찾아보기
  useEffect(() => {
    if (useIcon !== BUTTON_ICON.NONE) {
      if (Object.values(BUTTON_ICON).indexOf(useIcon) === -1) {
        throw new Error('Invalid button icon');
      }

      setSelectedIcon(
        useIcon === BUTTON_ICON.CHECK_WHITE ? iconCheckWhite : iconCheckBlue
      );
    }
  }, [useIcon]);

  return (
    <button
      className={classNames('button', type, size)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {useIcon !== BUTTON_ICON.NONE && <img src={selectedIcon} alt={useIcon} />}
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
