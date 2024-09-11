import { useEffect, useState } from 'react';
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_ICON } from '@/constants/button';
import classNames from 'classnames';
import './Button.scss';

const Button = ({
  text = '',
  type = BUTTON_TYPE.PRIMARY,
  size = BUTTON_SIZE.MEDIUM,
  disabled = false,
  onClick = () => {},
  icon = { useIcon: false, type: BUTTON_ICON.NONE },
}) => {
  const buttonClassName = classNames('button', type, size);
  const iconClassName = classNames('button-icon', icon.type);
  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {text}
      {icon.useIcon && icon.type !== BUTTON_ICON.NONE && (
        <div className={iconClassName}></div>
      )}
    </button>
  );
};

export default Button;
