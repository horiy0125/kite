import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { pageRoutes } from '../../config/pageRoutes';
import { BaseProps } from '../../types';

const rootStyle = css`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 24px;
`;

const logoLinkStyle = css`
  display: flex;
  align-items: center;

  padding: 0 4px;

  text-decoration: none;
`;

const logoStyle = css`
  margin-right: 12px;
`;

const linkTextStyle = css`
  font-size: 28px;
  font-weight: 700;

  color: #121212;
`;

export const KiteHeader: React.FC<BaseProps> = props => {
  return (
    <header css={rootStyle} className={props.className}>
      <Link css={logoLinkStyle} to={pageRoutes.index}>
        <img src="/images/vite.svg" alt="" css={logoStyle} />
        <span css={linkTextStyle}>Kite</span>
      </Link>
    </header>
  );
};
