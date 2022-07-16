import { useCallback, useState } from 'react';
import { useAuth } from '../../../hooks/auth';
import { KiteBaseTemplate } from '../base/KiteBaseTemplate';

export const KiteAccountChangePasswordTemplate: React.FC = () => {
  const auth = useAuth();
  const { changePassword } = auth;

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');

  const [isPasswordChanging, setIsPasswordChanging] = useState(false);

  const onClickChangePassword = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      setIsPasswordChanging(true);
      changePassword(currentPassword, newPassword, newPasswordConfirmation)
        .then(() => {})
        .catch(error => console.error(error))
        .finally(() => {
          setIsPasswordChanging(false);
        });
    },
    [currentPassword, newPassword, newPasswordConfirmation],
  );

  return (
    <KiteBaseTemplate>
      <section>
        <h1>パスワードの変更</h1>

        <form>
          <label>
            現在のパスワード
            <input
              type="password"
              value={currentPassword}
              onChange={e => setCurrentPassword(e.target.value)}
            />
          </label>

          <label>
            新しいパスワード
            <input
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
            />
          </label>

          <label>
            新しいパスワード（確認）
            <input
              type="password"
              value={newPasswordConfirmation}
              onChange={e => setNewPasswordConfirmation(e.target.value)}
            />
          </label>

          <button
            type="submit"
            onClick={e => onClickChangePassword(e)}
            aria-busy={isPasswordChanging}
          >
            パスワードを変更する
          </button>
        </form>
      </section>
    </KiteBaseTemplate>
  );
};
