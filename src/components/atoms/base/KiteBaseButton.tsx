import { BasePropsWithChildren } from '../../../types';

type Props = JSX.IntrinsicElements['button'] & BasePropsWithChildren;

export const KiteBaseButton: React.FC<Props> = props => {
  return <button className={props.className}>{props.children}</button>;
};
