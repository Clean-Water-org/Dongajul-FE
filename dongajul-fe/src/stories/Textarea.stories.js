import Textarea from '@/components/Textarea';
import { fn } from '@storybook/test';

export default {
  title: 'Example/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Textarea의 라벨을 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      description: 'Textarea의 값을 설정합니다.',
    },
    placeholder: {
      control: 'text',
      description: 'Textarea의 placeholder를 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Textarea를 읽기 전용으로 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Textarea를 disabled 상태로 설정합니다.',
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
    label: '텍스트 에리어',
  },
};
