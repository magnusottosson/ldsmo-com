import { css, jsx } from "@emotion/react"
import { space, layout, typography, color } from "styled-system"

export default ({ 
    children, 
    href,
    ...props
}) => (
  <a
    css={css`
      ${space(props)};
      ${layout(props)};
      ${typography(props)};
      ${color(props)};

      color: #fff;
    `}
    href={href}
  >
      {children}
  </a>
)
