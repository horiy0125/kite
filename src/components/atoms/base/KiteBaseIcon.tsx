import { css } from '@emotion/react';
import { BaseProps } from '../../../types';

type Props = {
  icon: React.ReactNode;
} & BaseProps;

const rootStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
`;

export const KiteBaseIcon: React.FC<Props> = props => {
  return (
    <div css={rootStyle} className={props.className}>
      {props.icon}
    </div>
  );
};
