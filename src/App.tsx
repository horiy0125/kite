import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { KiteIndexTemplate } from './components/templates/KiteIndexTemplate';
import { pageRoutes } from './config/pageRoutes';

export const App: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path={pageRoutes.index} element={<KiteIndexTemplate />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};
