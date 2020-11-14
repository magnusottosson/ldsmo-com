import { css, jsx, Global } from "@emotion/react"

export const H1 = ({ children }) => (
  <h1
    css={css`
      color: #fff;
      font-size: 81px;
      font-weight: 700;
      letter-spacing: -0.055em;
      line-height: 1em;
      text-indent: -0.03em;

      /* title scales as window shrinks */
      @media only screen and (max-width: 988px) {
        font-size: calc(100vw / 12.2);
      }

      @media only screen and (max-width: 900px) {
        font-size: calc(100vw / 12.5);
      }

      @media only screen and (max-width: 760px) {
        font-size: calc(100vw / 12.8);
      }

      @media only screen and (max-width: 660px) {
        font-size: calc(100vw / 13.2);
      }

      @media only screen and (max-width: 565px) {
        font-size: 60px;
        letter-spacing: -0.045em;
        text-indent: -0.012em;
      }
    `}
  >
    {children}
  </h1>
)

export const H2 = ({ children }) => (
  <h2
    css={css`
      color: #fff;
      font-size: 1.8rem;
      font-weight: 500;
      letter-spacing: -0.03em;
      line-height: 1em;
    `}
  >
    {children}
  </h2>
)

export const ExtraLight = ({ children }) => (
  <span
    css={css`
      font-weight: 100;
    `}
  >
    {children}
  </span>
)
