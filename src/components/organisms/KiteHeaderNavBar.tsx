import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { pageRoutes } from '../../config/pageRoutes';
import { useFirebaseAuth } from '../../hooks/firebaseAuth';
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

  color: #121212;
`;

const userLinkStyle = css`
  display: flex;
  align-items: center;

  text-decoration: none;
`;

const userIconStyle = css`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const userDisplayNameStyle = css`
  font-size: 16px;

  margin-left: 12px;

  color: #121212;
`;

export const KiteHeaderNavBar: React.FC<BaseProps> = props => {
  const firebaseAuth = useFirebaseAuth();
  const { user } = firebaseAuth;

  return (
    <header css={rootStyle} className={props.className}>
      <nav>
        <ul>
          <li>
            <Link css={logoLinkStyle} to={pageRoutes.index}>
              <img src="/images/vite.svg" alt="ロゴ" css={logoStyle} />
              <span css={linkTextStyle}>Kite</span>
            </Link>
          </li>
        </ul>

        {user ? (
          <ul>
            <li>
              <Link css={userLinkStyle} to={pageRoutes.account.index}>
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="プロフィール画像"
                    css={userIconStyle}
                  />
                ) : null}
                <strong css={userDisplayNameStyle}>{user.displayName}</strong>
              </Link>
            </li>
          </ul>
        ) : null}
      </nav>
    </header>
  );
};
