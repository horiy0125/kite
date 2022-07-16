import { css } from '@emotion/react';
import { useAccessControl } from '../../../hooks/accessControl';
import { useAuth } from '../../../hooks/auth';
import { KiteBaseIcon } from '../../atoms/base/KiteBaseIcon';
import { KiteAccountCircleIcon } from '../../atoms/icons/KiteAccountCircleIcon';
import { KiteBaseTemplate } from '../base/KiteBaseTemplate';

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const accountCircleIconStyle = css`
  width: 128px;
  height: 128px;
`;

export const KiteAccountIndexTemplate: React.FC = () => {
  const auth = useAuth();
  const { currentUser } = auth;

  const accessControl = useAccessControl();
  const { isAdminUser } = accessControl;

  return (
    <KiteBaseTemplate>
      <section>
        <h1>アカウント情報</h1>

        {currentUser ? (
          <article>
            <header css={headerStyle}>
              <hgroup>
                <h2>{currentUser.name ? currentUser.name : currentUser.uid}</h2>
                <h3>{isAdminUser ? '管理者' : 'ユーザー'}</h3>
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

            <footer>
              <button onClick={() => {}} className="secondary">
                サインアウト
              </button>
            </footer>
          </article>
        ) : null}
      </section>
    </KiteBaseTemplate>
  );
};
