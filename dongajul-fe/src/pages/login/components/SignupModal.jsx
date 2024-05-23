import naver from '@/assets/img/login_button_naver.png';
import kakao from '@/assets/img/login_button_kakao.png';
import Button from '@/components/common/button/Button';
import { BUTTON_SIZE } from '@/constants/button';
import './SignupModal.scss';
import { NavLink } from 'react-router-dom';

const SingUpModal = () => {
  return (
    <div className='signup-modal'>
      <section className='signup-modal__section-header'>
        <div className='header-container'>
          <h1 className='title'>동아줄</h1>
          <span className='description'>
            나만의 온라인 사수 찾기! 동아줄의 회원이 되어보세요.
          </span>
        </div>
      </section>
      <section className='signup-modal__section-content'>
        <div className='img-button-container'>
          <img src={naver} alt='네이버 로그인' />
          <img src={kakao} alt='카카오 로그인' />
          <Button text='이메일로 가입하기' size={BUTTON_SIZE.LARGE} />
        </div>
      </section>
      <section className='signup-modal__section-footer'>
        <span>계정이 있으신가요?</span>
        <NavLink to='/login'>로그인하기</NavLink>
      </section>
    </div>
  );
};

export default SingUpModal;
