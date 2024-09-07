import classNames from 'classnames';
import './Helpertext.scss';

const Helpertext = ({ text, warning }) => {
  if (!text) return null;

  return (
    <div className='helpertext'>
      {!!text && (
        <span className={classNames({ warning: warning })}>{text}</span>
      )}
    </div>
  );
};

export default Helpertext;
