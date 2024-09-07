import starFull from '@/assets/icons/icon_star_full.svg';
import starHalf from '@/assets/icons/icon_star_half.svg';
import starEmpty from '@/assets/icons/icon_star_empty.svg';
import './Rating.scss';

const Rating = ({ value }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (value >= i + 1) {
        stars.unshift(<img src={starFull} alt='full star' key={i} />);
      } else if (value >= i + 0.5) {
        stars.unshift(<img src={starHalf} alt='half star' key={i} />);
      } else {
        stars.unshift(<img src={starEmpty} alt='empty star' key={i} />);
      }
    }
    return stars;
  };

  return (
    <div className='rating'>
      {renderStars()}
      <span className='rating-score'>{value.toFixed(1)}</span>
    </div>
  );
};

export default Rating;
