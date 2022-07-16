import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import { breakPoints } from './variables';

type Styles = string | SerializedStyles;

export const hover = (styles: Styles) => {
  return css`
    &:hover {
      ${styles}
    }
  `;
};

export const hoverWithTransition = (styles: Styles) => {
  return css`
    transition: 0.4s all;
    &:hover {
      ${styles}
    }
  `;
};

export const mqExtraSmall = (styles: Styles) => {
  return css`
    @media only screen and (max-width: ${breakPoints.small - 1}px) {
      ${styles}
    }
  `;
};
