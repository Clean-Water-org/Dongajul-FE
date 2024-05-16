import Radio from '../components/Radio';
import { fn } from '@storybook/test';

export default {
  title: 'Example/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Radio의 라벨을 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'boolean',
      description: 'Radio의 값을 설정합니다.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    name: {
      control: 'text',
      description: 'Radio의 이름을 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Radio를 disabled 상태로 설정합니다.',
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
    label: '라디오',
    name: 'name',
  },
};
