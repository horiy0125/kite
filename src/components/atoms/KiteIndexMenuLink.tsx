import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { BasePropsWithChildren } from '../../types';

type Props = {
  to: string;
} & BasePropsWithChildren;

const rootStyle = css`
  text-align: right;
`;

export const KiteIndexMenuLink: React.FC<Props> = props => {
  return (
    <p css={rootStyle} className={props.className}>
      <Link to={props.to} role="button">
        {props.children}
      </Link>
    </p>
  );
};
