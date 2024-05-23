import { fn } from '@storybook/test';
import Checkbox from '@/components/Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '체크박스의 라벨을 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    checked: {
      control: 'boolean',
      description: '체크박스의 체크 상태를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: '체크박스를 disabled 상태로 설정합니다.',
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
    label: '체크박스',
    cheked: false,
    disabled: false,
  },
};
