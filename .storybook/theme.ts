import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  
  // Brand
  brandTitle: 'Nexus Design System',
  brandUrl: './',
  brandTarget: '_self',
  
  // UI colors based on design tokens
  colorPrimary: '#00D9FF', // accent.600 - Brand accent
  colorSecondary: '#0A0E1B', // primary.600 - Brand primary
  
  // Typography based on design tokens
  fontBase: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: 'JetBrains Mono, Menlo, monospace',
  
  // Main UI colors
  appBg: '#FFFFFF', // neutral.0
  appContentBg: '#FAFAFA', // neutral.50
  appPreviewBg: '#FFFFFF', // neutral.0
  appBorderColor: '#D4D4D4', // neutral.300
  appBorderRadius: 8, // borderRadius.md
  
  // Text colors
  textColor: '#171717', // neutral.900
  textInverseColor: '#FFFFFF', // neutral.0
  textMutedColor: '#737373', // neutral.500
  
  // Toolbar colors
  barTextColor: '#525252', // neutral.600
  barSelectedColor: '#00D9FF', // accent.600
  barBg: '#FFFFFF', // neutral.0
  barHoverColor: '#22D3EE', // accent.400
  
  // Form colors
  buttonBg: '#F5F5F5', // neutral.100
  buttonBorder: '#E5E5E5', // neutral.200
  booleanBg: '#F5F5F5', // neutral.100
  booleanSelectedBg: '#FFFFFF', // neutral.0
  
  // Input colors
  inputBg: '#FFFFFF', // neutral.0
  inputBorder: '#D4D4D4', // neutral.300
  inputTextColor: '#171717', // neutral.900
  inputBorderRadius: 8, // borderRadius.md
  
  // Grid colors
  gridCellSize: 8, // spacing.2
});
