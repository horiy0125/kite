import { css } from '@emotion/react';
import { useAccessControl } from '../../../hooks/accessControl';
import { useFirebaseAuth } from '../../../hooks/firebaseAuth';
import { KiteBaseTemplate } from '../base/KiteBaseTemplate';

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const userIconStyle = css`
  width: 128px;
  height: 128px;
  border-radius: 50%;
`;

export const KiteAccountIndexTemplate: React.FC = () => {
  const firebaseAuth = useFirebaseAuth();
  const { user } = firebaseAuth;

  const accessControl = useAccessControl();
  const { isAdminUser } = accessControl;

  return (
    <KiteBaseTemplate>
      <section>
        <h1>アカウント情報</h1>

        {user ? (
          <article>
            <header css={headerStyle}>
              <hgroup>
                <h2>{user.displayName}</h2>
                <h3>
                  Googleアカウントでログイン
                  {isAdminUser ? '（管理者）' : null}
                </h3>
              </hgroup>

              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="プロフィール画像"
                  css={userIconStyle}
                />
              ) : null}
            </header>

            <div className="grid">
              <div>メールアドレス</div>
              <div>{user.email ? user.email : '非表示になっています'}</div>
            </div>

            <br />

            <div className="grid">
              <div>登録日時</div>
              <div>
                {user.metadata.creationTime
                  ? user.metadata.creationTime
                  : '非表示になっています'}
              </div>
            </div>

            <br />

            <div className="grid">
              <div>最終ログイン</div>
              <div>
                {user.metadata.creationTime
                  ? user.metadata.creationTime
                  : '非表示になっています'}
              </div>
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
