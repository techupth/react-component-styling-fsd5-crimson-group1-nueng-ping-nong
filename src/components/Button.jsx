// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  let backgroundColor = undefined;
  if (props.type === "primary") {
    backgroundColor = "rgba(7, 78, 232, 1)";
  } else if (props.type === "secondary") {
    backgroundColor = "rgba(7, 164, 232, 1)";
  }

  return (
    <div>
      <button
        css={css`
          margin: 20px;
          width: 170px;
          height: 50px;
          background-color: ${backgroundColor};
          font-size: 16px;
          border-radius: 4px;
          color: white;
          font-weight: bold;
        `}
      >
        {props.text}
      </button>
    </div>
  );
}

export default Button;
