import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { KiteAccountChangePasswordTemplate } from './components/templates/account/KiteAccountChangePasswordTemplate';
// import { KiteInformationModal } from './components/organisms/KiteInformationModal';
// import { KiteConfirmModal } from './components/organisms/KiteConfirmModal';
import { KiteAccountIndexTemplate } from './components/templates/account/KiteAccountIndexTemplate';
import { KiteIndexTemplate } from './components/templates/KiteIndexTemplate';
import { KiteSigninTemplate } from './components/templates/KiteSigninTemplate';
import { pageRoutes } from './config/pageRoutes';

export const App: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path={pageRoutes.index} element={<KiteIndexTemplate />} />

          <Route path={pageRoutes.signin} element={<KiteSigninTemplate />} />

          <Route
            path={pageRoutes.account.index}
            element={<KiteAccountIndexTemplate />}
          />
          <Route
            path={pageRoutes.account.changePassword}
            element={<KiteAccountChangePasswordTemplate />}
          />
        </Routes>
      </BrowserRouter>

      {/* <KiteInformationModal /> */}
      {/* <KiteConfirmModal /> */}
    </RecoilRoot>
  );
};
