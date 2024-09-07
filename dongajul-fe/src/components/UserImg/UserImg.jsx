import './UserImg.scss';

const UserImg = ({ src, alt, px }) => {
  return (
    <img
      className='userImg'
      src={src}
      alt={alt}
      style={{ width: `${px}px`, height: `${px}px` }}
    />
  );
};

export default UserImg;
