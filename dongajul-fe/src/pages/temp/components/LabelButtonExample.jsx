import LabelButton from '@/components/buttons/LabelButton';
import { LABEL_BUTTON_ICON, LABEL_BUTTON_TYPE } from '@/constants/button';

const LabelButtonExample = () => {
  return (
    <>
      {' '}
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
    </>
  );
};

export default LabelButtonExample;
