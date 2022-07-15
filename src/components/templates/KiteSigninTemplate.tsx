import { useFirebaseAuth } from '../../hooks/firebaseAuth';
import { KiteBaseTemplate } from './base/KiteBaseTemplate';

export const KiteSigninTemplate: React.FC = () => {
  const firebaseAuth = useFirebaseAuth();
  const { signIn } = firebaseAuth;

  return (
    <KiteBaseTemplate>
      <section>
        <button onClick={signIn}>サインイン</button>
      </section>
    </KiteBaseTemplate>
  );
};
