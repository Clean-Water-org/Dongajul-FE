import { LABEL_COLOR, LABEL_SIZE, LABEL_TYPE } from '@/constants/button';
import classNames from 'classnames';
import './Label.scss';

const Label = ({
  text = '',
  size = LABEL_SIZE.MEDIUM,
  color = LABEL_COLOR.DEFAULT,
  type = LABEL_TYPE.PRIMARY,
  onClick = () => {},
}) => {
  const className = classNames('label', size, color, type);

  return (
    <div className={className} onClick={onClick}>
      <span>{text}</span>
    </div>
  );
};

export default Label;
