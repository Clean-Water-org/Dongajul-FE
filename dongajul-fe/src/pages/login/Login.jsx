import { INPUT_SIZE } from '@/constants/input';
import Button from '@/components/common/button/Button';
import Checkbox from '@/components/common/checkbox/Checkbox';
import Input from '@/components/common/input/Input';
import { BUTTON_SIZE } from '@/constants/button';
import './Login.scss';
import naver from '@/assets/img/login_naver.png';
import kakao from '@/assets/img/login_kakao.png';
import { NavLink } from 'react-router-dom';
import Modal from '@/components/modals/Modal';
import ModalPotal from '@/components/modals/ModalPotal';
import { useState } from 'react';
import SingupModal from '@/pages/login/components/SignupModal';

const Login = () => {
  const [showModal, setShowModal] = useState(true);

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='login'>
        <section className='login__section-header'>
          <div className='header-container'>
            <h1 className='title'>동아줄</h1>
            <span className='description'>
              나만의 온라인 사수를 만나보세요!
            </span>
          </div>
        </section>
        <section className='login__section-form'>
          <div className='form-container'>
            <Input
              placeholder='이메일'
              onChange={() => {}}
              size={INPUT_SIZE.LARGE}
            />
            <Input
              placeholder='비밀번호'
              type='password'
              onChange={() => {}}
              size={INPUT_SIZE.LARGE}
            />
            <Checkbox label='이메일 저장하기' onChange={() => {}} />
          </div>
          <div className='button-container'>
            <Button text='로그인' size={BUTTON_SIZE.LARGE} onClick={() => {}} />
          </div>
        </section>
        <section className='login__section-sns'>
          <div className='sns-container'>
            <div className='label-wrapper'>
              <span>SNS 간편 로그인하기</span>
            </div>
            <div className='sns-wrapper'>
              <img src={naver} alt='네이버로 로그인' />
              <img src={kakao} alt='카카오로 로그인' />
            </div>
          </div>
        </section>
        <section className='login__section-link'>
          <div className='link-container'>
            <NavLink to='/signup'>회원가입</NavLink>
            <NavLink to='/find'>아이디 찾기</NavLink>
            <NavLink to='/find'>비밀번호 찾기</NavLink>
          </div>
        </section>
      </div>

      {showModal && (
        <ModalPotal>
          <Modal content={<SingupModal />} onClose={onClose} />
        </ModalPotal>
      )}
    </>
  );
};

export default Login;
