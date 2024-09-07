import classNames from 'classnames';
import { useState } from 'react';
import './Accordion.scss';

const Accordion = ({ title = '', content = '', index = 0, size = 0 }) => {
  const [hide, setHide] = useState(true);

  const contentClass = classNames('accordion-content', hide ? 'hide' : '');

  const arrowClass = classNames('arrow', hide ? 'down' : 'up');

  const titleClass = classNames(
    'accordion-title',
    size && !index ? 'first' : '',
    size && index === size - 1 ? 'last' : ''
  );

  const textClass = classNames(
    'text',
    size && !index ? 'first' : '',
    size && index === size - 1 ? 'last' : ''
  );

  const onClickAccordion = () => {
    setHide(!hide);
  };

  return (
    <div className='accordion'>
      <div className={titleClass} onClick={onClickAccordion}>
        <div className={textClass}>{title}</div>
        <div className={arrowClass}></div>
      </div>
      <div className={contentClass}>{content}</div>
    </div>
  );
};

export default Accordion;
