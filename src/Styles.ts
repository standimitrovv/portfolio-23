type BreakPoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const mediaQueries: Record<BreakPoints, string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
