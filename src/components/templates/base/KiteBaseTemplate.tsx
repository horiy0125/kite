import { BasePropsWithChildren } from '../../../types';
import { KiteHeader } from '../../organisms/KiteHeader';

export const KiteBaseTemplate: React.FC<BasePropsWithChildren> = props => {
  return (
    <>
      <KiteHeader />
      <main className="container">{props.children}</main>
    </>
  );
};
