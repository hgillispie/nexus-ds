import type { Preview } from "@storybook/react";
import './design-tokens.css';
import theme from './theme';

const preview: Preview = {
  parameters: {
    docs: {
      theme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FFFFFF', // neutral.0
        },
        {
          name: 'secondary',
          value: '#FAFAFA', // neutral.50
        },
        {
          name: 'tertiary',
          value: '#F5F5F5', // neutral.100
        },
        {
          name: 'dark',
          value: '#0A0E1B', // primary.600
        },
      ],
    },
  },
};

export default preview;
