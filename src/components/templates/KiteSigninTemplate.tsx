import { useCallback, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { KiteBaseTemplate } from './base/KiteBaseTemplate';

export const KiteSigninTemplate: React.FC = () => {
  const auth = useAuth();
  const { signIn } = auth;

  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickSignIn = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();

      setIsLoggingIn(true);
      await signIn(email, password)
        .then(() => {})
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          setIsLoggingIn(false);
        });
    },
    [email, password],
  );

  return (
    <KiteBaseTemplate>
      <section>
        <h1>Kite にサインイン</h1>

        <form>
          <label>
            メールアドレス
            <input type="email" onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            パスワード
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </label>

          <button
            type="submit"
            onClick={e => onClickSignIn(e)}
            aria-busy={isLoggingIn}
          >
            サインイン
          </button>
        </form>
      </section>
    </KiteBaseTemplate>
  );
};
