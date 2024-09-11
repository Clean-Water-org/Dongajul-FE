import Checkbox from '@/components/checkbox/Checkbox';
import { CHECKBOX_SIZE } from '@/constants/checkbox';
import { useState } from 'react';

const CheckboxExample = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <>
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
    </>
  );
};

export default CheckboxExample;
