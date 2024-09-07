import classNames from 'classnames';
import './Name.scss';
import { NAME_SIZE } from '@/constants/size';

const Name = ({
  name,
  suffix = '멘토',
  certified = false,
  size = NAME_SIZE.MEDIUM,
}) => {
  return (
    <div className={classNames('name', size, { certified: certified })}>
      <h1>
        {name} {suffix}
      </h1>
    </div>
  );
};

export default Name;
