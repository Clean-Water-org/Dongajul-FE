import { INPUT_SIZE } from '@/constants/input';
import Button from '@/components/common/button/Button';
import Checkbox from '@/components/common/checkbox/Checkbox';
import Input from '@/components/common/input/Input';
import { BUTTON_SIZE } from '@/constants/button';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <section className="section section-header">
        <div className="title-container">
          <h1 className="title">동아줄</h1>
          <span className="sub-title">나만의 온라인 사수를 만나보세요!</span>
        </div>
      </section>
      <section className="section section-form">
        <div className="input-container">
          <div className="email-wrapper">
            <Input
              placeholder="이메일"
              onChange={() => {}}
              size={INPUT_SIZE.LARGE}
            />
          </div>
          <div className="pwd-wrapper">
            <Input
              placeholder="비밀번호"
              type="password"
              onChange={() => {}}
              size={INPUT_SIZE.LARGE}
            />
          </div>
          <div className="checkbox-wrapper">
            <Checkbox label="이메일 저장하기" onChange={() => {}} />
          </div>
        </div>
        <div className="button-container">
          <Button text="로그인" size={BUTTON_SIZE.LARGE} onClick={() => {}} />
        </div>
      </section>
    </div>
  );
};

export default Login;
