import { LABEL_BUTTON_ICON, LABEL_BUTTON_TYPE } from '@/constants/button';
import classNames from 'classnames';
import './LabelButton.scss';

const LabelButton = ({
  text = '',
  type = LABEL_BUTTON_TYPE.PRIMARY,
  icon = LABEL_BUTTON_ICON.CLIP,
  calendar = {
    showCancelButton: LABEL_BUTTON_ICON.CALENDAR ? true : false,
    date: null,
  },
  onClick = () => {},
}) => {
  const labelButtonClassName = classNames('label-button', type, icon, {
    date: icon === LABEL_BUTTON_ICON.CALENDAR,
  });
  const iconClassName = classNames('label-button-icon', icon);

  return (
    <div className={labelButtonClassName} onClick={onClick}>
      <div className={iconClassName}></div>
      <span>{text}</span>
      {calendar.showCancelButton && LABEL_BUTTON_ICON.CALENDAR && (
        <div className='cancel-button'></div>
      )}
    </div>
  );
};

export default LabelButton;
