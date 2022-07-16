import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { pageRoutes } from '../../config/pageRoutes';
import { useAuth } from '../../hooks/auth';
import { BaseProps } from '../../types';
import { KiteBaseIcon } from '../atoms/base/KiteBaseIcon';
import { KiteAccountCircleIcon } from '../atoms/icons/KiteAccountCircleIcon';

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

const userLinkStyle = css`
  display: flex;
  align-items: center;

  text-decoration: none;
`;

export const KiteHeaderNavBar: React.FC<BaseProps> = props => {
  const auth = useAuth();
  const { currentUser } = auth;

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

        {currentUser ? (
          <ul>
            <li>
              <Link
                css={userLinkStyle}
                to={pageRoutes.account.index}
                className="secondary"
              >
                <KiteBaseIcon icon={<KiteAccountCircleIcon />} />
              </Link>
            </li>
          </ul>
        ) : null}
      </nav>
    </header>
  );
};
