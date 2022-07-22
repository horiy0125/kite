import { css } from '@emotion/react';
import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { pageRoutes } from '../../../config/pageRoutes';
import { useAccessControl } from '../../../hooks/accessControl';
import { useFirebaseAuth } from '../../../hooks/firebaseAuth';
import { mqExtraSmall } from '../../../styles/mixins';
import { KiteBaseIcon } from '../../atoms/base/KiteBaseIcon';
import { KiteAccountCircleIcon } from '../../atoms/icons/KiteAccountCircleIcon';
import { KiteBaseTemplate } from '../base/KiteBaseTemplate';

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const accountImageStyle = css`
  ${mqExtraSmall(`
    display: none
  `)}

  width: 128px;
  height: 128px;
`;

export const KiteAccountIndexTemplate: React.FC = () => {
  const [signingOut, setSigningOut] = useState(false);

  const firebaseAuth = useFirebaseAuth();
  const { user, signOutAndClearStates } = firebaseAuth;

  const accessControl = useAccessControl();
  const { isAdminUser, isAllowedUser } = accessControl;

  const accountType = useMemo(() => {
    if (isAdminUser) {
      return '管理者アカウント';
    }

    if (isAllowedUser) {
      return '標準アカウント';
    }

    return 'ゲストアカウント';
  }, [isAdminUser, isAllowedUser]);

  const onClickSignOut = useCallback(async () => {
    setSigningOut(true);

    await signOutAndClearStates()
      .catch(() => {})
      .finally(() => {
        setSigningOut(false);
      });
  }, [signOutAndClearStates]);

  return (
    <KiteBaseTemplate>
      <section>
        <h1>プロフィール</h1>

        {user ? (
          <>
            <article>
              <header css={headerStyle}>
                <hgroup>
                  <h2>{user.displayName ? user.displayName : user.email}</h2>
                  <h3>{accountType}</h3>
                </hgroup>

                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="プロフィール画像"
                    css={[accountImageStyle, `border-radius: 50%;`]}
                  />
                ) : (
                  <KiteBaseIcon
                    css={accountImageStyle}
                    icon={<KiteAccountCircleIcon />}
                  />
                )}
              </header>

              <div className="grid">
                <div>名前</div>
                <div>{user.displayName ? user.displayName : '未設定'}</div>
              </div>

              <br />

              <div className="grid">
                <div>メールアドレス</div>
                <div>{user.email}</div>
              </div>

              <br />

              <div className="grid">
                <div>電話番号</div>
                <div>{user.phoneNumber ? user.phoneNumber : '未設定'}</div>
              </div>

              <br />

              <div className="grid">
                <div>初回ログイン日時</div>
                <div>{user.metadata.creationTime}</div>
              </div>

              <br />

              <div className="grid">
                <div>最終ログイン日時</div>
                <div>{user.metadata.lastSignInTime}</div>
              </div>
            </article>

            <button
              onClick={signOutAndClearStates}
              className="secondary"
              aria-busy={signingOut}
            >
              サインアウト
            </button>
          </>
        ) : null}
      </section>
    </KiteBaseTemplate>
  );
};
