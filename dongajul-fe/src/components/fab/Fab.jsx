import fav from '@/assets/icons/icon_fab.svg';
import './Fab.scss';

const Fab = ({ onClick }) => {
  return (
    <div className="fab" onClick={onClick}>
      <img src={fav} alt="fab" />
    </div>
  );
};

export default Fab;
