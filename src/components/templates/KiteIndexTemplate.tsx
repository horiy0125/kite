import { pageRoutes } from '../../config/pageRoutes';
import { useAccessControl } from '../../hooks/accessControl';
import { KiteIndexMenuItem } from '../molecules/KiteIndexMenuItem';
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
              <h2>公開コンテンツ管理</h2>
            </header>

            <KiteIndexMenuItem
              title="ブックマーク"
              subTitle="技術記事などをブックマークとして記録・公開する"
              linkLabel="ブックマーク管理"
              linkTo={pageRoutes.bookmarks.index}
            />

            <hr />

            <KiteIndexMenuItem
              title="マークダウン記事"
              subTitle="マークダウン記事（画像なし）を執筆・公開する"
              linkLabel="マークダウン記事管理"
              linkTo={pageRoutes.markdownPosts.index}
            />
          </article>
        ) : null}

        {isAdminUser || isAllowedUser ? (
          <article>
            <header>
              <h2>{isAdminUser ? 'プライベート' : null}コンテンツ管理</h2>
            </header>

            <KiteIndexMenuItem
              title={`マークダウン${isAdminUser ? '（メモ）' : null}`}
              subTitle="マークダウン形式でメモを記録・管理する"
              linkLabel={`マークダウン${isAdminUser ? '（メモ）' : null}管理`}
              linkTo={pageRoutes.markdowns.index}
            />

            <hr />

            <KiteIndexMenuItem
              title="コードスニペット"
              subTitle="スクリプトを保存・dry runする"
              linkLabel="コードスニペット管理"
              linkTo={pageRoutes.codeSnippets.index}
            />
          </article>
        ) : null}

        {isAdminUser || isAllowedUser ? (
          <article>
            <header>
              <h2>収支管理</h2>
            </header>

            <KiteIndexMenuItem
              title="入力"
              subTitle="収支、月初・月末口座残高を記録する"
              linkLabel="入力画面へ"
              linkTo={pageRoutes.balance.new}
            />

            <hr />

            <KiteIndexMenuItem
              title="家計簿"
              subTitle="各月の収支状況を閲覧・比較する"
              linkLabel="家計簿へ"
              linkTo={pageRoutes.balance.index}
            />
          </article>
        ) : null}

        <article>
          <header>
            <h2>クローゼット</h2>
          </header>

          <KiteIndexMenuItem
            title="アイテム一覧"
            subTitle="持っているアイテムを閲覧・管理する"
            linkLabel="クローゼットへ"
            linkTo={pageRoutes.closet.index}
          />
        </article>

        <article>
          <header>
            <h2>アカウント管理</h2>
          </header>

          <KiteIndexMenuItem
            title="プロフィール"
            subTitle="登録した情報を閲覧・変更する"
            linkLabel="プロフィール画面へ"
            linkTo={pageRoutes.account.index}
          />
        </article>

        {isAdminUser ? (
          <article>
            <header>
              <h2>システム管理</h2>
            </header>

            <KiteIndexMenuItem
              title="アカウント"
              subTitle="登録済みのアカウントを閲覧・管理する"
              linkLabel="アカウント管理"
              linkTo={pageRoutes.accounts.index}
            />
          </article>
        ) : null}
      </section>
    </KiteBaseTemplate>
  );
};
