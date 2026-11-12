export type ColorScheme = 'light' | 'dark';

export type SchemeColorPalette = {
  text: string;
  textMuted: string;
  background: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
  primary: string;
  primaryDark: string;
  accent: string;
  surface: string;
  surfaceMuted: string;
  border: string;
  foreground: string;
  muted: string;
  success: string;
  warning: string;
  error: string;
  danger: string;
  ink: string;
  inkSoft: string;
  white: string;
};

export type ThemeColorPalette = SchemeColorPalette;

const lightColors: SchemeColorPalette = {
  text: '#10233F',
  textMuted: '#64748B',
  background: '#F4F7FB',
  tint: '#176B87',
  icon: '#64748B',
  tabIconDefault: '#64748B',
  tabIconSelected: '#176B87',
  primary: '#176B87',
  primaryDark: '#0E4E67',
  accent: '#F3A65A',
  surface: '#FFFFFF',
  surfaceMuted: '#E8F1F5',
  border: '#D7E2EA',
  foreground: '#10233F',
  muted: '#64748B',
  success: '#2E8B70',
  warning: '#D88A2B',
  error: '#C94C4C',
  danger: '#C94C4C',
  ink: '#10233F',
  inkSoft: '#294566',
  white: '#FFFFFF',
};

const darkColors: SchemeColorPalette = {
  text: '#F4F7FB',
  textMuted: '#A3B6C8',
  background: '#0F1E30',
  tint: '#74C4D8',
  icon: '#A3B6C8',
  tabIconDefault: '#A3B6C8',
  tabIconSelected: '#74C4D8',
  primary: '#74C4D8',
  primaryDark: '#4CA0B9',
  accent: '#F3A65A',
  surface: '#172B40',
  surfaceMuted: '#203D55',
  border: '#355269',
  foreground: '#F4F7FB',
  muted: '#A3B6C8',
  success: '#6BD0AD',
  warning: '#F3C06D',
  error: '#F58A8A',
  danger: '#F58A8A',
  ink: '#F4F7FB',
  inkSoft: '#C7DBE4',
  white: '#FFFFFF',
};

export const SchemeColors: Record<ColorScheme, SchemeColorPalette> = {
  light: lightColors,
  dark: darkColors,
};

export const Colors = SchemeColors;
export const colors = darkColors;

export const typography = {
  display: 32,
  title: 24,
  heading: 18,
  body: 15,
  caption: 12,
};

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
};
