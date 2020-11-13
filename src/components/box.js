import { css, jsx } from "@emotion/react"
import { space, layout, typography, color } from "styled-system"

export default ({children, ...props}) => (
  <div
    css={css`
      ${space(props)};
      ${layout(props)};
      ${typography(props)};
      ${color(props)};
    `}
  >
      {children}
  </div>
)
