import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { pageRoutes } from '../../../config/pageRoutes';
import { useAccessControl } from '../../../hooks/accessControl';
import { BasePropsWithChildren } from '../../../types';
import { KiteHeaderNavBar } from '../../organisms/KiteHeaderNavBar';

export const KiteBaseTemplate: React.FC<BasePropsWithChildren> = props => {
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;

  const accessControl = useAccessControl();
  const { isUserSignedIn } = accessControl;

  useEffect(() => {
    if (isUserSignedIn) {
      if (pathname === pageRoutes.signin) {
        navigate(pageRoutes.index);
      }
    } else {
      if (pathname !== pageRoutes.signin) {
        navigate(pageRoutes.signin);
      }
    }
  }, [pathname, isUserSignedIn]);

  return (
    <>
      <KiteHeaderNavBar />
      <main className="container">{props.children}</main>
    </>
  );
};
