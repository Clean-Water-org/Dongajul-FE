import { useMemo } from 'react';
import './CardReview.scss';
import anonymous from '@/assets/img/anonymous_profile.png';
import Rating from '@/components/ratings/Rating';

const CardReview = ({
  image,
  name,
  content,
  rating,
  title,
  comment,
  createdAt,
}) => {
  const profileImage = useMemo(() => {
    if (image) return image;
    return anonymous;
  }, [image]);

  return (
    <div className='card-review'>
      <div className='top'>
        <div className='top-header'>
          <div className='name'>{name} 멘티</div>
          <Rating value={rating} />
        </div>
        <div className='top-body'>
          <div className='title'>{title}</div>
          <div className='content'>{content}</div>
        </div>
        <div className='top-date'>{createdAt}</div>
      </div>
      <div className='bottom'>
        <div className='profile-image'>
          <img src={profileImage} alt='프로필' />
        </div>
        <div className='comment'>
          <div className='name'>{comment.name} 멘토</div>
          <div className='content'>
            <span>{comment.content}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
