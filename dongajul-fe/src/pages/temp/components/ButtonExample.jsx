import Button from '@/components/buttons/Button';
import { BUTTON_ICON, BUTTON_SIZE, BUTTON_TYPE } from '@/constants/button';

const ButtonExample = () => {
  return (
    <>
      <h2>Button</h2>
      <span className='description'>
        1. BUTTON_TYPE.PRIMARY && BUTTON_SIZE.LARGE && disabled
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.PRIMARY}
        size={BUTTON_SIZE.LARGE}
        disabled={true}
      />

      <span className='description'>
        2. BUTTON_TYPE.PRIMARY && BUTTON_SIZE.LARGE
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.PRIMARY}
        size={BUTTON_SIZE.LARGE}
      />

      <span className='description'>
        3. BUTTON_TYPE.GHOST && BUTTON_SIZE.LARGE
      </span>
      <Button text='로그인' type={BUTTON_TYPE.GHOST} size={BUTTON_SIZE.LARGE} />

      <span className='description'>
        4. BUTTON_TYPE.SECONDARY && BUTTON_SIZE.LARGE
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.SECONDARY}
        size={BUTTON_SIZE.LARGE}
      />

      <span className='description'>
        5. BUTTON_TYPE.DANGER && BUTTON_SIZE.LARGE
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.DANGER}
        size={BUTTON_SIZE.LARGE}
      />

      <span className='description'>
        6. BUTTON_TYPE.PRIMARY && BUTTON_SIZE.MEDIUM && disabled
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.PRIMARY}
        size={BUTTON_SIZE.MEDIUM}
        disabled={true}
      />

      <span className='description'>
        7. BUTTON_TYPE.PRIMARY && BUTTON_SIZE.MEDIUM
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.PRIMARY}
        size={BUTTON_SIZE.MEDIUM}
      />

      <span className='description'>
        8. BUTTON_TYPE.GHOST && BUTTON_SIZE.MEDIUM
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.GHOST}
        size={BUTTON_SIZE.MEDIUM}
      />

      <span className='description'>
        9. BUTTON_TYPE.SECONDARY && BUTTON_SIZE.MEDIUM
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.SECONDARY}
        size={BUTTON_SIZE.MEDIUM}
      />

      <span className='description'>
        10. BUTTON_TYPE.DANGER && BUTTON_SIZE.MEDIUM
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.DANGER}
        size={BUTTON_SIZE.MEDIUM}
      />

      <span className='description'>
        11. BUTTON_TYPE.SMALL && BUTTON_SIZE.MEDIUM && disabled
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.PRIMARY}
        size={BUTTON_SIZE.SMALL}
        disabled={true}
      />

      <span className='description'>
        12. BUTTON_TYPE.SMALL && BUTTON_SIZE.MEDIUM
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.PRIMARY}
        size={BUTTON_SIZE.SMALL}
      />

      <span className='description'>
        13. BUTTON_TYPE.GHOST && BUTTON_SIZE.SMALL
      </span>
      <Button text='로그인' type={BUTTON_TYPE.GHOST} size={BUTTON_SIZE.SMALL} />

      <span className='description'>
        14. BUTTON_TYPE.SECONDARY && BUTTON_SIZE.SMALL
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.SECONDARY}
        size={BUTTON_SIZE.SMALL}
      />

      <span className='description'>
        15. BUTTON_TYPE.DANGER && BUTTON_SIZE.SMALL
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.DANGER}
        size={BUTTON_SIZE.SMALL}
      />

      <span className='description'>
        16. BUTTON_TYPE.X_SMALL && BUTTON_SIZE.MEDIUM && disabled
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.PRIMARY}
        size={BUTTON_SIZE.X_SMALL}
        disabled={true}
      />

      <span className='description'>
        12. BUTTON_TYPE.X_SMALL && BUTTON_SIZE.MEDIUM
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.PRIMARY}
        size={BUTTON_SIZE.X_SMALL}
      />

      <span className='description'>
        13. BUTTON_TYPE.GHOST && BUTTON_SIZE.X_SMALL
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.GHOST}
        size={BUTTON_SIZE.X_SMALL}
      />

      <span className='description'>
        14. BUTTON_TYPE.DANGER && BUTTON_SIZE.X_SMALL
      </span>
      <Button
        text='로그인'
        type={BUTTON_TYPE.DANGER}
        size={BUTTON_SIZE.X_SMALL}
      />

      <span className='description'>
        15. BUTTON_TYPE.PRIMARY && BUTTON_SIZE.X_SMALL &&
        BUTTON_ICON.CHECK_WHITE && disabled
      </span>
      <Button
        text='인증완료'
        type={BUTTON_TYPE.PRIMARY}
        size={BUTTON_SIZE.X_SMALL}
        disabled={true}
        icon={{ useIcon: true, type: BUTTON_ICON.CHECK_WHITE }}
      />

      <span className='description'>
        16. BUTTON_TYPE.PRIMARY && BUTTON_SIZE.X_SMALL &&
        BUTTON_ICON.CHECK_WHITE
      </span>
      <Button
        text='확인완료'
        type={BUTTON_TYPE.PRIMARY}
        size={BUTTON_SIZE.X_SMALL}
        icon={{ useIcon: true, type: BUTTON_ICON.CHECK_WHITE }}
      />

      <span className='description'>
        17. BUTTON_TYPE.GHOST && BUTTON_SIZE.X_SMALL && BUTTON_ICON.CHECK_BLUE
      </span>
      <Button
        text='확인완료'
        type={BUTTON_TYPE.GHOST}
        size={BUTTON_SIZE.X_SMALL}
        icon={{ useIcon: true, type: BUTTON_ICON.CHECK_BLUE }}
      />

      <span className='description'>
        18. BUTTON_TYPE.SECONDARY && BUTTON_SIZE.X_SMALL && BUTTON_ICON.PLUS
      </span>
      <Button
        text='추가하기'
        type={BUTTON_TYPE.SECONDARY}
        size={BUTTON_SIZE.X_SMALL}
        icon={{ useIcon: true, type: BUTTON_ICON.PLUS }}
      />
    </>
  );
};

export default ButtonExample;
