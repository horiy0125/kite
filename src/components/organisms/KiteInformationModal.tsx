import { css } from '@emotion/react';

const closeButtonStyle = css`
  background: none;
  border: none;
`;

export const KiteInformationModal: React.FC = () => {
  return (
    <dialog open>
      <article>
        <header>
          <button aria-label="Close" css={closeButtonStyle} className="close" />
          Modal title
        </header>
        <p>
          Nunc nec ligula a tortor sollicitudin dictum in vel enim. Quisque
          facilisis turpis vel eros dictum aliquam et nec turpis. Sed eleifend a
          dui nec ullamcorper. Praesent vehicula lacus ac justo accumsan
          ullamcorper.
        </p>
      </article>
    </dialog>
  );
};
