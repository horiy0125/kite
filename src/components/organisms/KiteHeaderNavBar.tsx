import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { pageRoutes } from '../../config/pageRoutes';
import { BaseProps } from '../../types';

const rootStyle = css`
  padding: 16px 24px;
`;

const logoLinkStyle = css`
  display: flex;
  align-items: center;

  text-decoration: none;
`;

const logoStyle = css`
  margin-right: 12px;
`;

const linkTextStyle = css`
  font-size: 28px;
  font-weight: 700;
`;

export const KiteHeaderNavBar: React.FC<BaseProps> = props => {
  return (
    <header css={rootStyle} className={props.className}>
      <nav>
        <ul>
          <li>
            <Link
              className="contrast"
              css={logoLinkStyle}
              to={pageRoutes.index}
            >
              <img src="/images/vite.svg" alt="ロゴ" css={logoStyle} />
              <span css={linkTextStyle}>Kite</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
