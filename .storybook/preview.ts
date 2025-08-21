import type { Preview } from "@storybook/react";
import '../src/index.css';
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
    layout: 'padded',
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
    viewport: {
      viewports: {
        responsive: {
          name: 'Responsive',
          styles: {
            width: '100%',
            height: '100%',
          },
        },
      },
    },
  },
  globalTypes: {
    fontFamily: {
      name: 'Font Family',
      description: 'Font family for components',
      defaultValue: 'Inter',
      toolbar: {
        icon: 'typography',
        items: ['Inter', 'System'],
      },
    },
  },
};

export default preview;
