import { CSSObject } from "@emotion/react";

export const screenSize = {
  xs: 320,
  sm: 600,
  md: 840,
  lg: 1029,
  "2xl": 1440,
};
export const mediaQuery = (
  size: keyof typeof screenSize,
  css: CSSObject
): CSSObject => ({
  [`@media (min-width:${screenSize[size]}px)`]: css,
});
