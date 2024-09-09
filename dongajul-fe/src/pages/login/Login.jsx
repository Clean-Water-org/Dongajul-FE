import { INPUT_SIZE } from '@/constants/input';
import Button from '@/components/button/Button';
import Checkbox from '@/components/checkbox/Checkbox';
import Input from '@/components/input/Input';
import { BUTTON_SIZE } from '@/constants/button';
import './Login.scss';
import naver from '@/assets/img/login_naver.png';
import kakao from '@/assets/img/login_kakao.png';
import { NavLink, useLocation } from 'react-router-dom';
import Modal from '@/components/modals/Modal';
import ModalPotal from '@/components/modals/ModalPotal';
import { useState, useEffect } from 'react';
import SignupModal from '@/pages/login/components/SignupModal';
import Header from '@/components/Header/Header';
import queryString from 'query-string';
import logo from '@/assets/img/logo_color.png';

const Login = () => {
  const location = useLocation();
  const { signup } = queryString.parse(location.search);

  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [checked, setChecked] = useState(false);

  const onClickSignup = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeCheckbox = (e) => {
    setChecked(e.target.checked);
  };

  const onClickLogin = () => {
    console.log('로그인');
  };

  useEffect(() => {
    if (signup === 'true') {
      onClickSignup();
    }
  }, [signup]);

  return (
    <>
      <Header
        title={<img src={logo} alt='logo' />}
        description='나만의 온라인 사수를 찾아보세요!'
      />
      <div className='login'>
        <section className='login__section-form'>
          <div className='form-container'>
            <Input
              value={email}
              placeholder='이메일'
              onChange={onChangeEmail}
              size={INPUT_SIZE.LARGE}
            />
            <Input
              value={password}
              placeholder='비밀번호'
              type='password'
              onChange={onChangePassword}
              size={INPUT_SIZE.LARGE}
            />
            <Checkbox
              value={checked}
              label='이메일 저장하기'
              checked={checked}
              onChange={onChangeCheckbox}
            />
          </div>
          <div className='button-container'>
            <Button
              text='로그인'
              size={BUTTON_SIZE.LARGE}
              onClick={onClickLogin}
            />
          </div>
        </section>
        <section className='login__section-sns'>
          <div className='text-wrapper'>
            <span>또는</span>
          </div>
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
            <span onClick={onClickSignup}>회원가입</span>
            <NavLink to='/find'>아이디 찾기</NavLink>
            <NavLink to='/find'>비밀번호 찾기</NavLink>
          </div>
        </section>
      </div>

      {showModal && (
        <ModalPotal>
          <Modal content={SignupModal} onClose={onClose} />
        </ModalPotal>
      )}
    </>
  );
};

export default Login;
