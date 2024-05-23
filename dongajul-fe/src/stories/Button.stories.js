import { fn } from '@storybook/test';
import Button from '@/components/Button';
import { BUTTON_SIZE, BUTTON_TYPE } from '@/constants/button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '버튼의 텍스트를 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'radio',
      options: Object.values(BUTTON_TYPE),
      description: '버튼의 타입을 설정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: BUTTON_TYPE.PRIMARY },
      },
    },
    size: {
      control: 'radio',
      options: Object.values(BUTTON_SIZE),
      description: '버튼의 크기를 설정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: BUTTON_SIZE.MEDIUM },
      },
    },
    disabled: {
      control: 'boolean',
      description: '버튼을 disabled 상태로 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    type: BUTTON_TYPE.PRIMARY,
    size: BUTTON_SIZE.MEDIUM,
    text: '버튼',
  },
};
