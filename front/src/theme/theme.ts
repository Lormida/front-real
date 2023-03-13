const spaces = {
  s: 5,
  ss: 10,
  sss: 15,
  m: 20,
  mss: 30,
  mm: 40,
  mmss: 50,
  mmm: 60,
  mmmm: 80,
  x: 100,
  xx: 200,
  xxx: 300,
  xxxx: 400,
  l: 500,
  maxContent: 1750,
};

const colors = {
  orange: '#D98639',
  white: '#fff',
  black: '#1E1F27',
  dark: '#1C1C1C',
  purple: '#4B2D67',
  blue: '#1877F2',
};

const fonts = {
  s: 15,
  ss: 24,
  m: 32,
  x: 40,
  l: 48,
  ll: 55,
};

const fontWeights = { s: 300, m: 400, x: 500, l: 700 };

const lineHeights = {
  ss: 22,
  s: 36,
  m: 44,
  x: 48,
  l: 65,
};

const breakPoints = { fold: 280, mobile: 900, tablet: 1200, laptop: 1400 };

export const theme = {
  spaces,
  colors,
  breakPoints,
  fonts,
  lineHeights,
  fontWeights,
};
