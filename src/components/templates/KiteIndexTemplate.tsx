import { Link } from 'react-router-dom';
import { pageRoutes } from '../../config/pageRoutes';
import { useAccessControl } from '../../hooks/accessControl';
import { KiteBaseTemplate } from './base/KiteBaseTemplate';

export const KiteIndexTemplate: React.FC = () => {
  const accessControl = useAccessControl();
  const { isAdminUser, isAllowedUser } = accessControl;

  return (
    <KiteBaseTemplate>
      <section>
        <h1>ようこそ</h1>

        {isAdminUser ? (
          <article>
            <header>
              <hgroup>
                <h2>公開コンテンツ管理</h2>
                <h3>ポートフォリオサイトで公開するコンテンツを管理する</h3>
              </hgroup>
            </header>

            <div className="grid">
              <Link to={pageRoutes.bookmarks.index} role="button">
                ブックマーク管理
              </Link>
              <Link to={pageRoutes.markdownPosts.index} role="button">
                マークダウン記事管理
              </Link>
            </div>
          </article>
        ) : null}

        {isAdminUser || isAllowedUser ? (
          <article>
            <header>
              <hgroup>
                <h2>{isAdminUser ? 'プライベート' : null}コンテンツ管理</h2>
                <h3>メモやブックマークなどを管理する</h3>
              </hgroup>
            </header>

            <div className="grid">
              <Link to={pageRoutes.markdowns.index} role="button">
                マークダウン管理
              </Link>

              <Link to={pageRoutes.codeSnippets.index} role="button">
                コードスニペット管理
              </Link>
            </div>
          </article>
        ) : null}

        {isAdminUser || isAllowedUser ? (
          <article>
            <header>
              <hgroup>
                <h2>収支管理</h2>
                <h3>毎月の収入・支出を記録する</h3>
              </hgroup>
            </header>

            <div className="grid">
              <Link to={pageRoutes.balance.new} role="button">
                収入・支出を入力する
              </Link>
              <Link to={pageRoutes.balance.index} role="button">
                家計簿を見る
              </Link>
            </div>
          </article>
        ) : null}

        {isAdminUser ? (
          <article>
            <header>
              <hgroup>
                <h2>システム管理</h2>
                <h3>登録されたアカウントなどを管理する</h3>
              </hgroup>
            </header>

            <div className="grid">
              <Link to={pageRoutes.accounts.index} role="button">
                アカウント管理
              </Link>
            </div>
          </article>
        ) : null}

        <article>
          <header>
            <hgroup>
              <h2>クローゼット</h2>
              <h3>ファッションアイテムを管理する</h3>
            </hgroup>
          </header>

          <div className="grid">
            <Link to={pageRoutes.closet.index} role="button">
              クローゼットを見る
            </Link>
          </div>
        </article>
      </section>
    </KiteBaseTemplate>
  );
};
