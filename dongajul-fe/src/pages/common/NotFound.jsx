import './NotFound.scss';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <p>🚨 페이지를 찾을 수 없습니다.</p>
      <a href='/'>메인으로</a>
    </div>
  );
};

export default NotFound;
