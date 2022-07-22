import { useCallback, useState } from 'react';
import { useFirebaseAuth } from '../../hooks/firebaseAuth';
import { KiteBaseTemplate } from './base/KiteBaseTemplate';

export const KiteSigninTemplate: React.FC = () => {
  const [loggingIn, setLoggingIn] = useState(false);

  const firebaseAuth = useFirebaseAuth();
  const { signIn } = firebaseAuth;

  const onClickLogin = useCallback(async () => {
    setLoggingIn(true);

    await signIn()
      .catch(() => {})
      .finally(() => {
        setLoggingIn(false);
      });
  }, [signIn]);

  return (
    <KiteBaseTemplate>
      <section>
        <h1>Kite へようこそ</h1>
        <button onClick={onClickLogin} aria-busy={loggingIn}>
          Google アカウントでログイン
        </button>
      </section>
    </KiteBaseTemplate>
  );
};
