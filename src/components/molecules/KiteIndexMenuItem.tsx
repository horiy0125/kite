import { BaseProps } from '../../types';
import { KiteIndexMenuLink } from '../atoms/KiteIndexMenuLink';

type Props = {
  title: string;
  subTitle: string;
  linkTo: string;
  linkLabel: string;
} & BaseProps;

export const KiteIndexMenuItem: React.FC<Props> = props => {
  return (
    <div>
      <hgroup>
        <h3>{props.title}</h3>
        <h4>{props.subTitle}</h4>
      </hgroup>

      <KiteIndexMenuLink to={props.linkTo}>{props.linkLabel}</KiteIndexMenuLink>
    </div>
  );
};
