/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "primary-button") {
    return (
      <button
        css={css`
          background-color: #074ee8;
          color: white;
          height: 50px;
          width: 171.19px;
        `}
      >
        {props.children}
      </button>
    );
  } else if (props.type === "secondary-button") {
    return (
      <button
        css={css`
          background-color: #07a4e8;
          color: white;
          height: 50px;
          width: 171.19px;
        `}
      >
        {props.children}
      </button>
    );
  }
}

export default Button;
