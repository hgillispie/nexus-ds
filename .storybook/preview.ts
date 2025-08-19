import type { Preview } from "@storybook/react";
import '@mantine/core/styles.css';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      source: {
        state: 'open',
      },
    },
    layout: 'padded',
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'light', value: '#f8f8f8' },
        { name: 'dark', value: '#333333' },
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
