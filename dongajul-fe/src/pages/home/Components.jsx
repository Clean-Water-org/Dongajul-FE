import Checkbox from '@/components/checkbox/Checkbox';
import './Components.scss';
import { useState } from 'react';
import { CHECKBOX_SIZE } from '@/constants/checkbox';
import Switch from '@/components/checkbox/Switch';
import Radio from '@/components/radios/Radio';
import kakaoImage from '@/assets/img/circle_kakao.png';
import naverImage from '@/assets/img/circle_naver.png';

const Components = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [switchVal, setSwitchVal] = useState(true);
  const [card, setCard] = useState(false);
  const [account, setAccount] = useState(false);
  const [kakao, setKakao] = useState(false);
  const [naver, setNaver] = useState(false);

  return (
    <>
      <h1>Components</h1>
      <h2>Atomic Components</h2>
      <hr />
      <br></br>
      <h2>Checkbox</h2>
      <span className='description'>1. CHECKBOX_SIZE.DEFAULT</span>
      <Checkbox
        label='면접 / 10,000원'
        checked={checked1}
        size={CHECKBOX_SIZE.DEFAULT}
        onChange={() => setChecked1(!checked1)}
      />
      <span className='description'>2. CHECKBOX_SIZE.SMALL</span>
      <Checkbox
        label='면접 / 10,000원'
        checked={checked2}
        size={CHECKBOX_SIZE.SMALL}
        onChange={() => setChecked2(!checked2)}
      />
      <span className='description'>3. CHECKBOX_SIZE.DEFAULT && disabled</span>
      <Checkbox
        label='면접 / 10,000원'
        checked={true}
        size={CHECKBOX_SIZE.DEFAULT}
        disabled={true}
        onChange={() => setChecked1(!checked1)}
      />
      <span className='description'>4. CHECKBOX_SIZE.SMALL && disabled</span>
      <Checkbox
        label='면접 / 10,000원'
        checked={false}
        size={CHECKBOX_SIZE.SMALL}
        disabled={true}
        onChange={() => setChecked2(!checked2)}
      />
      <hr />
      <br></br>
      <h2>Switch</h2>
      <span className='description'>1. ON/OFF</span>
      <Switch checked={switchVal} onChange={() => setSwitchVal(!switchVal)} />
      <span className='description'>2. disabled</span>
      <Switch checked={false} disabled={true} />
      <hr />
      <br></br>
      <h2>Radio</h2>
      <span className='description'>1. without image</span>
      <div className='line-wrapper'>
        <Radio
          label='신용카드'
          name='payment'
          value={card}
          onChange={() => setCard(!card)}
        />

        <Radio
          label='계좌이체'
          name='payment'
          value={account}
          onChange={() => setAccount(!account)}
        />
      </div>
      <span className='description'>2. with image</span>
      <div className='line-wrapper'>
        <Radio
          label='카카오톡'
          name='sns'
          value={kakao}
          onChange={() => setKakao(!kakao)}
          image={{
            useImage: true,
            src: kakaoImage,
            alt: '카카오톡',
          }}
        />

        <Radio
          label='계좌이체'
          name='sns'
          value={naver}
          onChange={() => setNaver(!naver)}
          image={{
            useImage: true,
            src: naverImage,
            alt: '네이버',
          }}
        />
      </div>
    </>
  );
};

export default Components;
