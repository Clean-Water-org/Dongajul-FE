import Switch from '@/components/checkbox/Switch';
import { useState } from 'react';

const SwitchExample = () => {
  const [switchVal, setSwitchVal] = useState(true);

  return (
    <>
      <h2>Switch</h2>
      <span className='description'>1. ON/OFF</span>
      <Switch checked={switchVal} onChange={() => setSwitchVal(!switchVal)} />
      <span className='description'>2. disabled</span>
      <Switch checked={false} disabled={true} />
    </>
  );
};

export default SwitchExample;
