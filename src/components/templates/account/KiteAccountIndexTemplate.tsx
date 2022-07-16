import { css } from '@emotion/react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { pageRoutes } from '../../../config/pageRoutes';
import { useAccessControl } from '../../../hooks/accessControl';
import { useAuth } from '../../../hooks/auth';
import { mqExtraSmall } from '../../../styles/mixins';
import { KiteBaseIcon } from '../../atoms/base/KiteBaseIcon';
import { KiteAccountCircleIcon } from '../../atoms/icons/KiteAccountCircleIcon';
import { KiteBaseTemplate } from '../base/KiteBaseTemplate';

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const accountCircleIconStyle = css`
  ${mqExtraSmall(`
    display: none
  `)}

  width: 128px;
  height: 128px;
`;

export const KiteAccountIndexTemplate: React.FC = () => {
  const auth = useAuth();
  const { currentUser } = auth;

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

  return (
    <KiteBaseTemplate>
      <section>
        <h1>プロフィール</h1>

        {currentUser ? (
          <>
            <article>
              <header css={headerStyle}>
                <hgroup>
                  <h2>
                    {currentUser.name ? currentUser.name : currentUser.uid}
                  </h2>
                  <h3>{accountType}</h3>
                </hgroup>

                <KiteBaseIcon
                  css={accountCircleIconStyle}
                  icon={<KiteAccountCircleIcon />}
                />
              </header>

              <div className="grid">
                <div>名前</div>
                <div>{currentUser.name ? currentUser.name : '未設定'}</div>
              </div>

              <br />

              <div className="grid">
                <div>ニックネーム</div>
                <div>
                  {currentUser.nickname ? currentUser.nickname : '未設定'}
                </div>
              </div>

              <br />

              <div className="grid">
                <div>メールアドレス</div>
                <div>{currentUser.email}</div>
              </div>

              <br />

              <div className="grid">
                <div>パスワード</div>
                <div>
                  <Link to={pageRoutes.account.changePassword}>
                    パスワードを変更する
                  </Link>
                </div>
              </div>

              <br />

              <div className="grid">
                <Link
                  to={pageRoutes.account.edit}
                  role="button"
                  className="outline"
                >
                  プロフィールを変更する
                </Link>
              </div>
            </article>

            <button onClick={() => {}} className="secondary">
              サインアウト
            </button>
          </>
        ) : null}
      </section>
    </KiteBaseTemplate>
  );
};
