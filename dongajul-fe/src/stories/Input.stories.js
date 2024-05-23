import Input from '@/components/Input';
import { INPUT_TYPE } from '@/constants/input';
import { fn } from '@storybook/test';

export default {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Input의 라벨을 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      description: 'Input의 값을 설정합니다.',
    },
    name: {
      control: 'text',
      description: 'Input의 이름을 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Input의 placeholder를 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'radio',
      options: Object.values(INPUT_TYPE),
      description: 'Input의 타입을 설정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: INPUT_TYPE.TEXT },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Input을 읽기 전용으로 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Input을 disabled 상태로 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  args: { onChange: fn() },
};

export const Default = {
  args: {
    type: INPUT_TYPE.TEXT,
    readOnly: false,
    disabled: false,
  },
};
