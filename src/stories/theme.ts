import { createTheme, MantineColorsTuple } from '@mantine/core';

// Design system colors from DESIGN-TOKENS.md
const primaryColors: MantineColorsTuple = [
  '#e5e7eb', // primary.1
  '#d1d5db', // primary.2
  '#9ca3af', // primary.3
  '#6b7280', // primary.4
  '#4b5563', // primary.5
  '#0a0e1b', // primary.6 (main)
  '#080b14', // primary.7
  '#06080f', // primary.8
  '#03040a', // primary.9
  '#03040a', // primary.10
];

const grayColors: MantineColorsTuple = [
  '#fafafa', // neutral.1
  '#f5f5f5', // neutral.2
  '#f0f0f0', // neutral.4
  '#e5e5e5', // colorbordersecondary
  '#d4d4d4', // colorborder
  '#a3a3a3', // colortextquaternary
  '#737373', // colortexttertiary
  '#525252', // colortextsecondary
  '#171717', // colortext
  '#0a0e1b', // colorprimary
];

const successColors: MantineColorsTuple = [
  '#ecfdf5', // colorsuccessbg
  '#d1fae5', // colorsuccessbghover
  '#a7f3d0',
  '#6ee7b7', // colorsuccessborder
  '#34d399', // colorsuccessborderhover
  '#10b981', // colorsuccesshover
  '#059669', // colorsuccess (main)
  '#047857', // colorsuccessactive
  '#065f46',
  '#064e3b',
];

const errorColors: MantineColorsTuple = [
  '#fff5f5', // colorerrorbg
  '#ffe3e3', // colorerrorbghover
  '#ffc9c9',
  '#ffa8a8', // colorerrorborder
  '#ff8787', // colorerrorborderhover
  '#ff6b6b', // colorerrorhover
  '#fa5252', // colorerror (main)
  '#e03131', // colorerroractive
  '#c92a2a',
  '#a61e1e',
];

const warningColors: MantineColorsTuple = [
  '#fff8f5', // colorwarningbg
  '#fff0e6', // colorwarningbghover
  '#ffe4cc',
  '#ffc4a3', // colorwarningborder
  '#ffa574', // colorwarningborderhover
  '#ff8a4c', // colorwarninghover
  '#e8b4a2', // colorwarning (main)
  '#d4a194', // colorwarningactive
  '#c08a7a',
  '#ad7560',
];

const infoColors: MantineColorsTuple = [
  '#ecfeff', // colorinfobg
  '#cffafe', // colorinfobghover
  '#a5f3fc',
  '#67e8f9', // colorinfoborder
  '#22d3ee', // colorinfoborderhover
  '#06b6d4', // colorinfohover
  '#00d9ff', // colorinfo (main)
  '#00b8d9', // colorinfoactive
  '#0099bb',
  '#007a9d',
];

export const designSystemTheme = createTheme({
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  primaryColor: 'primary',
  colors: {
    primary: primaryColors,
    gray: grayColors,
    green: successColors,
    red: errorColors,
    orange: warningColors,
    cyan: infoColors,
  },
  headings: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    sizes: {
      h1: { fontSize: '2.25rem', lineHeight: '2.5rem' }, // 36px
      h2: { fontSize: '1.875rem', lineHeight: '2.25rem' }, // 30px  
      h3: { fontSize: '1.5rem', lineHeight: '2rem' }, // 24px
      h4: { fontSize: '1.25rem', lineHeight: '1.75rem' }, // 20px
      h5: { fontSize: '1.125rem', lineHeight: '1.75rem' }, // 18px
      h6: { fontSize: '1rem', lineHeight: '1.5rem' }, // 16px
    },
  },
  defaultRadius: 'md',
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
  },
  other: {
    // Direct design system colors for easy access
    colorPrimary: '#0a0e1b',
    colorPrimaryBg: '#f3f4f6',
    colorPrimaryBgHover: '#e5e7eb',
    colorPrimaryBorder: '#d1d5db',
    colorPrimaryBorderHover: '#9ca3af',
    colorText: '#171717',
    colorTextSecondary: '#525252',
    colorTextTertiary: '#737373',
    colorTextQuaternary: '#a3a3a3',
    colorBgContainer: '#ffffff',
    colorBgBase: '#fafafa',
    colorBgLayout: '#f5f5f5',
    colorBorder: '#d4d4d4',
    colorBorderSecondary: '#e5e5e5',
    colorSuccess: '#059669',
    colorSuccessBg: '#ecfdf5',
    colorWarning: '#e8b4a2',
    colorWarningBg: '#fff8f5',
    colorError: '#fa5252',
    colorErrorBg: '#fff5f5',
    colorInfo: '#00d9ff',
    colorInfoBg: '#ecfeff',
  },
  components: {
    Button: {
      styles: {
        root: {
          fontWeight: 500,
          borderRadius: '6px',
        },
      },
    },
    Card: {
      styles: {
        root: {
          backgroundColor: '#ffffff',
          border: '1px solid #e5e5e5',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    Paper: {
      styles: {
        root: {
          backgroundColor: '#ffffff',
          border: '1px solid #e5e5e5',
        },
      },
    },
    AppShell: {
      styles: {
        root: {
          backgroundColor: '#fafafa',
        },
        main: {
          backgroundColor: '#fafafa',
        },
        header: {
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e5e5',
        },
        navbar: {
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e5e5e5',
        },
      },
    },
  },
});
