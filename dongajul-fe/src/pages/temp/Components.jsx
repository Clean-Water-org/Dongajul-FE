import './Components.scss';
import CheckboxExample from '@/pages/temp/components/CheckboxExample';
import SwitchExample from '@/pages/temp/components/SwitchExample';
import RadioExample from '@/pages/temp/components/RadioExample';
import LabelButtonExample from '@/pages/temp/components/LabelButtonExample';
import LabelExample from '@/pages/temp/components/LabelExample';
import ButtonExample from '@/pages/temp/components/ButtonExample';

const Components = () => {
  return (
    <section className='components'>
      <h1>Components</h1>
      <h2>Atomic Components</h2>
      <hr />
      <br></br>
      <CheckboxExample />
      <hr />
      <br></br>
      <SwitchExample />
      <hr />
      <br></br>
      <RadioExample />
      <hr />
      <br></br>
      <LabelButtonExample />
      <hr />
      <br></br>
      <LabelExample />
      <hr />
      <br></br>
      <ButtonExample />
    </section>
  );
};

export default Components;
