import Label from '@/components/labels/Label';
import { LABEL_COLOR, LABEL_SIZE, LABEL_TYPE } from '@/constants/label';

const LabelExample = () => {
  return (
    <>
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
    </>
  );
};

export default LabelExample;
