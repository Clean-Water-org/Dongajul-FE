import classNames from 'classnames';
import './Tapbar.scss';
import { useState } from 'react';

const Tapbar = ({ items = [{ key: '', text: '' }], selected }) => {
  const [selectedItem, setSelectedItem] = useState(selected);

  const onClick = (key) => {
    setSelectedItem(key);
  };

  return (
    <div className='tapbar'>
      <ul className='tapbar__container'>
        {items.map((item) => (
          <li
            className={classNames('tapbar__item', {
              active: item.key === selectedItem,
            })}
            key={`tapbar-${item.key}`}
            onClick={() => onClick(item.key)}
          >
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tapbar;
