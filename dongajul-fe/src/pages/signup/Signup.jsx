import Button from '@/components/common/button/Button';
import Input from '@/components/common/input/Input';
import { BUTTON_SIZE } from '@/constants/button';
import { INPUT_SIZE } from '@/constants/input';
import './Signup.scss';
import { useState } from 'react';

const Signup = () => {
  const [disabledNicknameButton, setDisabledNicknameButton] = useState(true);
  const [disabledSendAuthButton, setDisabledSendAuthButton] = useState(true);
  const [disabledCheckAuthButton, setDisabledCheckAuthButton] = useState(true);

  const onClickSignup = () => {
    alert('회원가입 버튼 클릭');
  };

  const onChangeValues = (e) => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <>
      <div className='signup'>
        <section className='signup__section-header'>
          <div className='header-container'>
            <h1 className='title'>회원가입</h1>
            <span className='description'>나만의 온라인 사수 찾기, 동아줄</span>
          </div>
        </section>
        <section className='signup__section-form'>
          <div className='input-container'>
            <div className='input-label'>
              <span>이메일</span>
            </div>
            <div className='input-content'>
              <Input
                placeholder='이메일을 입력하세요'
                size={INPUT_SIZE.LARGE}
                name='email'
                onChange={onChangeValues}
              />
            </div>
          </div>

          <div className='input-container'>
            <div className='input-label'>
              <span>닉네임</span>
            </div>
            <div className='input-content'>
              <Input
                placeholder='닉네임을 입력하세요'
                size={INPUT_SIZE.MEDIUM}
                name='nickname'
                onChange={onChangeValues}
              />
              <Button
                text='중복확인'
                size={BUTTON_SIZE.SMALL}
                disabled={disabledNicknameButton}
              />
            </div>
          </div>

          <div className='input-container'>
            <div className='input-label'>
              <span>비밀번호</span>
            </div>
            <div className='input-content with-helpertext'>
              <Input
                placeholder='비밀번호를 입력하세요'
                size={INPUT_SIZE.LARGE}
                name='password'
                type='password'
                onChange={onChangeValues}
              />
              <span>
                ※ 영문, 숫자, 특수문자를 조합하여 10~16자리로 만들어주세요
              </span>
            </div>
          </div>

          <div className='input-container'>
            <div className='input-label'>
              <span>비밀번호 확인</span>
            </div>
            <div className='input-content'>
              <Input
                placeholder='비밀번호를 입력하세요'
                size={INPUT_SIZE.LARGE}
                name='checkPassword'
                type='password'
                onChange={onChangeValues}
              />
            </div>
          </div>

          <div className='input-container'>
            <div className='input-label'>
              <span>이름</span>
            </div>
            <div className='input-content'>
              <Input
                placeholder='이름을 입력하세요'
                size={INPUT_SIZE.LARGE}
                name='name'
                onChange={onChangeValues}
              />
            </div>
          </div>

          <div className='input-container'>
            <div className='input-label'>
              <span>전화번호</span>
            </div>
            <div className='input-content'>
              <Input
                placeholder='전화번호 입력하세요'
                size={INPUT_SIZE.MEDIUM}
                name='phone'
                onChange={onChangeValues}
              />
              <Button
                text='인증번호 받기'
                size={BUTTON_SIZE.SMALL}
                disabled={disabledSendAuthButton}
              />
            </div>
          </div>

          <div className='input-container'>
            <div className='input-label'></div>
            <div className='input-content'>
              <Input
                placeholder='인증번호를 입력하세요'
                size={INPUT_SIZE.MEDIUM}
                name='authNumber'
                onChange={onChangeValues}
              />
              <Button
                text='인증번호 확인'
                size={BUTTON_SIZE.SMALL}
                disabled={disabledCheckAuthButton}
              />
            </div>
          </div>
        </section>
        <section className='signup__section-button'>
          <div className='button-container'>
            <Button
              text='회원가입'
              size={BUTTON_SIZE.LARGE}
              onClick={onClickSignup}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup;
