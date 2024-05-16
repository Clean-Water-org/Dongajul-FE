import { fn } from '@storybook/test';
import Dropdown from '../components/Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '드롭다운의 라벨을 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    items: {
      control: 'object',
      description: '드롭다운의 아이템을 설정합니다.',
    },
    value: {
      control: 'text',
      description:
        '드롭다운의 선택된 값을 설정합니다. 아이템의 value와 일치해야 합니다.',
    },
    disabled: {
      control: 'boolean',
      description: '드롭다운을 disabled 상태로 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: { onChange: fn() },
};

export const Default = {
  args: {
    label: '드롭다운',
    disabled: false,
  },
};
