// Design Tokens Utility
// Auto-generated from DESIGN-TOKENS.md

export const tokens = {
  // Core Colors
  color: {
    primary: {
      25: '#F9FAFB',
      50: '#F3F4F6',
      100: '#E5E7EB',
      200: '#D1D5DB',
      300: '#9CA3AF',
      400: '#6B7280',
      500: '#4B5563',
      600: '#0A0E1B', // Brand primary
      700: '#080B14',
      800: '#06080F',
      900: '#03040A',
    },
    accent: {
      50: '#ECFEFF',
      100: '#CFFAFE',
      200: '#A5F3FC',
      300: '#67E8F9',
      400: '#22D3EE',
      500: '#06B6D4',
      600: '#00D9FF', // Brand accent
      700: '#00B8D9',
      800: '#0097A7',
    },
    success: {
      50: '#ECFDF5',
      100: '#D1FAE5',
      300: '#6EE7B7',
      400: '#34D399',
      500: '#10B981',
      600: '#059669',
      700: '#047857',
    },
    warning: {
      50: '#FFF8F5',
      100: '#FFF0E6',
      300: '#FFC4A3',
      400: '#FFA574',
      500: '#FF8A4C',
      600: '#E8B4A2', // Rose gold
      700: '#D4A194',
    },
    error: {
      50: '#FFF5F5',
      100: '#FFE3E3',
      300: '#FFA8A8',
      400: '#FF8787',
      500: '#FF6B6B',
      600: '#FA5252',
      700: '#E03131',
    },
    neutral: {
      0: '#FFFFFF',
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
  },

  // Gradients
  gradient: {
    primary: 'linear-gradient(135deg, #0A0E1B 0%, #00D9FF 100%)',
    accent: 'linear-gradient(90deg, #00D9FF 0%, #E8B4A2 100%)',
    dark: 'linear-gradient(180deg, #080B14 0%, #03040A 100%)',
    glow: 'radial-gradient(circle, rgba(0, 217, 255, 0.3) 0%, transparent 70%)',
  },

  // Typography
  typography: {
    fontFamily: {
      display: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      body: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      mono: 'JetBrains Mono, Menlo, monospace',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '20px',
      xl: '24px',
      '2xl': '30px',
      '3xl': '38px',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      base: 1.5,
      relaxed: 1.75,
    },
  },

  // Spacing
  spacing: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
  },

  // Border Radius
  borderRadius: {
    none: '0px',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '9999px',
  },

  // Shadows
  shadow: {
    xs: '0 1px 2px 0 rgba(0, 217, 255, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 217, 255, 0.1)',
    md: '0 4px 6px -1px rgba(0, 217, 255, 0.1), 0 2px 4px -1px rgba(0, 217, 255, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 217, 255, 0.1), 0 4px 6px -2px rgba(0, 217, 255, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 217, 255, 0.1), 0 10px 10px -5px rgba(0, 217, 255, 0.04)',
    glow: '0 0 20px rgba(0, 217, 255, 0.3)',
  },

  // Animation
  animation: {
    duration: {
      fast: '150ms',
      base: '250ms',
      slow: '400ms',
    },
    easing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  // Semantic Colors
  semantic: {
    text: {
      primary: '#171717', // neutral.900
      secondary: '#525252', // neutral.600
      tertiary: '#737373', // neutral.500
      disabled: '#A3A3A3', // neutral.400
      inverse: '#FFFFFF', // neutral.0
      brand: '#0A0E1B', // primary.600
      accent: '#00D9FF', // accent.600
      success: '#059669', // success.600
      warning: '#E8B4A2', // warning.600
      error: '#FA5252', // error.600
    },
    background: {
      primary: '#FFFFFF', // neutral.0
      secondary: '#FAFAFA', // neutral.50
      tertiary: '#F5F5F5', // neutral.100
      disabled: '#F5F5F5', // neutral.100
      overlay: 'rgba(0, 0, 0, 0.45)',
      brand: '#0A0E1B', // primary.600
      accent: '#ECFEFF', // accent.50
      success: '#ECFDF5', // success.50
      warning: '#FFF8F5', // warning.50
      error: '#FFF5F5', // error.50
    },
    border: {
      default: '#D4D4D4', // neutral.300
      secondary: '#E5E5E5', // neutral.200
      brand: '#0A0E1B', // primary.600
      accent: '#67E8F9', // accent.300
      success: '#6EE7B7', // success.300
      warning: '#FFC4A3', // warning.300
      error: '#FFA8A8', // error.300
    },
  },

  // Component Tokens
  component: {
    button: {
      primary: {
        background: '#0A0E1B', // primary.600
        backgroundHover: '#4B5563', // primary.500
        backgroundActive: '#080B14', // primary.700
        text: '#FFFFFF', // neutral.0
        border: 'transparent',
      },
      secondary: {
        background: 'transparent',
        backgroundHover: '#F3F4F6', // primary.50
        backgroundActive: '#E5E7EB', // primary.100
        text: '#0A0E1B', // primary.600
        border: '#D1D5DB', // primary.200
      },
      accent: {
        background: '#00D9FF', // accent.600
        backgroundHover: '#06B6D4', // accent.500
        backgroundActive: '#00B8D9', // accent.700
        text: '#03040A', // primary.900
        border: 'transparent',
      },
    },
    card: {
      background: '#FFFFFF', // neutral.0
      border: '#E5E5E5', // neutral.200
      shadow: '0 4px 6px -1px rgba(0, 217, 255, 0.1), 0 2px 4px -1px rgba(0, 217, 255, 0.06)', // shadow.md
      shadowHover: '0 10px 15px -3px rgba(0, 217, 255, 0.1), 0 4px 6px -2px rgba(0, 217, 255, 0.05)', // shadow.lg
    },
    input: {
      background: '#FFFFFF', // neutral.0
      border: '#D4D4D4', // neutral.300
      borderHover: '#22D3EE', // accent.400
      borderFocus: '#00D9FF', // accent.600
      text: '#171717', // text.primary
      placeholder: '#737373', // text.tertiary
    },
  },
} as const;

// Type definitions for better TypeScript support
export type ColorScale = keyof typeof tokens.color;
export type ColorValue = keyof typeof tokens.color.primary;
export type SpacingValue = keyof typeof tokens.spacing;
export type BorderRadiusValue = keyof typeof tokens.borderRadius;
export type FontSizeValue = keyof typeof tokens.typography.fontSize;
export type FontWeightValue = keyof typeof tokens.typography.fontWeight;
export type ShadowValue = keyof typeof tokens.shadow;

// Utility functions for easy token access
export const getColor = (scale: ColorScale, value: ColorValue): string => {
  return tokens.color[scale][value as keyof typeof tokens.color[typeof scale]];
};

export const getSpacing = (value: SpacingValue): string => {
  return tokens.spacing[value];
};

export const getBorderRadius = (value: BorderRadiusValue): string => {
  return tokens.borderRadius[value];
};

export const getFontSize = (value: FontSizeValue): string => {
  return tokens.typography.fontSize[value];
};

export const getShadow = (value: ShadowValue): string => {
  return tokens.shadow[value];
};
