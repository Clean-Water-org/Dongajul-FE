import Radio from '@/components/radios/Radio';
import { useState } from 'react';
import kakaoImage from '@/assets/img/circle_kakao.png';
import naverImage from '@/assets/img/circle_naver.png';

const RadioExample = () => {
  const [card, setCard] = useState(false);
  const [account, setAccount] = useState(false);
  const [kakao, setKakao] = useState(false);
  const [naver, setNaver] = useState(false);

  return (
    <>
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

export default RadioExample;
