import anonymous from '@/assets/img/anonymous_profile.png';
import Name from '@/components/name/Name';
import { NAME_SIZE } from '@/constants/size';
import { useMemo } from 'react';
import './CardProfileVariant5.scss';

const CardProfileVariant5 = ({ image, title, name, certified, content }) => {
  const profileImage = useMemo(() => {
    if (image) return image;
    return anonymous;
  }, [image]);

  return (
    <div className='card-profile-variant-5'>
      <div className='top'>
        <div className='top-left'>
          <img src={profileImage} alt='프로필이미지' />
        </div>
        <div className='top-right'>
          <div className='title-primary'>{title.primary}</div>
          <div className='title-secondary'>{title.secondary}</div>
        </div>
      </div>
      <div className='bottom'>
        <div className='bottom-name'>
          <Name name={name} size={NAME_SIZE.SMALL} certified={certified} />
        </div>
        <div className='bottom-content'>
          <p className='content'>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProfileVariant5;
