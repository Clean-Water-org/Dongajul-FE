import Checkbox from '@/components/checkbox/Checkbox';
import './Components.scss';
import { useState } from 'react';
import { CHECKBOX_SIZE } from '@/constants/checkbox';
import Switch from '@/components/checkbox/Switch';
import Radio from '@/components/radios/Radio';
import kakaoImage from '@/assets/img/circle_kakao.png';
import naverImage from '@/assets/img/circle_naver.png';
import LabelButton from '@/components/buttons/LabelButton';
import { LABEL_BUTTON_ICON, LABEL_BUTTON_TYPE } from '@/constants/button';
import Label from '@/components/labels/Label';
import { LABEL_COLOR, LABEL_SIZE, LABEL_TYPE } from '@/constants/label';

const Components = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [switchVal, setSwitchVal] = useState(true);
  const [card, setCard] = useState(false);
  const [account, setAccount] = useState(false);
  const [kakao, setKakao] = useState(false);
  const [naver, setNaver] = useState(false);

  return (
    <section className='components'>
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

      <hr />
      <br></br>
      <h2>Label Button</h2>
      <span className='description'>
        1. LABEL_BUTTON_TYPE.PRIMARY && LABEL_BUTTON_ICON.CLIP
      </span>
      <LabelButton
        text='자소서.xlsx'
        type={LABEL_BUTTON_TYPE.PRIMARY}
        icon={LABEL_BUTTON_ICON.CLIP}
      />

      <span className='description'>
        2. LABEL_BUTTON_TYPE.SECONDARY && LABEL_BUTTON_ICON.CLIP
      </span>
      <LabelButton
        text='파일 첨부하기'
        type={LABEL_BUTTON_TYPE.SECONDARY}
        icon={LABEL_BUTTON_ICON.CLIP}
      />

      <span className='description'>
        3. LABEL_BUTTON_TYPE.DANGER && LABEL_BUTTON_ICON.CANCEL
      </span>
      <LabelButton
        text='공유 중지하기'
        type={LABEL_BUTTON_TYPE.DANGER}
        icon={LABEL_BUTTON_ICON.CANCEL}
      />

      <span className='description'>
        4. LABEL_BUTTON_TYPE.PRIMARY && LABEL_BUTTON_ICON.CALENDAR
      </span>
      <LabelButton
        text='2024년 05월 15일 수요일 오후 6시'
        type={LABEL_BUTTON_TYPE.PRIMARY}
        icon={LABEL_BUTTON_ICON.CALENDAR}
        calendar={{
          showCancelButton: true,
          date: '2024-05-15T18:00',
        }}
      />

      <span className='description'>
        4. LABEL_BUTTON_TYPE.PRIMARY && LABEL_BUTTON_ICON.CALENDAR
      </span>
      <LabelButton
        text='날짜를 선택해주세요'
        type={LABEL_BUTTON_TYPE.SECONDARY}
        icon={LABEL_BUTTON_ICON.CALENDAR}
        calendar={{
          showCancelButton: false,
          date: null,
        }}
      />

      <hr />
      <br></br>
      <h2>Label</h2>
      <span className='description'>
        1. LABEL_SIZE.LARGE && LABEL_COLOR.DEFAULT && LABEL_TYPE.GHOST
      </span>
      <Label
        text='결제완료'
        size={LABEL_SIZE.LARGE}
        color={LABEL_COLOR.DEFAULT}
        type={LABEL_TYPE.GHOST}
        onClick={() => {}}
      />

      <span className='description'>
        2. LABEL_SIZE.LARGE && LABEL_COLOR.DEFAULT && LABEL_TYPE.SECONDARY
      </span>
      <Label
        text='결제완료'
        size={LABEL_SIZE.LARGE}
        color={LABEL_COLOR.DEFAULT}
        type={LABEL_TYPE.SECONDARY}
        onClick={() => {}}
      />

      <span className='description'>
        3. LABEL_SIZE.LARGE && LABEL_COLOR.DEFAULT && LABEL_TYPE.PRIMARY
      </span>
      <Label
        text='결제완료'
        size={LABEL_SIZE.LARGE}
        color={LABEL_COLOR.DEFAULT}
        type={LABEL_TYPE.PRIMARY}
        onClick={() => {}}
      />

      <span className='description'>
        4. LABEL_SIZE.LARGE && LABEL_COLOR.DANGER && LABEL_TYPE.GHOST
      </span>
      <Label
        text='결제취소'
        size={LABEL_SIZE.LARGE}
        color={LABEL_COLOR.DANGER}
        type={LABEL_TYPE.GHOST}
        onClick={() => {}}
      />

      <span className='description'>
        5. LABEL_SIZE.LARGE && LABEL_COLOR.DANGER && LABEL_TYPE.SECONDARY
      </span>
      <Label
        text='결제취소'
        size={LABEL_SIZE.LARGE}
        color={LABEL_COLOR.DANGER}
        type={LABEL_TYPE.SECONDARY}
        onClick={() => {}}
      />

      <span className='description'>
        6. LABEL_SIZE.LARGE && LABEL_COLOR.DANGER && LABEL_TYPE.PRIMARY
      </span>
      <Label
        text='결제취소'
        size={LABEL_SIZE.LARGE}
        color={LABEL_COLOR.DANGER}
        type={LABEL_TYPE.PRIMARY}
        onClick={() => {}}
      />

      <span className='description'>
        7. LABEL_SIZE.LARGE && LABEL_COLOR.GRAYSCALE && LABEL_TYPE.GHOST
      </span>
      <Label
        text='대기중'
        size={LABEL_SIZE.LARGE}
        color={LABEL_COLOR.GRAYSCALE}
        type={LABEL_TYPE.GHOST}
        onClick={() => {}}
      />

      <span className='description'>
        8. LABEL_SIZE.LARGE && LABEL_COLOR.GRAYSCALE && LABEL_TYPE.SECONDARY
      </span>
      <Label
        text='대기중'
        size={LABEL_SIZE.LARGE}
        color={LABEL_COLOR.GRAYSCALE}
        type={LABEL_TYPE.SECONDARY}
        onClick={() => {}}
      />

      <span className='description'>
        9. LABEL_SIZE.LARGE && LABEL_COLOR.GRAYSCALE && LABEL_TYPE.PRIMARY
      </span>
      <Label
        text='대기중'
        size={LABEL_SIZE.LARGE}
        color={LABEL_COLOR.GRAYSCALE}
        type={LABEL_TYPE.PRIMARY}
        onClick={() => {}}
      />
      <span className='description'>
        10. LABEL_SIZE.MEDIUM && LABEL_COLOR.DEFAULT && LABEL_TYPE.GHOST
      </span>
      <Label
        text='IT 개발'
        size={LABEL_SIZE.MEDIUM}
        color={LABEL_COLOR.DEFAULT}
        type={LABEL_TYPE.GHOST}
        onClick={() => {}}
      />

      <span className='description'>
        11. LABEL_SIZE.MEDIUM && LABEL_COLOR.DEFAULT && LABEL_TYPE.SECONDARY
      </span>
      <Label
        text='IT 개발'
        size={LABEL_SIZE.MEDIUM}
        color={LABEL_COLOR.DEFAULT}
        type={LABEL_TYPE.SECONDARY}
        onClick={() => {}}
      />

      <span className='description'>
        12. LABEL_SIZE.MEDIUM && LABEL_COLOR.DEFAULT && LABEL_TYPE.PRIMARY
      </span>
      <Label
        text='# 이직'
        size={LABEL_SIZE.MEDIUM}
        color={LABEL_COLOR.DEFAULT}
        type={LABEL_TYPE.PRIMARY}
        onClick={() => {}}
      />

      <span className='description'>
        13. LABEL_SIZE.MEDIUM && LABEL_COLOR.DANGER && LABEL_TYPE.GHOST
      </span>
      <Label
        text='IT 개발'
        size={LABEL_SIZE.MEDIUM}
        color={LABEL_COLOR.DANGER}
        type={LABEL_TYPE.GHOST}
        onClick={() => {}}
      />

      <span className='description'>
        14. LABEL_SIZE.MEDIUM && LABEL_COLOR.DANGER && LABEL_TYPE.SECONDARY
      </span>
      <Label
        text='IT 개발'
        size={LABEL_SIZE.MEDIUM}
        color={LABEL_COLOR.DANGER}
        type={LABEL_TYPE.SECONDARY}
        onClick={() => {}}
      />

      <span className='description'>
        15. LABEL_SIZE.MEDIUM && LABEL_COLOR.DANGER && LABEL_TYPE.PRIMARY
      </span>
      <Label
        text='# 이직'
        size={LABEL_SIZE.MEDIUM}
        color={LABEL_COLOR.DANGER}
        type={LABEL_TYPE.PRIMARY}
        onClick={() => {}}
      />

      <span className='description'>
        16. LABEL_SIZE.MEDIUM && LABEL_COLOR.GRAYSCALE && LABEL_TYPE.GHOST
      </span>
      <Label
        text='IT 개발'
        size={LABEL_SIZE.MEDIUM}
        color={LABEL_COLOR.GRAYSCALE}
        type={LABEL_TYPE.GHOST}
        onClick={() => {}}
      />

      <span className='description'>
        17. LABEL_SIZE.MEDIUM && LABEL_COLOR.GRAYSCALE && LABEL_TYPE.SECONDARY
      </span>
      <Label
        text='IT 개발'
        size={LABEL_SIZE.MEDIUM}
        color={LABEL_COLOR.GRAYSCALE}
        type={LABEL_TYPE.SECONDARY}
        onClick={() => {}}
      />

      <span className='description'>
        18. LABEL_SIZE.MEDIUM && LABEL_COLOR.GRAYSCALE && LABEL_TYPE.PRIMARY
      </span>
      <Label
        text='# 이직'
        size={LABEL_SIZE.MEDIUM}
        color={LABEL_COLOR.GRAYSCALE}
        type={LABEL_TYPE.PRIMARY}
        onClick={() => {}}
      />
    </section>
  );
};

export default Components;
