import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import Header from '@/components/Header/Header';
import { BUTTON_ICON, BUTTON_SIZE, BUTTON_TYPE } from '@/constants/button';
import { INPUT_AUTO_FORMAT, INPUT_SIZE } from '@/constants/input';
import { useState } from 'react';
import './Signup.scss';
import * as yup from 'yup';
import Helpertext from '@/components/helpertext/Helpertext';
import { set } from 'react-hook-form';

const Signup = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('이메일 형식으로 입력해주세요')
      .required('이메일 형식으로 입력해주세요'),
    nickname: yup
      .string()
      .max(16)
      .matches(/^[^\p{P}\p{S}]*$/u)
      .required(),
    password: yup
      .string()
      .min(10)
      .max(16)
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,16}$/
      )
      .required(),
    checkPassword: yup.string().required(),
    name: yup.string().required('Name is required'),
    phone: yup
      .string()
      .matches(/^\d{3}-\d{4}-\d{4}$/, '전화번호는 11자리로 입력해주세요')
      .max(13)
      .required('Phone number is required'),
    authNumber: yup.number().required('Auth number is required'),
  });

  const [email, setEmail] = useState({
    value: '',
    warning: false,
    validated: false,
  });

  const [nickname, setNickname] = useState({
    value: '',
    warning: false,
    button: BUTTON_TYPE.DISABLED,
    validated: false,
    buttonIcon: BUTTON_ICON.NONE,
  });

  const [password, setPassword] = useState({
    value: '',
    warning: false,
    validated: false,
  });

  const [checkPassword, setCheckPassword] = useState({
    value: '',
    warning: false,
  });

  const [name, setName] = useState({
    value: '',
    warning: false,
    validated: false,
  });

  const [phone, setPhone] = useState({
    value: '',
    warning: false,
    button: BUTTON_TYPE.DISABLED,
    validated: false,
  });

  const [authNumber, setAuthNumber] = useState({
    value: '',
    warning: false,
    button: BUTTON_TYPE.DISABLED,
    validated: false,
  });

  const [errors, setErrors] = useState({});

  const [userInfo, setUserInfo] = useState({
    email: '',
    nickname: '',
    password: '',
    name: '',
    phone: '',
    authNumber: '',
  });

  const onClickSignup = () => {
    schema
      .validate(userInfo)
      .then((valid) => {
        console.log('회원가입 성공', valid);
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  const onClick = () => {
    alert('버튼 클릭');
  };

  const onBlurPassword = async (e) => {
    const { value } = e.target;
    await schema.validateAt('checkPassword', { checkPassword: value });

    if (checkPassword.value !== password.value) {
      setCheckPassword((prevState) => ({
        ...prevState,
        warning: true,
        validated: false,
      }));
      setErrors((prevState) => ({
        ...prevState,
        checkPassword: '비밀번호가 일치하지 않습니다',
      }));
    }
  };

  const onChangeValues = async (e, setValue) => {
    try {
      const { name, value } = e.target;
      setValue((prevState) => ({ ...prevState, value }));
      await schema.validateAt(name, { [name]: value });

      if (name === 'checkPassword' && value !== password.value) {
        throw new Error();
      }

      setValue((prevState) => ({
        ...prevState,
        warning: false,
        validated: true,
        button: BUTTON_TYPE.SECONDARY,
      }));
      setErrors((prevState) => ({ ...prevState, [name]: '' }));
      setUserInfo((prevState) => ({ ...prevState, [name]: value }));
    } catch (error) {
      setValue((prevState) => ({
        ...prevState,
        warning: true,
        validated: false,
        button: BUTTON_TYPE.DISABLED,
      }));
      setErrors((prevState) => ({ ...prevState, [error.path]: error.message }));
    }
  };

  const onClickDuplicateCheck = () => {
    // TODO 닉네임 값 확인 로직 추가
    setNickname((prevState) => ({
      ...prevState,
      button: BUTTON_TYPE.PRIMARY,
      buttonIcon: BUTTON_ICON.CHECK_WHITE,
    }));
  };

  return (
    <>
      <Header title='회원가입' description='나만의 온라인 사수 찾기, 동아줄' />
      <div className='signup'>
        <section className='signup__section-form'>
          <div className='input-container'>
            <div className='input-label'>
              <span>이메일</span>
            </div>
            <div className='input-content'>
              <div className='row-wrapper'>
                <Input
                  placeholder='이메일을 입력하세요'
                  size={INPUT_SIZE.LARGE}
                  name='email'
                  value={email.value}
                  onChange={(e) => onChangeValues(e, setEmail)}
                  warning={email.warning}
                  validated={email.validated}
                />
              </div>
              <Helpertext text={errors.email} warning={email.warning} />
            </div>
          </div>

          <div className='input-container'>
            <div className='input-label'>
              <span>닉네임</span>
            </div>
            <div className='input-content'>
              <div className='row-wrapper'>
                <Input
                  placeholder='닉네임을 입력하세요'
                  size={INPUT_SIZE.MEDIUM}
                  name='nickname'
                  value={nickname.value}
                  onChange={(e) => onChangeValues(e, setNickname)}
                  warning={nickname.warning}
                  validated={nickname.validated}
                />
                <Button
                  text='중복확인'
                  size={BUTTON_SIZE.SMALL}
                  disabled={nickname.button === BUTTON_TYPE.DISABLED}
                  onClick={onClickDuplicateCheck}
                  type={nickname.button}
                  useIcon={nickname.buttonIcon}
                />
              </div>
              <Helpertext
                text={
                  (nickname.warning ? '' : '※ ') +
                  '특수문자를 제외하여 최대 16자리로 만들어주세요'
                }
                warning={nickname.warning}
              />
            </div>
          </div>

          <div className='input-container'>
            <div className='input-label'>
              <span>비밀번호</span>
            </div>
            <div className='input-content'>
              <div className='row-wrapper'>
                <Input
                  placeholder='비밀번호를 입력하세요'
                  size={INPUT_SIZE.LARGE}
                  name='password'
                  type='password'
                  warning={password.warning}
                  value={password.value}
                  onChange={(e) => onChangeValues(e, setPassword)}
                  validated={password.validated}
                  onBlur={onBlurPassword}
                />
              </div>
              <Helpertext
                text={
                  (password.warning ? '' : '※ ') +
                  '영문, 숫자, 특수문자를 조합하여 10~16자리로 만들어주세요'
                }
                warning={password.warning}
              />
            </div>
          </div>

          <div className='input-container'>
            <div className='input-label'>
              <span>비밀번호 확인</span>
            </div>
            <div className='input-content'>
              <div className='row-wrapper'>
                <Input
                  placeholder='비밀번호를 입력하세요'
                  size={INPUT_SIZE.LARGE}
                  name='checkPassword'
                  type='password'
                  value={checkPassword.value}
                  onChange={(e) => onChangeValues(e, setCheckPassword)}
                  warning={checkPassword.warning}
                  validated={checkPassword.validated}
                />
              </div>
              <Helpertext
                text={
                  checkPassword.warning ? '비밀번호가 일치하지 않습니다' : ''
                }
                warning={checkPassword.warning}
              />
            </div>
          </div>

          <div className='input-container'>
            <div className='input-label'>
              <span>이름</span>
            </div>
            <div className='input-content'>
              <div className='row-wrapper'>
                <Input
                  placeholder='이름을 입력하세요'
                  size={INPUT_SIZE.LARGE}
                  name='name'
                  value={name.value}
                  onChange={(e) => onChangeValues(e, setName)}
                  validated={name.validated}
                />
              </div>
            </div>
          </div>

          <div className='input-container'>
            <div className='input-label'>
              <span>전화번호</span>
            </div>
            <div className='input-content'>
              <div className='row-wrapper'>
                <Input
                  placeholder='전화번호 입력하세요'
                  size={INPUT_SIZE.MEDIUM}
                  name='phone'
                  value={phone.value}
                  onChange={(e) => onChangeValues(e, setPhone)}
                  validated={phone.validated}
                  autoFormat={INPUT_AUTO_FORMAT.PHONE}
                  warning={phone.warning}
                />
                <Button
                  text='인증번호 받기'
                  size={BUTTON_SIZE.SMALL}
                  disabled={phone.button === BUTTON_TYPE.DISABLED}
                  onClick={onClick}
                  type={phone.button}
                />
              </div>
              <Helpertext text={errors.phone} warning={phone.warning} />
            </div>
          </div>

          <div className='input-container'>
            <div className='input-label'></div>
            <div className='input-content'>
              <div className='row-wrapper'>
                <Input
                  placeholder='인증번호를 입력하세요'
                  size={INPUT_SIZE.MEDIUM}
                  name='authNumber'
                  value={authNumber.value}
                  onChange={(e) => onChangeValues(e, setAuthNumber)}
                  validated={authNumber.validated}
                  warning={authNumber.warning}
                />
                <Button
                  text='인증번호 확인'
                  size={BUTTON_SIZE.SMALL}
                  disabled={authNumber.button === BUTTON_TYPE.DISABLED}
                  onClick={onClick}
                  type={authNumber.button}
                />
              </div>
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
